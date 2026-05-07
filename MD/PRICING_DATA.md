# AI Tool Pricing Data

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
- Pricing may change over time and should be periodically re-verified.
