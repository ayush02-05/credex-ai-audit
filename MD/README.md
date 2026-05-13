# Credex AI Audit

Credex AI Audit is a small full‑stack app that helps teams audit their AI tool subscriptions (plan, seats, and monthly cost) and quickly spot overpaying, plan mismatch, and better-value alternatives. It’s built for startups and small teams who want a simple, explainable spending “checkup” without spreadsheets.

**Deployed URL:** <ADD_YOUR_DEPLOYED_URL_HERE>

## Demo (Screenshots)

> If you prefer, you can replace these with a 30‑second Loom/YouTube link.

1. **Screenshot 1 — Spend form**

![Spend form](./image//Screenshot%201.png)

2. **Screenshot 2 — Audit results**

![Audit results](./image//Screenshot%202.png)

3. **Screenshot 3 — Audit Page**

![Result page](./image/Screenshot%203.png)

## Quick Start

### Prerequisites

- Node.js 20+
- A MongoDB connection string (MongoDB Atlas works)

### Run locally

1. Backend

- `cd Backend`
- `npm ci`
- Create `Backend/.env`:

```
PORT=5000
MONGODB=<your_mongodb_connection_string>
RESEND_API_KEY=<ResendEmail-API>
GOOGLE_API_KEY=<optional_if_you_want_ai_summary>
```

- Start the API:
  - `npm run dev`

The backend exposes:

- `POST /audit/create`
- `GET /audit/getaudit/:id`

2. Frontend

- `cd Frontend`
- `npm ci`
- Create `Frontend/.env`:

```
VITE_API_URL=http://localhost:5000
VITE_FRONTEND_URL=http://localhost:5173
```

- Start the app:
  - `npm run dev`

### Deploy

This repo is set up to deploy as **two services** (one backend, one frontend).

- Backend (Render/Railway/Fly.io)
  - Root directory: `Backend`
  - Install: `npm ci`
  - Start: `npm start`
  - Env vars: `PORT`, `MONGODB`, `GOOGLE_API_KEY` (optional)

- Frontend (Vercel/Netlify)
  - Root directory: `Frontend`
  - Install: `npm ci`
  - Build: `npm run build`
  - Output: `dist`
  - Env vars: `VITE_API_URL`, `VITE_FRONTEND_URL`

## Decisions (Trade-offs)

1. **Static pricing registry vs database table**
   - I kept pricing + alternatives in code (`PricingData.js`) so the audit engine stays deterministic and easy to review. The trade-off is it’s manual to update prices.

2. **Rule-based audit engine vs ML recommendation model**
   - I chose explicit rules (team limits, overpay thresholds, parity scores) so every verdict is explainable. Trade-off: it won’t learn from real usage data automatically.

3. **Treat usage-based APIs as “manual review”**
   - For API tiers (OpenAI/Anthropic PAYG), I return a clear “usage-based pricing” verdict instead of guessing seat prices. Trade-off: fewer automated savings suggestions.

4. **Simple CORS + no auth**
   - The app is optimized for fast demo and assignment review, so it doesn’t include login/auth. Trade-off: not production-safe without adding auth + rate limiting per tenant.

5. **AI summary generation is best-effort**
   - The audit result is fully computed without AI; the AI summary is an optional enhancement and fails gracefully. Trade-off: summary quality depends on external model availability and keys.
