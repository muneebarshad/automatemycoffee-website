# Deployment Setup

## Overview

automatemycoffee.com is hosted on **Cloudflare Workers** using the `@opennextjs/cloudflare` adapter. This lets us run a full Next.js app on Cloudflare's edge network at zero cost (free tier).

## Infrastructure

| Component | Detail |
|-----------|--------|
| **Hosting** | Cloudflare Workers (free tier) |
| **Adapter** | `@opennextjs/cloudflare` (bridges Next.js to Workers) |
| **Deploy tool** | `wrangler` (Cloudflare CLI) |
| **Domain** | automatemycoffee.com + www.automatemycoffee.com |
| **Workers dev URL** | automatemycoffee-website.muneeb-arshad.workers.dev |
| **Cloudflare account** | Same account that manages the automatemycoffee.com domain |

## How Deploys Work

Pushing to the `main` branch on GitHub automatically triggers a build and deploy via Cloudflare's GitHub integration. No manual steps needed.

### Build & Deploy Commands (for reference)

```bash
# Build the app for Cloudflare Workers
npx @opennextjs/cloudflare build

# Deploy to Cloudflare
npx wrangler deploy
```

### Config Files

- **`wrangler.toml`** — Cloudflare Workers config (worker name, entry point, assets directory)
- **`open-next.config.ts`** — OpenNext adapter config (bridges Next.js to Cloudflare)

## DNS

Both `automatemycoffee.com` and `www.automatemycoffee.com` are set as custom domains on the Cloudflare Worker. DNS is managed in the same Cloudflare account.

## How It Works (Simplified)

1. Next.js app gets built using the OpenNext adapter (`@opennextjs/cloudflare`)
2. The build outputs a Worker script (`.open-next/worker.js`) and static assets (`.open-next/assets/`)
3. `wrangler deploy` pushes both to Cloudflare's edge network
4. Requests to automatemycoffee.com hit the Worker, which runs the Next.js server logic
5. Static assets are served directly from Cloudflare's CDN

## Useful Links

- Cloudflare Workers dashboard: https://dash.cloudflare.com
- OpenNext Cloudflare docs: https://opennext.js.org/cloudflare
- Wrangler docs: https://developers.cloudflare.com/workers/wrangler/

## Setup Date

Originally deployed on 2026-04-06.
