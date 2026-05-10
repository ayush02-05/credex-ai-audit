<!-- # AI Tool Pricing Data

Last Updated: 2026-05-07

This document contains pricing references used by the AI Spend Audit engine.
All pricing values are sourced from official vendor pricing pages.

---

# Supported Use Cases

- coding
- writing
- data
- research
- mixed

---

# Recommended Form Schema

```js
{
  companyName: "",
  email: "",
  teamSize: 0,

  tools: [
    {
      toolName: "",
      plan: "",
      monthlySpend: 0,
      seats: 0,
      useCase: ""
    }
  ]
}
```

---

# Form Persistence Requirement

Form state must persist across page reloads.

Recommended implementation:

```js
useEffect(() => {
  localStorage.setItem("audit-form", JSON.stringify(formData));
}, [formData]);

useEffect(() => {
  const saved = localStorage.getItem("audit-form");

  if (saved) {
    setFormData(JSON.parse(saved));
  }
}, []);
```

---

# Pricing Sources

## Cursor

### Individual Plans

- Hobby: Free
  Source: https://cursor.com/pricing
  Verified: 2026-05-07

- Pro: $20/user/month
  Source: https://cursor.com/pricing
  Verified: 2026-05-07

- Pro+: $60/user/month
  Source: https://cursor.com/pricing
  Verified: 2026-05-07

- Ultra: $200/user/month
  Source: https://cursor.com/pricing
  Verified: 2026-05-07

### Business Plans

- Teams: $40/user/month
  Source: https://cursor.com/pricing
  Verified: 2026-05-07

- Enterprise: Custom pricing
  Source: https://cursor.com/pricing
  Verified: 2026-05-07

---

## GitHub Copilot

### Individual Plans

- Free: Free
  Source: https://docs.github.com/copilot/reference/copilot-billing/models-and-pricing
  Verified: 2026-05-07

- Pro: $10/user/month
  Source: https://docs.github.com/copilot/reference/copilot-billing/models-and-pricing
  Verified: 2026-05-07

- Pro+: $39/user/month
  Source: https://docs.github.com/copilot/reference/copilot-billing/models-and-pricing
  Verified: 2026-05-07

### Organization Plans

- Business: $19/user/month
  Source: https://docs.github.com/copilot/reference/copilot-billing/models-and-pricing
  Verified: 2026-05-07

- Enterprise: $39/user/month
  Source: https://docs.github.com/copilot/reference/copilot-billing/models-and-pricing
  Verified: 2026-05-07

---

## Claude

### Individual Plans

- Free: Free
  Source: https://claude.com/pricing
  Verified: 2026-05-07

- Pro: $20/user/month
  Source: https://claude.com/pricing
  Verified: 2026-05-07

- Max 5x: $100/user/month
  Source: https://claude.com/pricing
  Verified: 2026-05-07

- Max 20x: $200/user/month
  Source: https://claude.com/pricing
  Verified: 2026-05-07

### Team Plans

- Team Standard Seat: $25/user/month
  Source: https://claude.com/pricing
  Verified: 2026-05-07

- Team Premium Seat: $125/user/month
  Source: https://claude.com/pricing
  Verified: 2026-05-07

- Enterprise: Custom pricing
  Source: https://claude.com/pricing
  Verified: 2026-05-07

---

## Anthropic API

- Claude Sonnet 4.6 Input: $3 / MTok
  Source: https://docs.claude.com/en/docs/about-claude/pricing
  Verified: 2026-05-07

- Claude Sonnet 4.6 Output: $15 / MTok
  Source: https://docs.claude.com/en/docs/about-claude/pricing
  Verified: 2026-05-07

- Claude Opus 4.7 Input: $5 / MTok
  Source: https://claude.com/pricing
  Verified: 2026-05-07

- Claude Opus 4.7 Output: $25 / MTok
  Source: https://claude.com/pricing
  Verified: 2026-05-07

---

## ChatGPT

### Consumer Plans

- Free: Free
  Source: https://openai.com/pricing
  Verified: 2026-05-07

- Plus: $20/user/month
  Source: https://openai.com/pricing
  Verified: 2026-05-07

- Team: $30/user/month
  Source: https://openai.com/pricing
  Verified: 2026-05-07

- Enterprise: Custom pricing
  Source: https://openai.com/pricing
  Verified: 2026-05-07

---

## OpenAI API

- GPT-4.1 Input: $2 / MTok
  Source: https://openai.com/api/pricing
  Verified: 2026-05-07

- GPT-4.1 Output: $8 / MTok
  Source: https://openai.com/api/pricing
  Verified: 2026-05-07

- GPT-5.5 Input: $5 / MTok
  Source: https://openai.com/api/pricing
  Verified: 2026-05-07

- GPT-5.5 Output: $30 / MTok
  Source: https://openai.com/api/pricing
  Verified: 2026-05-07

---

## Gemini

### Consumer Plans

- Free: Free
  Source: https://gemini.google.com/subscriptions
  Verified: 2026-05-07

- Gemini Advanced / Pro: $19.99/month
  Source: https://gemini.google.com/subscriptions
  Verified: 2026-05-07

### API Plans

- Gemini 2.5 Pro Input: ~$1.25 / MTok
  Source: https://ai.google.dev/pricing
  Verified: 2026-05-07

- Gemini 2.5 Pro Output: ~$10 / MTok
  Source: https://ai.google.dev/pricing
  Verified: 2026-05-07

---

## Windsurf

### Individual Plans

- Free: Free
  Source: https://windsurf.com/pricing
  Verified: 2026-05-07

- Pro: ~$15/user/month
  Source: https://windsurf.com/pricing
  Verified: 2026-05-07

### Team Plans

- Teams: Custom pricing
  Source: https://windsurf.com/pricing
  Verified: 2026-05-07

---

# Notes

- Enterprise pricing is marked as "Custom" when vendors do not publicly disclose exact pricing.
- API pricing is based on token usage and may vary by model version.
- MTok = 1 million tokens.
- Pricing may change over time and should be periodically re-verified. -->

# AI Tool Pricing Data

Last Updated: 2026-05-10

This document contains all pricing references used by the AI Spend Audit engine.

All pricing values are sourced from official vendor pricing pages.

---

# Supported Use Cases

- coding
- writing
- research
- data
- mixed

---

# Recommended Input Schema

```js
{
  companyName: "",
  tools: [
    {
      name: "",
      currentPlan: "",
      monthlyCost: 0,
      seats: 0,
      useCase: ""
    }
  ]
}
```

---

# Important Notes

- `monthlyCost` = actual amount user currently pays PER USER
- `seats` = number of users using the tool
- Audit engine compares:
  - user's pricing
  - official market pricing
  - team-size fit
  - alternative tools
- Enterprise/custom pricing plans use:

```js
pricePerUser: null;
```

---

# Pricing Data Structure

```js
{
  ToolName: {
    PlanName: {
      pricePerUser: 20,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: Infinity,
      useCaseTags: ["coding"],
      featureScore: 90,
      source: "official pricing url"
    }
  }
}
```

---

# Cursor

Source:
https://cursor.com/pricing

Verified:
2026-05-10

## Plans

| Plan       | Price     | Team Size | Use Cases    |
| ---------- | --------- | --------- | ------------ |
| Hobby      | Free      | 1         | coding       |
| Pro        | $20/user  | 1+        | coding       |
| ProPlus    | $60/user  | 1+        | coding, data |
| Ultra      | $200/user | 1+        | coding, data |
| Teams      | $40/user  | 2+        | coding       |
| Enterprise | Custom    | 50+       | coding, data |

---

# ChatGPT

Source:
https://openai.com/chatgpt/pricing

Verified:
2026-05-10

## Plans

| Plan       | Price     | Team Size | Use Cases              |
| ---------- | --------- | --------- | ---------------------- |
| Free       | Free      | 1         | mixed                  |
| Plus       | $20/user  | 1         | mixed, coding, writing |
| Pro        | $200/user | 1         | coding, research, data |
| Team       | $30/user  | 2-149     | mixed, coding          |
| Enterprise | Custom    | 150+      | mixed, coding, data    |

---

# Claude

Source:
https://claude.com/pricing

Verified:
2026-05-10

## Plans

| Plan       | Price     | Team Size | Use Cases         |
| ---------- | --------- | --------- | ----------------- |
| Free       | Free      | 1         | writing, research |
| Pro        | $20/user  | 1         | writing, research |
| Max100     | $100/user | 1         | coding, research  |
| Max200     | $200/user | 1         | coding, research  |
| Team       | $30/user  | 5+        | writing, research |
| Enterprise | Custom    | 100+      | mixed, data       |

---

# Windsurf

Source:
https://windsurf.com/pricing

Verified:
2026-05-10

## Plans

| Plan  | Price    | Team Size | Use Cases |
| ----- | -------- | --------- | --------- |
| Free  | Free     | 1         | coding    |
| Pro   | $15/user | 1+        | coding    |
| Teams | $30/user | 2+        | coding    |

---

# Gemini

Source:
https://gemini.google.com

Verified:
2026-05-10

## Plans

| Plan     | Price    | Team Size | Use Cases         |
| -------- | -------- | --------- | ----------------- |
| Free     | Free     | 1         | research, mixed   |
| Advanced | $20/user | 1+        | research, writing |

---

# Perplexity

Source:
https://www.perplexity.ai/pro

Verified:
2026-05-10

## Plans

| Plan       | Price    | Team Size | Use Cases      |
| ---------- | -------- | --------- | -------------- |
| Free       | Free     | 1         | research       |
| Pro        | $20/user | 1+        | research, data |
| Enterprise | Custom   | 20+       | research, data |

---

# GitHub Copilot

Source:
https://github.com/features/copilot

Verified:
2026-05-10

## Plans

| Plan       | Price    | Team Size | Use Cases    |
| ---------- | -------- | --------- | ------------ |
| Free       | Free     | 1         | coding       |
| Pro        | $10/user | 1         | coding       |
| ProPlus    | $39/user | 1         | coding, data |
| Business   | $19/user | 2+        | coding       |
| Enterprise | $39/user | 10+       | coding, data |

---

# OpenAI API

Source:
https://openai.com/api/pricing

Verified:
2026-05-10

## Plans

| Plan | Billing     | Use Cases           |
| ---- | ----------- | ------------------- |
| PAYG | usage_based | coding, mixed, data |

---

# Anthropic API

Source:
https://www.anthropic.com/pricing#api

Verified:
2026-05-10

## Plans

| Plan | Billing     | Use Cases               |
| ---- | ----------- | ----------------------- |
| PAYG | usage_based | writing, research, data |

---
