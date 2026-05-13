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
