const PRICING_DATA = {
  //  CHATGPT  
  ChatGPT: {
    Free: {
      pricePerUser: 0,
      annualDiscount: null,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: 1,
      useCaseFit: {
        coding: 45,
        writing: 55,
        research: 55,
        data: 40,
        mixed: 55,
      },
      featureScore: 55,
      sourceUrl: "https://openai.com/chatgpt/pricing",
      verifiedAt: "2025-05-01",
    },
    Plus: {
      pricePerUser: 20,
      annualDiscount: null,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: 1,
      useCaseFit: {
        coding: 75,
        writing: 85,
        research: 82,
        data: 70,
        mixed: 88,
      },
      featureScore: 88,
      sourceUrl: "https://openai.com/chatgpt/pricing",
      verifiedAt: "2025-05-01",
    },
    Pro: {
      pricePerUser: 200,
      annualDiscount: null,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: 1,
      useCaseFit: {
        coding: 88,
        writing: 80,
        research: 90,
        data: 88,
        mixed: 95,
      },
      featureScore: 98,
      sourceUrl: "https://openai.com/chatgpt/pricing",
      verifiedAt: "2025-05-01",
    },
    Team: {
      pricePerUser: 30,
      annualDiscount: null,
      billingType: "per_user",
      minTeam: 2,
      maxTeam: 149,
      useCaseFit: {
        coding: 78,
        writing: 85,
        research: 82,
        data: 72,
        mixed: 90,
      },
      featureScore: 92,
      sourceUrl: "https://openai.com/chatgpt/pricing",
      verifiedAt: "2025-05-01",
    },
    Enterprise: {
      pricePerUser: null, // negotiated
      annualDiscount: null,
      billingType: "per_user",
      minTeam: 150,
      maxTeam: Infinity,
      useCaseFit: {
        coding: 85,
        writing: 88,
        research: 88,
        data: 85,
        mixed: 95,
      },
      featureScore: 100,
      sourceUrl: "https://openai.com/chatgpt/pricing",
      verifiedAt: "2025-05-01",
    },
  },

  //  CLAUDE  
  Claude: {
    Free: {
      pricePerUser: 0,
      annualDiscount: null,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: 1,
      useCaseFit: {
        coding: 50,
        writing: 72,
        research: 68,
        data: 48,
        mixed: 58,
      },
      featureScore: 58,
      sourceUrl: "https://www.anthropic.com/pricing",
      verifiedAt: "2025-05-01",
    },
    Pro: {
      pricePerUser: 20,
      annualDiscount: null,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: 1,
      useCaseFit: {
        coding: 68,
        writing: 92,
        research: 90,
        data: 72,
        mixed: 85,
      },
      featureScore: 90,
      sourceUrl: "https://www.anthropic.com/pricing",
      verifiedAt: "2025-05-01",
    },
    Max100: {
      pricePerUser: 100,
      annualDiscount: null,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: 1,
      useCaseFit: {
        coding: 80,
        writing: 95,
        research: 95,
        data: 85,
        mixed: 90,
      },
      featureScore: 96,
      sourceUrl: "https://www.anthropic.com/pricing",
      verifiedAt: "2025-05-01",
    },
    Max200: {
      pricePerUser: 200,
      annualDiscount: null,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: 1,
      useCaseFit: {
        coding: 82,
        writing: 98,
        research: 98,
        data: 88,
        mixed: 92,
      },
      featureScore: 99,
      sourceUrl: "https://www.anthropic.com/pricing",
      verifiedAt: "2025-05-01",
    },
    Team: {
      pricePerUser: 30,
      annualDiscount: null,
      billingType: "per_user",
      minTeam: 5,
      maxTeam: Infinity,
      useCaseFit: {
        coding: 70,
        writing: 92,
        research: 90,
        data: 75,
        mixed: 88,
      },
      featureScore: 93,
      sourceUrl: "https://www.anthropic.com/pricing",
      verifiedAt: "2025-05-01",
    },
    Enterprise: {
      pricePerUser: null,
      annualDiscount: null,
      billingType: "per_user",
      minTeam: 100,
      maxTeam: Infinity,
      useCaseFit: {
        coding: 78,
        writing: 95,
        research: 95,
        data: 88,
        mixed: 92,
      },
      featureScore: 100,
      sourceUrl: "https://www.anthropic.com/pricing",
      verifiedAt: "2025-05-01",
    },
  },

  //  CURSOR  
  Cursor: {
    Hobby: {
      pricePerUser: 0,
      annualDiscount: null,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: 1,
      useCaseFit: {
        coding: 62,
        writing: 10,
        research: 10,
        data: 30,
        mixed: 20,
      },
      featureScore: 60,
      sourceUrl: "https://cursor.com/pricing",
      verifiedAt: "2025-05-01",
    },
    Pro: {
      pricePerUser: 20,
      annualDiscount: null,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: Infinity,
      useCaseFit: {
        coding: 92,
        writing: 12,
        research: 15,
        data: 55,
        mixed: 35,
      },
      featureScore: 92,
      sourceUrl: "https://cursor.com/pricing",
      verifiedAt: "2025-05-01",
    },
    ProPlus: {
      pricePerUser: 60,
      annualDiscount: null,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: Infinity,
      useCaseFit: {
        coding: 96,
        writing: 12,
        research: 15,
        data: 70,
        mixed: 38,
      },
      featureScore: 96,
      sourceUrl: "https://cursor.com/pricing",
      verifiedAt: "2025-05-01",
    },
    Ultra: {
      pricePerUser: 200,
      annualDiscount: null,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: Infinity,
      useCaseFit: {
        coding: 99,
        writing: 12,
        research: 15,
        data: 78,
        mixed: 40,
      },
      featureScore: 99,
      sourceUrl: "https://cursor.com/pricing",
      verifiedAt: "2025-05-01",
    },
    Teams: {
      pricePerUser: 40,
      annualDiscount: null,
      billingType: "per_user",
      minTeam: 2,
      maxTeam: Infinity,
      useCaseFit: {
        coding: 95,
        writing: 12,
        research: 15,
        data: 65,
        mixed: 38,
      },
      featureScore: 95,
      sourceUrl: "https://cursor.com/pricing",
      verifiedAt: "2025-05-01",
    },
    Enterprise: {
      pricePerUser: null,
      annualDiscount: null,
      billingType: "per_user",
      minTeam: 50,
      maxTeam: Infinity,
      useCaseFit: {
        coding: 100,
        writing: 12,
        research: 15,
        data: 80,
        mixed: 40,
      },
      featureScore: 100,
      sourceUrl: "https://cursor.com/pricing",
      verifiedAt: "2025-05-01",
    },
  },

  //  WINDSURF 
  Windsurf: {
    Free: {
      pricePerUser: 0,
      annualDiscount: null,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: 1,
      useCaseFit: { coding: 60, writing: 8, research: 8, data: 28, mixed: 18 },
      featureScore: 58,
      sourceUrl: "https://windsurf.com/pricing",
      verifiedAt: "2025-05-01",
    },
    Pro: {
      pricePerUser: 15,
      annualDiscount: null,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: Infinity,
      useCaseFit: {
        coding: 86,
        writing: 10,
        research: 12,
        data: 50,
        mixed: 30,
      },
      featureScore: 86,
      sourceUrl: "https://windsurf.com/pricing",
      verifiedAt: "2025-05-01",
    },
    Teams: {
      pricePerUser: 30,
      annualDiscount: null,
      billingType: "per_user",
      minTeam: 2,
      maxTeam: Infinity,
      useCaseFit: {
        coding: 91,
        writing: 10,
        research: 12,
        data: 58,
        mixed: 32,
      },
      featureScore: 91,
      sourceUrl: "https://windsurf.com/pricing",
      verifiedAt: "2025-05-01",
    },
  },

  //  GEMINI 
  Gemini: {
    Free: {
      pricePerUser: 0,
      annualDiscount: null,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: 1,
      useCaseFit: {
        coding: 42,
        writing: 60,
        research: 65,
        data: 45,
        mixed: 60,
      },
      featureScore: 60,
      sourceUrl: "https://gemini.google.com",
      verifiedAt: "2025-05-01",
    },
    Advanced: {
      pricePerUser: 20,
      annualDiscount: null,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: Infinity,
      useCaseFit: {
        coding: 55,
        writing: 78,
        research: 82,
        data: 60,
        mixed: 80,
      },
      featureScore: 84,
      sourceUrl: "https://one.google.com/about/google-ai-plans/",
      verifiedAt: "2025-05-01",
    },
  },

  //  PERPLEXITY  
  Perplexity: {
    Free: {
      pricePerUser: 0,
      annualDiscount: null,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: 1,
      useCaseFit: {
        coding: 10,
        writing: 30,
        research: 72,
        data: 35,
        mixed: 38,
      },
      featureScore: 62,
      sourceUrl: "https://www.perplexity.ai/pro",
      verifiedAt: "2025-05-01",
    },
    Pro: {
      pricePerUser: 20,
      annualDiscount: null,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: Infinity,
      useCaseFit: {
        coding: 12,
        writing: 35,
        research: 88,
        data: 55,
        mixed: 48,
      },
      featureScore: 80,
      sourceUrl: "https://www.perplexity.ai/pro",
      verifiedAt: "2025-05-01",
    },
    Enterprise: {
      pricePerUser: null,
      annualDiscount: null,
      billingType: "per_user",
      minTeam: 20,
      maxTeam: Infinity,
      useCaseFit: {
        coding: 15,
        writing: 38,
        research: 92,
        data: 65,
        mixed: 52,
      },
      featureScore: 92,
      sourceUrl: "https://www.perplexity.ai/enterprise",
      verifiedAt: "2025-05-01",
    },
  },

  //  GITHUB COPILOT 
  "GitHub Copilot": {
    Free: {
      pricePerUser: 0,
      annualDiscount: null,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: 1,
      useCaseFit: { coding: 58, writing: 8, research: 8, data: 30, mixed: 18 },
      featureScore: 55,
      sourceUrl: "https://github.com/features/copilot",
      verifiedAt: "2025-05-01",
    },
    Pro: {
      pricePerUser: 10,
      annualDiscount: null,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: 1,
      useCaseFit: {
        coding: 78,
        writing: 10,
        research: 10,
        data: 42,
        mixed: 22,
      },
      featureScore: 78,
      sourceUrl: "https://github.com/features/copilot",
      verifiedAt: "2025-05-01",
    },
    ProPlus: {
      pricePerUser: 39,
      annualDiscount: null,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: 1,
      useCaseFit: {
        coding: 88,
        writing: 10,
        research: 12,
        data: 58,
        mixed: 25,
      },
      featureScore: 90,
      sourceUrl: "https://github.com/features/copilot",
      verifiedAt: "2025-05-01",
    },
    Business: {
      pricePerUser: 19,
      annualDiscount: null,
      billingType: "per_user",
      minTeam: 2,
      maxTeam: Infinity,
      useCaseFit: {
        coding: 85,
        writing: 10,
        research: 10,
        data: 50,
        mixed: 22,
      },
      featureScore: 86,
      sourceUrl: "https://github.com/features/copilot",
      verifiedAt: "2025-05-01",
    },
    Enterprise: {
      pricePerUser: 39,
      annualDiscount: null,
      billingType: "per_user",
      minTeam: 10,
      maxTeam: Infinity,
      useCaseFit: {
        coding: 92,
        writing: 10,
        research: 12,
        data: 62,
        mixed: 28,
      },
      featureScore: 95,
      sourceUrl: "https://github.com/features/copilot",
      verifiedAt: "2025-05-01",
    },
  },

  //  USAGE-BASED API TIERS
  "OpenAI API": {
    PAYG: {
      pricePerUser: null, // usage-based — no fixed per-seat cost
      annualDiscount: null,
      billingType: "usage_based",
      minTeam: 1,
      maxTeam: Infinity,
      useCaseFit: {
        coding: 88,
        writing: 80,
        research: 82,
        data: 90,
        mixed: 95,
      },
      featureScore: 98,
      sourceUrl: "https://openai.com/api/pricing",
      verifiedAt: "2025-05-01",
    },
  },

  "Anthropic API": {
    PAYG: {
      pricePerUser: null,
      annualDiscount: null,
      billingType: "usage_based",
      minTeam: 1,
      maxTeam: Infinity,
      useCaseFit: {
        coding: 80,
        writing: 95,
        research: 92,
        data: 88,
        mixed: 90,
      },
      featureScore: 97,
      sourceUrl: "https://www.anthropic.com/pricing#api",
      verifiedAt: "2025-05-01",
    },
  },
};

//  * ALTERNATIVES
const ALTERNATIVES = {
  // ── ChatGPT ──────────────────────────────────
  "ChatGPT|Free": [
    {
      tool: "Claude",
      plan: "Free",
      featureParityScore: 72,
      switchCostMonths: 0,
      bestForWorkloads: ["writing", "research"],
      limitationsVsSource: ["Weaker plugin ecosystem", "No image generation"],
      note: "Better long-form reasoning; loses ChatGPT's broader app integrations.",
    },
    {
      tool: "Gemini",
      plan: "Free",
      featureParityScore: 70,
      switchCostMonths: 0,
      bestForWorkloads: ["research", "mixed"],
      limitationsVsSource: ["Weaker coding", "Google account dependency"],
      note: "Good for Google Workspace users at zero incremental cost.",
    },
  ],

  "ChatGPT|Plus": [
    {
      tool: "Claude",
      plan: "Pro",
      featureParityScore: 90,
      switchCostMonths: 0.5,
      bestForWorkloads: ["writing", "research"],
      limitationsVsSource: ["No DALL-E image gen", "Smaller plugin library"],
      note: "At the same $20/user price point, Claude Pro leads on long-context reasoning and document-heavy workflows.",
    },
    {
      tool: "Gemini",
      plan: "Advanced",
      featureParityScore: 80,
      switchCostMonths: 0.5,
      bestForWorkloads: ["research", "mixed"],
      limitationsVsSource: [
        "Weaker coding assistance",
        "Output consistency lags",
      ],
      note: "Viable if the team is deep in Google Workspace; otherwise a lateral move.",
    },
    {
      tool: "Perplexity",
      plan: "Pro",
      featureParityScore: 72,
      switchCostMonths: 0.25,
      bestForWorkloads: ["research"],
      limitationsVsSource: [
        "Not a general AI assistant",
        "No code generation",
        "No document drafting",
      ],
      note: "Only fits teams whose primary use-case is web research — not a general ChatGPT replacement.",
    },
  ],

  "ChatGPT|Pro": [
    {
      tool: "Claude",
      plan: "Max200",
      featureParityScore: 94,
      switchCostMonths: 1,
      bestForWorkloads: ["research", "writing", "data"],
      limitationsVsSource: ["No GPT-4o image gen", "Narrower agent ecosystem"],
      note: "Equal price ($200/user), higher context window, stronger on long documents and structured reasoning.",
    },
    {
      tool: "Cursor",
      plan: "Ultra",
      featureParityScore: 76,
      switchCostMonths: 1,
      bestForWorkloads: ["coding"],
      limitationsVsSource: [
        "Pure coding tool — no writing/research",
        "IDE-only experience",
      ],
      note: "Only valid if the paying user's workload is >80% coding. Feature parity outside coding is near zero.",
    },
  ],

  "ChatGPT|Team": [
    {
      tool: "Claude",
      plan: "Team",
      featureParityScore: 88,
      switchCostMonths: 1,
      bestForWorkloads: ["writing", "research"],
      limitationsVsSource: [
        "Requires min 5 seats (vs 2 for ChatGPT Team)",
        "No DALL-E",
      ],
      note: "Same price, stronger on document collaboration; minimum team size is a hard constraint to check.",
    },
  ],

  // ── Claude ───────────────────────────────────
  "Claude|Free": [
    {
      tool: "ChatGPT",
      plan: "Free",
      featureParityScore: 70,
      switchCostMonths: 0,
      bestForWorkloads: ["mixed"],
      limitationsVsSource: ["Weaker on nuanced writing", "Shorter context"],
      note: "ChatGPT Free is a reasonable general-purpose alternative; Claude Free has a narrower use-case fit.",
    },
  ],

  "Claude|Pro": [
    {
      tool: "ChatGPT",
      plan: "Plus",
      featureParityScore: 88,
      switchCostMonths: 0.5,
      bestForWorkloads: ["coding", "mixed"],
      limitationsVsSource: [
        "Weaker long-context reasoning",
        "Less nuanced prose output",
      ],
      note: "Same $20/user price. ChatGPT Plus is stronger for coding and multimodal tasks.",
    },
    {
      tool: "Gemini",
      plan: "Advanced",
      featureParityScore: 75,
      switchCostMonths: 0.5,
      bestForWorkloads: ["research"],
      limitationsVsSource: [
        "Significantly weaker writing quality",
        "Output inconsistency",
      ],
      note: "Only worth considering for teams deeply embedded in Google Workspace.",
    },
  ],

  "Claude|Max100": [
    {
      tool: "ChatGPT",
      plan: "Pro",
      featureParityScore: 92,
      switchCostMonths: 1,
      bestForWorkloads: ["coding", "mixed"],
      limitationsVsSource: [
        "Longer reasoning latency on complex tasks",
        "Less precise on structured prose",
      ],
      note: "ChatGPT Pro costs $200/user vs Claude Max100 at $100/user — switching doubles per-seat spend. Only valid if coding and multimodal use-cases dominate.",
    },
  ],

  "Claude|Max200": [
    {
      tool: "ChatGPT",
      plan: "Pro",
      featureParityScore: 95,
      switchCostMonths: 1,
      bestForWorkloads: ["coding", "mixed"],
      limitationsVsSource: [
        "Marginal differences at this price point — workload-specific testing required",
      ],
      note: "Direct competitor at the same $200/user. Run a 30-day pilot on live workloads before deciding.",
    },
  ],

  "Claude|Team": [
    {
      tool: "ChatGPT",
      plan: "Team",
      featureParityScore: 86,
      switchCostMonths: 1,
      bestForWorkloads: ["coding", "mixed"],
      limitationsVsSource: [
        "Weaker on long-context document work",
        "Lower minimum team size (2 vs 5)",
      ],
      note: "Same $30/user price. ChatGPT Team allows smaller teams; Claude Team is stronger on document-heavy workflows.",
    },
  ],

  // ── Cursor ───────────────────────────────────
  "Cursor|Hobby": [
    {
      tool: "GitHub Copilot",
      plan: "Free",
      featureParityScore: 68,
      switchCostMonths: 0.5,
      bestForWorkloads: ["coding"],
      limitationsVsSource: [
        "No multi-file context",
        "No agentic task execution",
      ],
      note: "Both are free-tier coding tools. GitHub Copilot Free integrates directly into VS Code and GitHub — lower context-switch cost for GitHub-centric teams.",
    },
  ],

  "Cursor|Pro": [
    {
      tool: "Windsurf",
      plan: "Pro",
      featureParityScore: 86,
      switchCostMonths: 1,
      bestForWorkloads: ["coding"],
      limitationsVsSource: [
        "Smaller model selection",
        "Less mature agent workflows",
      ],
      note: "Windsurf Pro at $15/user saves $5/user vs Cursor Pro at $20/user. Migration cost ~1 month productivity; break-even at month 5 for a 10-person team.",
    },
    {
      tool: "GitHub Copilot",
      plan: "Business",
      featureParityScore: 76,
      switchCostMonths: 0.5,
      bestForWorkloads: ["coding"],
      limitationsVsSource: [
        "No agentic coding",
        "Completion-only model",
        "No multi-file chat",
      ],
      note: "GitHub Copilot Business at $19/user is cheaper but a narrower tool — feature parity is 76, meaning the team loses meaningful Cursor capabilities.",
    },
  ],

  "Cursor|ProPlus": [
    {
      tool: "Windsurf",
      plan: "Teams",
      featureParityScore: 84,
      switchCostMonths: 1.5,
      bestForWorkloads: ["coding"],
      limitationsVsSource: [
        "Lower request limits",
        "Less capable agentic execution",
      ],
      note: "Windsurf Teams at $30/user vs Cursor ProPlus at $60/user — 50% per-seat saving. Feature gap (84 vs 96) means some power-user workflows will regress.",
    },
  ],

  "Cursor|Ultra": [
    {
      tool: "ChatGPT",
      plan: "Pro",
      featureParityScore: 78,
      switchCostMonths: 1,
      bestForWorkloads: ["mixed", "research"],
      limitationsVsSource: [
        "Not an IDE — no inline code completion",
        "No repo-aware context",
      ],
      note: "Only relevant if the user's primary need is broad AI assistance rather than in-IDE coding. Not a coding tool substitute.",
    },
  ],

  // ── Windsurf ─────────────────────────────────
  "Windsurf|Free": [
    {
      tool: "Cursor",
      plan: "Hobby",
      featureParityScore: 72,
      switchCostMonths: 0.5,
      bestForWorkloads: ["coding"],
      limitationsVsSource: ["Different IDE — workflow adaptation required"],
      note: "Both are free. Cursor Hobby has stronger multi-file context; worthwhile if the team is not already invested in Windsurf's workflow.",
    },
  ],

  "Windsurf|Pro": [
    {
      tool: "Cursor",
      plan: "Pro",
      featureParityScore: 88,
      switchCostMonths: 1,
      bestForWorkloads: ["coding"],
      limitationsVsSource: ["$5/user more expensive", "IDE switch friction"],
      note: "Cursor Pro at $20/user offers stronger agentic workflows but costs $5/user more. Only justifiable if agent-mode usage is high.",
    },
    {
      tool: "GitHub Copilot",
      plan: "Business",
      featureParityScore: 74,
      switchCostMonths: 0.5,
      bestForWorkloads: ["coding"],
      limitationsVsSource: [
        "Completion-centric — no agentic coding",
        "No multi-file chat",
      ],
      note: "GitHub Copilot Business at $19/user vs Windsurf Pro at $15/user — actually more expensive for less capability on agentic tasks.",
    },
  ],

  // ── Gemini ───────────────────────────────────
  "Gemini|Free": [
    {
      tool: "ChatGPT",
      plan: "Free",
      featureParityScore: 74,
      switchCostMonths: 0,
      bestForWorkloads: ["mixed"],
      limitationsVsSource: ["Loses Google Workspace integration value"],
      note: "ChatGPT Free is a stronger general assistant; only switch if Google Workspace integration is not a priority.",
    },
  ],

  "Gemini|Advanced": [
    {
      tool: "ChatGPT",
      plan: "Plus",
      featureParityScore: 82,
      switchCostMonths: 0.5,
      bestForWorkloads: ["coding", "mixed"],
      limitationsVsSource: ["Loses native Google Workspace integration"],
      note: "Same $20/user price. ChatGPT Plus leads on coding and multimodal; Gemini Advanced stays ahead only if the team is Google-ecosystem-dependent.",
    },
    {
      tool: "Claude",
      plan: "Pro",
      featureParityScore: 80,
      switchCostMonths: 0.5,
      bestForWorkloads: ["writing", "research"],
      limitationsVsSource: [
        "No Google integration",
        "Smaller knowledge retrieval surface",
      ],
      note: "Same $20/user. Claude Pro is a meaningful upgrade for writing-heavy and research-heavy workloads.",
    },
  ],

  // ── Perplexity ───────────────────────────────
  "Perplexity|Free": [
    {
      tool: "Gemini",
      plan: "Free",
      featureParityScore: 66,
      switchCostMonths: 0,
      bestForWorkloads: ["research"],
      limitationsVsSource: ["Less focused on real-time web citations"],
      note: "Gemini Free is a broader assistant but lacks Perplexity's citation-centric research UX.",
    },
  ],

  "Perplexity|Pro": [
    {
      tool: "ChatGPT",
      plan: "Plus",
      featureParityScore: 76,
      switchCostMonths: 0.5,
      bestForWorkloads: ["mixed", "coding"],
      limitationsVsSource: ["Loses real-time citation workflow"],
      note: "Same $20/user. ChatGPT Plus is a better general AI assistant; only a fit if Perplexity's research-specific UX is not deeply embedded in workflows.",
    },
    {
      tool: "Claude",
      plan: "Pro",
      featureParityScore: 74,
      switchCostMonths: 0.5,
      bestForWorkloads: ["writing", "research"],
      limitationsVsSource: [
        "No real-time web search as primary UX",
        "Less source-citation focus",
      ],
      note: "Same $20/user. Claude Pro is stronger on reasoning depth; weaker on Perplexity's real-time source-grounded search.",
    },
  ],

  // ── GitHub Copilot ───────────────────────────
  "GitHub Copilot|Free": [
    {
      tool: "Cursor",
      plan: "Hobby",
      featureParityScore: 70,
      switchCostMonths: 1,
      bestForWorkloads: ["coding"],
      limitationsVsSource: [
        "Full IDE change required — significant migration cost",
      ],
      note: "Cursor Hobby offers agentic coding that Copilot Free lacks. Switch only if the team is not entrenched in VS Code + GitHub workflows.",
    },
  ],

  "GitHub Copilot|Pro": [
    {
      tool: "Cursor",
      plan: "Pro",
      featureParityScore: 88,
      switchCostMonths: 1,
      bestForWorkloads: ["coding"],
      limitationsVsSource: ["Full IDE change", "Loses GitHub PR integration"],
      note: "Cursor Pro at $20/user vs Copilot Pro at $10/user — costs double, but delivers agentic coding and multi-file context that Copilot Pro lacks. Justified only if developers are bottlenecked by Copilot's completion-only model.",
    },
    {
      tool: "Windsurf",
      plan: "Pro",
      featureParityScore: 82,
      switchCostMonths: 1,
      bestForWorkloads: ["coding"],
      limitationsVsSource: ["IDE change", "Loses GitHub integration"],
      note: "Windsurf Pro at $15/user is $5 more than Copilot Pro but adds multi-file agentic context. Marginal — validate with a team pilot.",
    },
  ],

  "GitHub Copilot|ProPlus": [
    {
      tool: "Cursor",
      plan: "ProPlus",
      featureParityScore: 90,
      switchCostMonths: 1.5,
      bestForWorkloads: ["coding", "data"],
      limitationsVsSource: [
        "Full IDE migration",
        "Loses GitHub PR/Actions integration",
      ],
      note: "Cursor ProPlus at $60/user vs Copilot ProPlus at $39/user — 54% more expensive. Only justified if agentic coding is a primary workflow driver.",
    },
  ],

  "GitHub Copilot|Business": [
    {
      tool: "Cursor",
      plan: "Teams",
      featureParityScore: 88,
      switchCostMonths: 1.5,
      bestForWorkloads: ["coding"],
      limitationsVsSource: [
        "IDE change across the whole team",
        "Loses GitHub-native workflow",
      ],
      note: "Cursor Teams at $40/user vs Copilot Business at $19/user — more than double. Switch only if the team's output is demonstrably bottlenecked by Copilot's completion model.",
    },
  ],

  "GitHub Copilot|Enterprise": [
    {
      tool: "Cursor",
      plan: "Enterprise",
      featureParityScore: 86,
      switchCostMonths: 2,
      bestForWorkloads: ["coding", "data"],
      limitationsVsSource: [
        "Major enterprise migration effort",
        "Loses GitHub Enterprise integration",
      ],
      note: "Both are negotiated-price enterprise tiers. Cursor Enterprise offers stronger agentic coding; migration cost is substantial and must be modelled separately.",
    },
  ],

  // ── APIs ─────────────────────────────────────
  "OpenAI API|PAYG": [
    {
      tool: "Anthropic API",
      plan: "PAYG",
      featureParityScore: 92,
      switchCostMonths: 2,
      bestForWorkloads: ["writing", "research", "data"],
      limitationsVsSource: [
        "Smaller function-calling ecosystem",
        "Less multimodal breadth",
      ],
      note: "Anthropic API is a strong alternative for long-context and structured-output workloads. Pricing is usage-based on both sides — run a cost-per-token comparison on actual call logs before switching.",
    },
  ],

  "Anthropic API|PAYG": [
    {
      tool: "OpenAI API",
      plan: "PAYG",
      featureParityScore: 94,
      switchCostMonths: 2,
      bestForWorkloads: ["coding", "mixed", "data"],
      limitationsVsSource: [
        "Lower performance on long structured documents",
        "Less nuanced prose",
      ],
      note: "OpenAI API has a wider agent and tool-calling ecosystem. Switch only after a token-cost and latency benchmark on your actual workload distribution.",
    },
  ],
};

module.exports = { PRICING_DATA, ALTERNATIVES };
