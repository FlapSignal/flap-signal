# @flapsignal/cli

> Command-line interface for the Flap Signal Oracle — query signals, scan markets, and stream on-chain intelligence from your terminal.

## Installation

```bash
npm install -g @flapsignal/cli
```

## Usage

```bash
# Authenticate with your API key
flapsignal auth --key YOUR_API_KEY

# Get the latest signals for a pair
flapsignal signal --pair BTC/USDT

# Scan top signals across all monitored markets
flapsignal scan --top 10

# Stream live signal feed (BSC network)
flapsignal stream --network bsc

# Query the Oracle AI in natural language
flapsignal oracle "What is the current liquidity trend for ETH perpetuals?"

# Verify an on-chain signal proof
flapsignal verify --txhash 0xABC123...

# Check connection status
flapsignal status
```

## Configuration

Set your API key via environment variable or the `auth` command:

```bash
export FLAPSIGNAL_API_KEY=your_api_key
```

## Status

> 🚧 **Coming Soon** — CLI is currently in development. Follow [@flapsignal](https://x.com/flapsignal) for release updates.
