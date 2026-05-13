# CONFIDENTIAL — Architecture

## System Diagram

![DataFlow](./image.png)

## Data Flow (Input → Audit Result)

1. The user fills the spend form in the React UI: tool name, plan, team size, per-user monthly cost, and optional use case.
2. The frontend sends the payload to the backend `POST /audit/create`.
3. The backend validates each tool entry (required fields, numeric ranges, and allowed use cases).
4. The audit controller calls the audit engine (`runAudit`) which evaluates each tool with `evaluateTool`.
5. `evaluateTool` compares the submitted plan against a pricing registry (`PricingData.js`) and returns a verdict:
   - Unknown tool / invalid plan
   - Usage-based pricing (manual review)
   - Team size mismatch (overkill or plan limit exceeded)
   - Overpaying or negotiated deal compared to public pricing
   - Switch recommended if there’s a same-or-cheaper alternative with strong parity
   - Otherwise optimal
6. The backend aggregates total monthly/yearly savings across tools and stores the audit in MongoDB.
7. When the user opens the result page, the frontend calls `GET /audit/getaudit/:id`.
8. If the stored audit has no AI summary, the backend optionally generates a short executive summary using Gemini and stores it back on the audit record.

## Why This Stack

- **React + Vite**: fast iteration, good DX, and quick deployment to static hosts.
- **Node + Express**: simple REST API that matches the assignment’s scope and keeps the audit engine close to the UI.
- **MongoDB**: easy persistence for audits (nested result objects) without designing a complex relational schema.
- **Rule-based engine**: predictable, testable outcomes; easy to explain during review.

## If This Had To Handle 10k Audits/Day

- **Make the audit engine a dedicated stateless service** behind the API (or a worker) so scaling is horizontal and deploys are independent.
- **Add caching** for pricing registry and common audit patterns; consider storing pricing in a DB with versioning and a CDN-backed JSON snapshot.
- **Queue AI summaries** (BullMQ/SQS) and generate them asynchronously so the core audit endpoint stays fast and reliable.
- **Add proper rate limiting + auth** (per org) and structured request validation (Zod/Joi) to protect the service.
- **Operational hardening**: request tracing, metrics (p95 latency), structured logs, and DB indexes on `createdAt` and audit IDs.

```

```
