# TrustLayer — 5-Minute Demo Video Cue Sheet

> [!IMPORTANT]
> **Pre-Recording Checklist:**
> 1. **Warm-up Run**: Perform a complete throwaway investigation run against the live Vercel URL 1–2 minutes before hitting record. This prevents cold starts on the serverless functions from lagging your live recording.
> 2. **Local Fallback**: Keep a local backup server running in a second terminal (`npm start`) pointing to `http://localhost:3000`. If the live production URL hiccups, you can seamlessly switch browser tabs to local.

---

### Video Flow & Cue Sheet

| Timestamp | On-Screen Action | Speaking Script Cue |
| :--- | :--- | :--- |
| **0:00 – 0:45**<br>*(The Hook)* | • Show empty-state TrustLayer console.<br>• Mouse hover over the pipeline rail and empty grid. | *"AI search and research assistants lie with total confidence, hallucinatory references, and high costs. Meet TrustLayer: a zero-trust multi-agent courtroom that audits claims in under 15 seconds."* |
| **0:45 – 2:00**<br>*(Run 1: Clean Facts)* | • Type `"James Webb Space Telescope discoveries"` in the search bar.<br>• Ensure **Planted Anomaly Mode** is **OFF**.<br>• Click **Begin investigation**.<br>• Point to the pulsing SVG network graph as it progresses.<br>• Point to green cards popping up in the grid. | *"Let's run a standard search. As the Research Agent crawls documents and extracts claims, our Stage 1 Fast Checks evaluate syntax and timelines. Since these claims are clean, they bypass the expensive Stage 2 checks entirely—saving us about 80% in token costs, as shown by the dotted skip flow."* |
| **2:00 – 4:00**<br>*(Run 2: Planted Anomaly)* | • Toggle **Planted Anomaly Mode** to **ON**.<br>• Click **Begin investigation**.<br>• Watch the Stage 2 graph paths (Cross-Doc, Multi-Q, Round-Trip) light up.<br>• Find the red **FLAGGED** card (Mars time-traveler) in the grid and click it.<br>• Show the **Signal Trace** drawer on the right.<br>• Click **Reject claim**; verify it lands in the **Review Log** at the bottom-left. | *"Now, let's plant a false anomaly to test the system. Instantly, our Stage 1 check flags the claim as suspicious, routing it to our consolidated Stage 2 Auditor for Cross-Doc, Multi-Query, and Round-Trip checks. Looking at the trace, we see a complete fail across all checks. As an editor, I can click 'Reject Claim' to log it in our human-in-the-loop review queue."* |
| **4:00 – 5:00**<br>*(The Win & Close)* | • Show Slide 4 or 7 from the PPTX pitch deck, or scroll down the console's dashboard meta-stats.<br>• Conclude and thank the judges. | *"By combining cheap fast-pass filtering with deep multi-agent consensus only when suspicious, TrustLayer delivers absolute fact-verification at an 80% cost reduction. It is zero-trust, cost-aware, and human-verified. Thank you."* |
