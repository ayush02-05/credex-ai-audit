## Challenges Faced

- Some parts of the audit logic became too complex at first.
- It was difficult to balance good logic with simple readable code.
- Handling multiple audit conditions together took time.

## Learnings

- Learned more about backend structure and controller logic.
- Better understanding of how pricing audit systems can work.
- Learned how to separate business logic from controllers.
- Improved understanding of API responses and savings calculations.
- Learned that simpler and readable code is often better than overly advanced code.
- Learned how AI tools can help in brainstorming logic and architecture during development.

## Next Plan

- Improve the audit result UI.
- Add better result cards and summaries.
- Add audit history feature.
- Improve recommendation quality further.

---

# Assignment Questions (Week 1)

## 1) The hardest bug I hit this week, and how I debugged it

The hardest bug was in the audit engine’s “switch recommendation” logic: it was either recommending switches too aggressively, or not recommending them when it should. The symptoms were confusing because the same input would look “reasonable” for one tool but wrong for another, which made it feel like the pricing data was incorrect.

My first hypothesis was that my savings math was wrong (mixing “per seat” and “per team” costs). I added a few quick console checks to print the inputs (`monthlyCost`, `teamSize`, `marketPrice`) and the computed `monthlySavings`. That showed the math was fine.

My second hypothesis was that the filters were eliminating valid alternatives. I traced each filter step-by-step: feature parity threshold, team size bounds, “same or cheaper” rule, and use-case fit tolerance. What I found was that I had a logical gap: when the alternative was the same price, I still wanted to recommend it sometimes (for a better use-case fit), but only if the improvement was meaningful.

The fix was tightening the conditions for “same price” recommendations: require a minimum delta in use-case fit or quality score. After that change, I verified behavior with targeted unit tests for the key verdicts (overpaying, negotiated deal, switch recommended, optimal). That made the behavior consistent and explainable.

## 2) A decision I reversed mid-week, and what made me reverse it

Mid-week I reversed how I structured the audit logic. Initially, I tried to model the whole system like a “scoring engine” with many weighted factors (pricing score, feature score, workflow fit score, and switching cost) and then produce a final recommendation from a combined score. It looked clean on paper, but it became hard to reason about and harder to debug. Small changes in weights caused surprising outputs, and I kept needing to add exceptions.

What changed my mind was building the UI and realizing that the product experience needed clear, human-readable explanations. A scoring system makes it difficult to justify _why_ the output is what it is (“because the score is 72”) and it also makes edge cases messy. For example, usage-based API pricing doesn’t fit a seat-based model, and team-size limits are hard constraints, not soft signals.

I switched to a more explicit, step-by-step rule approach:

- validate tool and plan
- handle usage-based pricing early
- enforce team-size constraints
- compare against market price (overpay/negotiated)
- only then check alternatives

This reversal reduced complexity, improved explainability, and made it much easier to test. It also aligned better with how a finance person would reason about spend: hard constraints first, then optimization.

## 3) What I would build in week 2 if I had it

If I had a second week, I would focus on turning the demo into something closer to a real “operating tool” for a team.

First, I would add a pricing registry update workflow. Right now, pricing is stored in a static file for determinism and speed. In week 2, I’d build a simple admin-only pathway to update pricing and keep versions (so audits can be reproduced against the pricing snapshot that existed when the audit was created).

Second, I would improve recommendations by incorporating switching friction and consolidation. Today, I include a feature parity score and basic constraints, but I’d extend it to:

- detect overlapping tools by use-case (“two general assistants”)
- propose consolidation options (“drop X, keep Y”)
- factor in switching cost months and break-even analysis more directly

Third, I’d add basic authentication and per-org isolation. Without that, storing audit history is not safe. With auth, I could add a “Saved Audits” page, comparisons over time, and a simple renewal calendar.

Finally, I’d invest in reliability: background jobs for AI summaries (so the core audit endpoint stays fast), better validation (Zod/Joi), and richer monitoring (request tracing, p95 latency, and error dashboards).

## 4) How I used AI tools (and one time the AI was wrong)

I used AI tools mainly as a “thinking partner” rather than a code generator. I used ChatGPT and Claude to:

- brainstorm audit verdict categories and the order of checks
- sanity-check business logic assumptions (what a finance reviewer expects)
- propose edge cases I might miss (usage-based pricing, team-size constraints)
- rewrite explanations so they read less like engineering output and more like a product message

What I didn’t trust AI with was final correctness of logic, pricing facts, and integration details. I treated AI suggestions as drafts and always verified against my own code and the specific pricing data I had collected.

One specific time the AI was wrong: it suggested computing “monthly savings” as `(marketPrice - monthlyCost)` without multiplying by team size, and it also mixed up when to compare against `pricePerUser` versus an overall monthly invoice. If I had followed that suggestion, the savings numbers would have been consistently understated or inconsistent across tools.

I caught it by writing a couple of concrete examples (e.g., 10 seats at $30 vs $20) and noticing the output didn’t match basic arithmetic. After that, I kept the engine strictly seat-based and ensured unit tests assert the savings totals.

## 5) Self-rating (1–10) with one-sentence reasons

- **Discipline: 7/10** — I shipped core features consistently, but I could have spent more time on test/CI earlier instead of adding it near the end.
- **Code quality: 7/10** — The audit engine is now deterministic and testable, but there’s still room for cleaner validation and stronger separation of concerns.
- **Design sense: 8/10** — The UI is simple and readable for a finance-style workflow, and the form/result flow is straightforward.
- **Problem solving: 8/10** — I iterated from an over-engineered approach to a simpler rule system and validated behavior with targeted tests.
- **Entrepreneurial thinking: 7/10** — The app solves a real pain point (wasted SaaS spend), but week 2 would need tighter positioning, onboarding, and a clearer “why now” story.
