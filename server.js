require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { ResearchAgent, VerificationEngine, SynthesisAgent } = require("./agents");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static(__dirname));

// Serve TrustLayer_Frontend.html on the root path
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "TrustLayer_Frontend.html"));
});

/**
 * SSE endpoint for live investigation streaming.
 */
app.get("/api/investigate", async (req, res) => {
  // Set headers for Server-Sent Events (SSE)
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive"
  });

  const sendEvent = (event, data) => {
    res.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`);
  };

  const topic = req.query.topic;
  const planted = req.query.planted === "true";

  // Check query params, headers, or fall back to process.env
  const geminiKey = req.query.geminiKey || req.headers["x-gemini-key"] || process.env.GEMINI_API_KEY;
  const tavilyKey = req.query.tavilyKey || req.headers["x-tavily-key"] || process.env.TAVILY_API_KEY;

  if (!topic) {
    sendEvent("error", { message: "Topic query parameter is missing." });
    res.end();
    return;
  }

  if (!geminiKey) {
    sendEvent("error", { 
      message: "Missing Gemini API Key. Please provide it in the Settings panel (top-right) or configure a .env file." 
    });
    res.end();
    return;
  }

  try {
    const geminiClient = new GoogleGenerativeAI(geminiKey);
    const researchAgent = new ResearchAgent(geminiClient, tavilyKey);
    const verificationEngine = new VerificationEngine(geminiClient);
    const synthesisAgent = new SynthesisAgent();

    // Utility progress helper
    const onProgress = (message) => {
      sendEvent("progress", { message });
    };

    // Stage 1: Research
    sendEvent("stage", { stage: "research", status: "active" });
    onProgress(`Initializing Research Agent for: "${topic}"...`);
    const researchResult = await researchAgent.run(topic, planted, onProgress);
    sendEvent("stage", { stage: "research", status: "done" });

    // Stage 2 & 3: Verification (Stage 1 & Stage 2 run concurrently in parallel)
    sendEvent("stage", { stage: "stage1", status: "active" });
    sendEvent("stage", { stage: "stage2", status: "active" });
    onProgress("Research finished. Running fast structural checks and Stage 2 escalations in parallel...");
    
    const verifiedClaims = await Promise.all(
      researchResult.claims.map(claim => 
        verificationEngine.verifyClaim(claim, researchResult.sources, onProgress)
      )
    );
    sendEvent("stage", { stage: "stage1", status: "done" });
    sendEvent("stage", { stage: "stage2", status: "done" });

    // Stage 4: Synthesis report compilation
    sendEvent("stage", { stage: "synthesis", status: "active" });
    onProgress("Synthesis Agent: Finalizing per-claim confidence metrics...");
    const finalizedClaims = verifiedClaims.map(c => synthesisAgent.compile(c));
    sendEvent("stage", { stage: "synthesis", status: "done" });

    // Stream the final results
    sendEvent("claims", { claims: finalizedClaims });

    // Stage 5: Human-in-Loop panel activation
    sendEvent("stage", { stage: "review", status: "active" });
    const needsReviewCount = finalizedClaims.filter(c => c.badge !== "verified").length;
    onProgress(`Investigation finished. ${finalizedClaims.length} claims resolved. ${needsReviewCount} claims queued for human audit.`);

    sendEvent("complete", { message: "Pipeline completed successfully." });
  } catch (error) {
    console.error("Pipeline failure:", error);
    sendEvent("error", { message: `System error occurred during verification: ${error.message}` });
  } finally {
    res.end();
  }
});

app.listen(PORT, () => {
  console.log(`TrustLayer server running at http://localhost:${PORT}`);
});
