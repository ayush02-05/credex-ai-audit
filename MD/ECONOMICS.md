# CONFIDENTIAL — Economics (rough unit model)

Below is a spreadsheet-style unit economics model **assuming Credex uses this audit to generate qualified leads** that convert into a “Credex consultation” and then a “credit purchase.” The repo doesn’t define Credex’s exact credit product, so I’m explicit about assumptions.

## 1) What is a converted lead worth to Credex?

Assumption: Credex offers a startup-friendly credit product (line / financing) where the typical customer draws **$50,000** over 6 months.

- APR: **12%** (1%/month)
- Interest revenue: $50,000 × 12% × (6/12) = **$3,000**
- Cost of capital / losses / ops overhead: assume 50% of revenue (rough) → **$1,500 contribution margin**

So, one “credit purchase” (funded customer) is worth **~$1.5k gross profit** to Credex.

If Credex’s product is instead closer to a card/interchange model, this number drops; if it’s a larger facility or longer duration, it rises. The math below stays the same.

## 2) CAC by channel (from GTM)

No paid budget means CAC is mostly labor/time. I’ll price founder/BD time at **$50/hour** as an opportunity-cost proxy.

Channel A — LinkedIn outbound

- 20 DMs/day × 20 days = 400 DMs/month
- Time: 60 minutes/day → 20 hours/month → **$1,000 “time spend”**
- Expected audits generated: ~60/month (from reply + completion)
- CAC per audit: $1,000 / 60 = **$16.70**

Channel B — Community posts (Indie Hackers / Reddit / HN)

- 3 posts/week → 12 posts/month
- Time: 30 min/post → 6 hours/month → **$300**
- Expected audits: 40/month (if 1–2 posts “hit”)
- CAC per audit: $300 / 40 = **$7.50**

Channel C — Credex owned list (unfair channel)

- Time: 2 hours to write + segment → **$100**
- Audits: 100/month (send to warm pipeline)
- CAC per audit: $100 / 100 = **$1.00**

## 3) Conversion rates required to be profitable

Define funnel:

- $A$ = audits completed
- $c_1$ = audit → consultation booked
- $c_2$ = consult → credit purchase
- Value per purchase (profit): $V$ = $1,500
- CAC per audit: $K$ (weighted)

Profit condition:
$$A \cdot c_1 \cdot c_2 \cdot V \;>\; A \cdot K$$
Cancel $A$:
$$c_1 \cdot c_2 \;>\; K/V$$

Example with mixed channels: assume **$K = $8** per audit (blend of A/B/C).
Then:

- Break-even $c_1 \cdot c_2 > 8/1500 = 0.0053$ (0.53%)

Concrete, realistic target:

- $c_1$ (audit → consult) = **10%** (audit is high-intent + CTA is on result page)
- $c_2$ (consult → purchase) = **15%** (qualified finance conversation)
- Product: 0.10 × 0.15 = **1.5%**

At 1.5% end-to-end, expected profit per audit:

- Expected value per audit: 0.015 × $1,500 = **$22.50**
- Less CAC $8 → **$14.50 contribution per audit**

## 4) What must be true for $1M ARR in 18 months?

Translate to required funded customers.

Assumption: each funded customer yields **$3,000 annual revenue** (not profit). That’s consistent with the earlier 6‑month, $50k draw at 12% APR; annualized revenue per active customer depends on renewal and repeat usage.

To reach $1,000,000 ARR:

- Required active customers: $1,000,000 / 3,000 \approx 334$ customers

Working backwards from conversion:

- Assume audit → consult $c_1 = 10%$
- Consult → purchase $c_2 = 15%$
- End-to-end $= 1.5%$

Audits needed to create 334 customers:

- $334 / 0.015 \approx 22,267$ audits over 18 months
- That’s ~1,237 audits/month, or ~41/day.

What has to be true operationally:

- Distribution: Credex must push this through owned channels/partners (warm traffic), not only cold community.
- Product: audit completion must stay high (≥20%) and the report must make the “book consult” CTA feel obviously valuable.
- Sales capacity: if consult close rate is 15%, then for 334 closes you need ~2,227 consults over 18 months (~124/month).

If Credex’s revenue/customer is higher (larger draws, fees, longer duration), the required audits drop linearly.
