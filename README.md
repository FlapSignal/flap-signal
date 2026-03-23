<div align="center">

<img src="flap-signal-web/public/logo.jpeg" alt="Flap Signal Logo" width="100" />

# ⚡ Flap Signal

**The First AI-Powered Trading Oracle Built for the On-Chain Era**

[![Website](https://img.shields.io/badge/Website-flapsignal.org-8B5CF6?style=for-the-badge&logo=vercel&logoColor=white)](https://flapsignal.org)
[![X (Twitter)](https://img.shields.io/badge/Follow-%40flapsignal-1DA1F2?style=for-the-badge&logo=x&logoColor=white)](https://x.com/flapsignal)
[![GitHub](https://img.shields.io/badge/GitHub-flapsignal-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/flapsignal)
[![Network](https://img.shields.io/badge/Network-Binance%20Smart%20Chain-F0B90B?style=for-the-badge&logo=binance&logoColor=black)](https://www.bnbchain.org)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

</div>

---

## 🧠 What is Flap Signal?

**Flap Signal** is a next-generation, AI-powered signal oracle engineered for high-frequency alpha generation across crypto, futures, and forex markets. Built natively on **Binance Smart Chain (BSC)**, Flap Signal leverages a multi-layered neural intelligence engine to decode market microstructure, detect liquidity shifts, and surface actionable trade signals in real time — before the crowd moves.

Unlike traditional signal services that rely on lagging indicators or manual chart analysis, Flap Signal's Oracle AI continuously scans over **40,000+ trading pairs** across global markets, synthesizes multi-source on-chain data, and delivers hyper-precise signals directly through an intuitive conversational interface at [flapsignal.org](https://flapsignal.org).

Whether you are a seasoned on-chain trader, a DeFi power user, or just stepping into the world of algorithmic alpha — Flap Signal is your edge.

---

## 🌐 Network & On-Chain Details

Flap Signal is deployed and operates on the **Binance Smart Chain (BSC)** ecosystem.

| Property | Details |
|---|---|
| **Network** | Binance Smart Chain (BSC) |
| **Chain ID** | 56 |
| **RPC Endpoint** | `https://bsc-dataseed.binance.org/` |
| **Block Explorer** | [bscscan.com](https://bscscan.com) |
| **Website** | [flapsignal.org](https://flapsignal.org) |
| **X / Twitter** | [@flapsignal](https://x.com/flapsignal) |

---

## ✨ Key Features

- 🔮 **Oracle AI Chat** — Ask the AI to scan specific pairs, sectors, or market conditions using natural language. Get instant, interpreted signal output.
- ⚡ **High-Frequency Signal Engine** — Continuously monitors 40,000+ pairs across crypto, futures & forex markets with sub-second latency.
- 📡 **Real-Time Signal Ticker** — Live feed of current signal events with direction confidence scores.
- 📊 **Market Sentiment Analysis** — Aggregates on-chain sentiment, social velocity, and order flow imbalance into a unified score.
- 🏆 **Recent Profits Dashboard** — Transparent display of recent signal performance and verified on-chain trade outcomes.
- 🔗 **BSC-Native Integration** — Signals are anchored to on-chain data, ensuring verifiable and transparent intelligence.
- 🧩 **SDK & CLI Ready** — Integrate Flap Signal intelligence into your own bots, scripts, or dApps via our open SDK and CLI tools.

---

## 🖥️ CLI

The Flap Signal CLI lets you query the oracle engine, fetch live signals, and stream market data directly from your terminal.

### Installation

```bash
npm install -g @flapsignal/cli
```

### Usage

```bash
# Get help
flapsignal --help

# Fetch latest signals for a specific pair
flapsignal signal --pair BTC/USDT

# Scan top signals across all monitored markets
flapsignal scan --top 10

# Stream live signal feed
flapsignal stream --network bsc

# Query the Oracle AI
flapsignal oracle "What is the current liquidity trend for ETH perpetuals?"
```

### Authentication

```bash
# Set your API key
flapsignal auth --key YOUR_API_KEY

# Check connection status
flapsignal status
```

> Get your API key at [flapsignal.org/dashboard](https://flapsignal.org/dashboard)

---

## 📦 SDK

The Flap Signal JavaScript/TypeScript SDK allows developers to embed the signal oracle directly into their trading bots, analytics dashboards, or dApps.

### Installation

```bash
npm install @flapsignal/sdk
```

### Quick Start

```typescript
import { FlapSignal } from '@flapsignal/sdk';

const client = new FlapSignal({
  apiKey: process.env.FLAPSIGNAL_API_KEY,
  network: 'bsc',
});

// Fetch latest signals
const signals = await client.signals.getLatest({
  pairs: ['BTC/USDT', 'ETH/USDT', 'BNB/USDT'],
  limit: 20,
});

console.log(signals);

// Query the Oracle AI
const response = await client.oracle.ask(
  'Scan global crypto liquidity shifts and identify top 3 momentum plays.'
);

console.log(response.answer);

// Subscribe to live signal stream
client.stream.subscribe({
  network: 'bsc',
  onSignal: (signal) => {
    console.log(`[${signal.pair}] ${signal.direction} — Confidence: ${signal.confidence}%`);
  },
});
```

### Response Model

```typescript
interface Signal {
  id: string;
  pair: string;            // e.g. "BTC/USDT"
  direction: 'LONG' | 'SHORT';
  confidence: number;      // 0–100
  entry: number;
  tp: number[];            // Take profit levels
  sl: number;              // Stop loss
  timeframe: string;       // e.g. "4H"
  network: 'bsc' | 'eth' | 'global';
  timestamp: string;       // ISO 8601
  onChainProofTxHash?: string;
}
```

---

## 🔐 Proof — On-Chain Signal Verification

Flap Signal is committed to full transparency. Every signal generated by the Oracle AI is anchored to the **Binance Smart Chain** via a cryptographic proof transaction. This ensures that signal history is immutable, tamper-proof, and independently verifiable by anyone on-chain.

### How It Works

1. **Signal Generated** — The Oracle AI generates a signal with full parameters (pair, direction, confidence, entry/TP/SL).
2. **Hash Committed** — A SHA-256 hash of the signal payload is committed to BSC via a smart contract call.
3. **Verification** — Anyone can independently verify the signal by comparing the payload hash against the on-chain record.

### Verify a Signal

```bash
# Via CLI
flapsignal verify --txhash 0xABC123...

# Via SDK
const proof = await client.proof.verify('0xABC123...');
console.log(proof.isValid);   // true
console.log(proof.signal);    // original signal data
```

### On-Chain Verification (Manual)

1. Visit [BscScan](https://bscscan.com)
2. Search for the proof transaction hash provided with the signal
3. Inspect the `input data` field — it contains the hex-encoded signal payload
4. Decode and compare against the signal parameters

> Signal proof records are permanent and stored on BSC. No party, including Flap Signal, can alter or delete them.

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS, Custom Design System |
| **Animations** | Framer Motion |
| **AI Oracle** | Proprietary Neural Signal Engine |
| **Network** | Binance Smart Chain (BSC) |
| **Deployment** | Vercel |
| **SDK** | TypeScript / Node.js |
| **CLI** | Node.js |

---

## 📁 Repository Structure

```
flap-signal/
├── flap-signal-web/         # Main web application (React + Vite)
│   ├── src/
│   │   ├── components/      # UI components (Hero, Navbar, Footer, etc.)
│   │   ├── pages/           # Route pages (Home, Chat)
│   │   └── assets/          # Static assets
│   ├── public/              # Public assets (logo, bg video)
│   ├── api/                 # Serverless API functions
│   └── package.json
├── cli/                     # Flap Signal CLI tool
├── sdk/                     # Flap Signal JS/TS SDK
├── proof/                   # On-chain signal proof utilities
└── README.md
```

---

## 🚀 Getting Started (Web)

```bash
# Clone the repo
git clone https://github.com/flapsignal/flap-signal.git
cd flap-signal/flap-signal-web

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 🔗 Links

| | |
|---|---|
| 🌐 Website | [flapsignal.org](https://flapsignal.org) |
| 🐦 X / Twitter | [@flapsignal](https://x.com/flapsignal) |
| 💻 GitHub | [github.com/flapsignal](https://github.com/flapsignal) |
| 🔍 BSCScan | [bscscan.com](https://bscscan.com) |

---

## ⚠️ Disclaimer

Flap Signal is an AI-powered intelligence tool for informational purposes only. Signals generated by the Oracle AI do not constitute financial advice. Trading cryptocurrency, futures, and forex involves substantial risk of loss. Always do your own research (DYOR) and trade responsibly.

---

## 📄 License

MIT License © 2025 Flap Signal. See [LICENSE](./LICENSE) for details.

---

<div align="center">
  <strong>Built for the on-chain era. Powered by intelligence. Anchored on BSC.</strong><br/>
  <a href="https://flapsignal.org">flapsignal.org</a> · <a href="https://x.com/flapsignal">@flapsignal</a>
</div>
