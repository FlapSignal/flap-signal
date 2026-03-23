# @flapsignal/sdk

> JavaScript / TypeScript SDK for integrating Flap Signal oracle intelligence into your trading bots, dashboards, and dApps.

## Installation

```bash
npm install @flapsignal/sdk
```

## Quick Start

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

// Query the Oracle AI
const response = await client.oracle.ask(
  'Scan global crypto liquidity shifts and identify top 3 momentum plays.'
);

// Subscribe to live signal stream
client.stream.subscribe({
  network: 'bsc',
  onSignal: (signal) => {
    console.log(`[${signal.pair}] ${signal.direction} — Confidence: ${signal.confidence}%`);
  },
});
```

## Signal Model

```typescript
interface Signal {
  id: string;
  pair: string;
  direction: 'LONG' | 'SHORT';
  confidence: number;       // 0–100
  entry: number;
  tp: number[];             // Take profit levels
  sl: number;               // Stop loss
  timeframe: string;
  network: 'bsc' | 'eth' | 'global';
  timestamp: string;
  onChainProofTxHash?: string;
}
```

## Status

> 🚧 **Coming Soon** — SDK is currently in development. Follow [@flapsignal](https://x.com/flapsignal) for release updates.
