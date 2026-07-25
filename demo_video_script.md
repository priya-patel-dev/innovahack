# TrustLayer — 5-Minute Explanatory Video Script

This script is structured for a 5-minute presentation video. It covers the pitch deck walkthrough, technical architecture, and a live demonstration of both clean research and anomaly detection modes.

---

## Video Segments Overview
- **0:00 – 0:50**: Hook, Team Intro & The RAG Problem (Slides 1 & 2)
- **0:50 – 1:50**: Architecture & The 80% Cost-Savings Core IP (Slides 3 & 4)
- **1:50 – 3:10**: Live Demo Run 1: Normal Search & Fast-Pass Bypassing (App Console)
- **3:10 – 4:20**: Live Demo Run 2: Planted Anomaly & Deep Signal Trace (App Console)
- **4:20 – 5:00**: Integration Roadmap & Pitch Outro (Slides 6 & 7)

---

## Complete Dialogue & Action Script

| Timestamp | Visual Layout & On-Screen Action | Audio Voiceover (Dialogue Script) |
| :--- | :--- | :--- |
| **0:00 – 0:25** | **Show Slide 1: Title Slide (Dark bg)**<br>• Title "TrustLayer" and subtitle visible.<br>• Side card shows Team Name "enough" and members. | *"Hello judges! We are team 'enough', and today we are excited to present TrustLayer—an autonomous multi-agent research and fact-verification system designed to make AI outputs safe, cheap, and fully auditable at scale."* |
| **0:25 – 0:50** | **Transition to Slide 2: The Problem (Light bg)**<br>• Focus on the 3 neo-brutalist cards: Blind Spots, Fake Citations, and Cost Bottlenecks. | *"Large Language Models lie with absolute confidence. The root cause is that a single LLM cannot verify its own homework. Furthermore, standard RAG systems summarize whatever they retrieve, citing false or contradictory sources. While multi-step verification fixes this, running deep checks on every single sentence is too slow and too expensive."* |
| **0:50 – 1:20** | **Transition to Slide 3: System Architecture (Light bg)**<br>• Point to the left descriptions and the dark right-side console flow diagram showing the 5-node consensus. | *"TrustLayer solves this by establishing a zero-trust multi-agent consensus network. A Research Agent extracts checkable claims, a Verification Engine triages them using cheap Fast Checks, a Synthesis Agent calculates confidence scores, and a Review Panel queues any ambiguous findings for final human sign-off."* |
| **1:20 – 1:50** | **Transition to Slide 4: Key IP (Dark bg)**<br>• Emphasize the giant "80%" stat callout and the three right-side explanation panels. | *"Our core differentiator is cost-aware triage, which cuts verification token costs by an estimated 80%. Instead of deep-checking every fact, Stage 1 runs a cheap structural scan. If a claim is clean, it is cleared instantly. Deep, multi-resource Stage 2 checks only run on suspicious or unsupported claims, Consolidated into a single prompt to save latency."* |
| **1:50 – 2:30** | **Switch Screen to Live Web Browser Console**<br>• Empty state dashboard is visible.<br>• Type `"James Webb Space Telescope discoveries"` in the topic bar.<br>• Make sure Planted Anomaly is unchecked.<br>• Click **Begin investigation**. | *"Let’s see this in action. I'm typing 'James Webb Space Telescope discoveries' into our Console. When I hit Begin, the agent network topology lights up. The Research Agent crawls references and extracts distinct claims. Watch the path stream in real-time."* |
| **2:30 – 3:10** | **Zoom in on the Grid and Graph (App Console)**<br>• Show claims appearing in the grid, all turning green with "VERIFIED".<br>• Highlight the dotted "skip flow" path on the SVG graph. | *"Notice that because these factual claims are solid and clear, they pass the Stage 1 syntax and timeline check. The pipeline automatically bypasses the expensive Stage 2 checks, saving us critical token budget. All claims are auto-passed as green, indicating they are 100% trustworthy."* |
| **3:10 – 3:45** | **Enable Planted Anomaly Mode (App Console)**<br>• Check the "Planted Anomaly Mode" toggle.<br>• Click **Begin investigation**.<br>• Watch the Stage 2 graph nodes (Cross-Doc, Multi-Q, Round-Trip) pulse red/yellow and flow actively. | *"Now, let's test the zero-trust aspect by planting a false claim. I'll toggle Planted Anomaly Mode on and rerun. Here, the system extracts a claim about JWST being secretly funded by a time-traveler in 1947. Instantly, the Stage 1 filter flags the structural and date anomaly, and escalates it to deep checks. Watch the Stage 2 paths light up."* |
| **3:45 – 4:20** | **Click the Red FLAGGED Card (App Console)**<br>• The right-side Drawer slides open.<br>• Point to the **Signal Trace** failing Cross-Doc, Multi-Query, and Round-Trip checks.<br>• Click **Reject Claim** and point to the entry added to the **Review Log**. | *"The claim is flagged red with a low 0.11 confidence. By clicking it, we open our Signal Trace. Cross-Doc check failed because no other crawled sources support this 1947 claim. Multi-Query and Round-Trip checks failed due to semantic drift. As a human auditor, I can review this trace and click 'Reject Claim' to lock it out of our final report."* |
| **4:20 – 4:45** | **Switch Screen to Slide 6: Roadmap (Light bg)**<br>• Point to the three dark cards: API Middleware, Browser Extension, Admin Console. | *"TrustLayer is ready for real-world integration. It can be deployed as API Middleware to block chatbot hallucinations, a Browser Extension to highlight fake claims in Google Docs, or an Admin Console to secure editorial content before publication."* |
| **4:45 – 5:00** | **Switch Screen to Slide 7: Closing Slide (Dark bg)**<br>• Show slide bullets and links.<br>• Speak closing remarks with confidence. | *"TrustLayer makes AI research safe, cheap, and fully verifiable. The live app is hosted on Vercel, and our complete open-source multi-agent code is available on GitHub. Thank you so much for your time!"* |
