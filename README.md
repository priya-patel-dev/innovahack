# TrustLayer — Autonomous Multi-Agent Research & Fact-Verification System

### 🏆 InnovaHack Chapter-1 · Domain 3 (Gen AI) · Problem Statement 1
**Team Name:** enough  
**Live Application:** [trustlayer.vercel.app](https://trustlayer.vercel.app)  

---

## 📌 Project Pitch
A multi-agent research system that automatically crawls a topic, extracts claims, and runs every single assertion through a **cost-efficient, tiered verification engine** (built on original suspicion-scoring logic) before compiling a citation-backed confidence report—flagging exactly which claims are trustworthy and why.

---

## ⚙️ Core Architecture & Tiered Triage

Unlike simple search-and-summarize AI wrappers, TrustLayer acts as a zero-trust multi-agent courtroom, using a **two-stage verification pipeline** to reduce token cost by ~80%:

1. **Stage 1 (Fast Signals)**: Run on every claim extracted by the **Research Agent**. Performs a lightweight structural anomaly and timeline check without expensive model calls.
2. **Stage 2 (Consolidated Audit)**: Triggers only if Stage 1 flags suspicion or if core document sources are missing. It executes **Cross-Doc Consistency**, **Multi-Query Stability**, and **Round-Trip Question Generation** checks consolidated into a single request to save API quota and latency.
3. **Synthesis Agent**: Weighs all agent consensus signals, assigns a confidence score, and tags claims with visual badges (**Verified** 🟢, **Ambiguous** 🟡, or **Flagged** 🔴).
4. **Human-in-the-Loop Review**: Routes non-green claims to an admin panel for final manual editor approval/rejection.

---

## 📂 Project Directory Structure

Restructured to support deployment on Vercel Serverless Functions:

```
multi-agent-fact-checker/
├── api/
│   └── investigate.js         # Vercel Node.js Serverless SSE stream handler
├── lib/
│   └── agents.js              # Multi-agent classes (Research, Verification, Synthesis)
├── public/
│   └── index.html             # High-fidelity visual dashboard console
├── vercel.json                # Vercel serverless functions configuration
├── server.js                  # Local fallback server runner (using Express/CORS)
├── package.json               # Modularized dependency manifest
└── README.md                  # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js installed (v18+)
- A Gemini API Key (obtain from Google AI Studio)
- (Optional) A Tavily Search API Key

### Running Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/sharmashweta-04/multi-agent-fact-checker.git
   cd multi-agent-fact-checker
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm start
   ```
4. Open your browser and navigate to **`http://localhost:3000`**. You can enter your Gemini API Key in the top-right Settings panel to begin testing.

---

## 👥 Contributors & Team Members

We are team **enough**:

* **Priya Patel** — Team Leader & Core Developer
* **Shweta Sharma** — Core Developer & Git Integrator (Contributor)
* **Archi Chovatiya** — Frontend Developer & UI Designer (Contributor)
* **Vaidehi Mangrolia** — QA Engineer & System Tester (Contributor)
