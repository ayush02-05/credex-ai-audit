const PRICING_DATA = {
  ChatGPT: {
    Free: {
      pricePerUser: 0,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: 1,
      useCaseTags: ["mixed"],
      featureScore: 55,
      source: "https://openai.com/chatgpt/pricing",
    },

    Plus: {
      pricePerUser: 20,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: 1,
      useCaseTags: ["mixed", "coding", "writing", "research"],
      featureScore: 88,
      source: "https://openai.com/chatgpt/pricing",
    },

    Pro: {
      pricePerUser: 200,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: 1,
      useCaseTags: ["mixed", "coding", "research", "data"],
      featureScore: 98,
      source: "https://openai.com/chatgpt/pricing",
    },

    Team: {
      pricePerUser: 30,
      billingType: "per_user",
      minTeam: 2,
      maxTeam: 149,
      useCaseTags: ["mixed", "coding", "writing", "research"],
      featureScore: 92,
      source: "https://openai.com/chatgpt/pricing",
    },

    Enterprise: {
      pricePerUser: null,
      billingType: "per_user",
      minTeam: 150,
      maxTeam: Infinity,
      useCaseTags: ["mixed", "coding", "data"],
      featureScore: 100,
      source: "https://openai.com/chatgpt/pricing",
    },
  },

  Claude: {
    Free: {
      pricePerUser: 0,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: 1,
      useCaseTags: ["writing", "research"],
      featureScore: 58,
      source: "https://www.anthropic.com/pricing",
    },

    Pro: {
      pricePerUser: 20,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: 1,
      useCaseTags: ["writing", "research", "mixed"],
      featureScore: 90,
      source: "https://www.anthropic.com/pricing",
    },

    Max100: {
      pricePerUser: 100,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: 1,
      useCaseTags: ["coding", "research", "data"],
      featureScore: 96,
      source: "https://www.anthropic.com/pricing",
    },

    Max200: {
      pricePerUser: 200,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: 1,
      useCaseTags: ["coding", "research", "data"],
      featureScore: 99,
      source: "https://www.anthropic.com/pricing",
    },

    Team: {
      pricePerUser: 30,
      billingType: "per_user",
      minTeam: 5,
      maxTeam: Infinity,
      useCaseTags: ["writing", "research", "mixed"],
      featureScore: 93,
      source: "https://www.anthropic.com/pricing",
    },

    Enterprise: {
      pricePerUser: null,
      billingType: "per_user",
      minTeam: 100,
      maxTeam: Infinity,
      useCaseTags: ["mixed", "data"],
      featureScore: 100,
      source: "https://www.anthropic.com/pricing",
    },
  },

  Cursor: {
    Hobby: {
      pricePerUser: 0,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: 1,
      useCaseTags: ["coding"],
      featureScore: 60,
      source: "https://cursor.com/pricing",
    },

    Pro: {
      pricePerUser: 20,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: Infinity,
      useCaseTags: ["coding"],
      featureScore: 92,
      source: "https://cursor.com/pricing",
    },

    ProPlus: {
      pricePerUser: 60,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: Infinity,
      useCaseTags: ["coding", "data"],
      featureScore: 96,
      source: "https://cursor.com/pricing",
    },

    Ultra: {
      pricePerUser: 200,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: Infinity,
      useCaseTags: ["coding", "data"],
      featureScore: 99,
      source: "https://cursor.com/pricing",
    },

    Teams: {
      pricePerUser: 40,
      billingType: "per_user",
      minTeam: 2,
      maxTeam: Infinity,
      useCaseTags: ["coding"],
      featureScore: 95,
      source: "https://cursor.com/pricing",
    },

    Enterprise: {
      pricePerUser: null,
      billingType: "per_user",
      minTeam: 50,
      maxTeam: Infinity,
      useCaseTags: ["coding", "data"],
      featureScore: 100,
      source: "https://cursor.com/pricing",
    },
  },

  Windsurf: {
    Free: {
      pricePerUser: 0,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: 1,
      useCaseTags: ["coding"],
      featureScore: 58,
      source: "https://windsurf.com/pricing",
    },

    Pro: {
      pricePerUser: 15,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: Infinity,
      useCaseTags: ["coding"],
      featureScore: 86,
      source: "https://windsurf.com/pricing",
    },

    Teams: {
      pricePerUser: 30,
      billingType: "per_user",
      minTeam: 2,
      maxTeam: Infinity,
      useCaseTags: ["coding"],
      featureScore: 91,
      source: "https://windsurf.com/pricing",
    },
  },

  Gemini: {
    Free: {
      pricePerUser: 0,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: 1,
      useCaseTags: ["research", "mixed"],
      featureScore: 60,
      source: "https://gemini.google.com",
    },

    Advanced: {
      pricePerUser: 20,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: Infinity,
      useCaseTags: ["research", "writing", "mixed"],
      featureScore: 84,
      source: "https://one.google.com/about/google-ai-plans/",
    },
  },

  Perplexity: {
    Free: {
      pricePerUser: 0,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: 1,
      useCaseTags: ["research"],
      featureScore: 62,
      source: "https://www.perplexity.ai/pro",
    },

    Pro: {
      pricePerUser: 20,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: Infinity,
      useCaseTags: ["research", "data"],
      featureScore: 80,
      source: "https://www.perplexity.ai/pro",
    },

    Enterprise: {
      pricePerUser: null,
      billingType: "per_user",
      minTeam: 20,
      maxTeam: Infinity,
      useCaseTags: ["research", "data"],
      featureScore: 92,
      source: "https://www.perplexity.ai/enterprise",
    },
  },

  "GitHub Copilot": {
    Free: {
      pricePerUser: 0,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: 1,
      useCaseTags: ["coding"],
      featureScore: 55,
      source: "https://github.com/features/copilot",
    },

    Pro: {
      pricePerUser: 10,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: 1,
      useCaseTags: ["coding"],
      featureScore: 78,
      source: "https://github.com/features/copilot",
    },

    ProPlus: {
      pricePerUser: 39,
      billingType: "per_user",
      minTeam: 1,
      maxTeam: 1,
      useCaseTags: ["coding", "data"],
      featureScore: 90,
      source: "https://github.com/features/copilot",
    },

    Business: {
      pricePerUser: 19,
      billingType: "per_user",
      minTeam: 2,
      maxTeam: Infinity,
      useCaseTags: ["coding"],
      featureScore: 86,
      source: "https://github.com/features/copilot",
    },

    Enterprise: {
      pricePerUser: 39,
      billingType: "per_user",
      minTeam: 10,
      maxTeam: Infinity,
      useCaseTags: ["coding", "data"],
      featureScore: 95,
      source: "https://github.com/features/copilot",
    },
  },

  "OpenAI API": {
    PAYG: {
      pricePerUser: null,
      billingType: "usage_based",
      minTeam: 1,
      maxTeam: Infinity,
      useCaseTags: ["mixed", "coding", "data"],
      featureScore: 98,
      source: "https://openai.com/api/pricing",
    },
  },

  "Anthropic API": {
    PAYG: {
      pricePerUser: null,
      billingType: "usage_based",
      minTeam: 1,
      maxTeam: Infinity,
      useCaseTags: ["writing", "research", "data"],
      featureScore: 97,
      source: "https://www.anthropic.com/pricing#api",
    },
  },
};

// ALTERNATIVES

// const ALTERNATIVES = {
//   "ChatGPT|Plus": [
//     {
//       tool: "Claude",
//       plan: "Pro",

//       featureParityScore: 90,

//       bestForTags: ["writing", "research"],

//       worstForTags: ["coding"],

//       note: "Better for writing and long-form reasoning.",
//     },

//     {
//       tool: "Gemini",
//       plan: "Advanced",

//       featureParityScore: 78,

//       bestForTags: ["research", "mixed"],

//       worstForTags: ["coding"],

//       note: "Good for Google ecosystem users.",
//     },

//     {
//       tool: "Perplexity",
//       plan: "Pro",

//       featureParityScore: 72,

//       bestForTags: ["research", "data"],

//       worstForTags: ["coding", "writing"],

//       note: "Best for research-focused usage.",
//     },
//   ],

//   "Claude|Pro": [
//     {
//       tool: "ChatGPT",
//       plan: "Plus",

//       featureParityScore: 88,

//       bestForTags: ["coding", "mixed"],

//       worstForTags: ["writing"],

//       note: "Better all-round AI assistant.",
//     },
//   ],

//   "Cursor|Pro": [
//     {
//       tool: "GitHub Copilot",
//       plan: "Business",

//       featureParityScore: 76,

//       bestForTags: ["coding"],

//       worstForTags: ["mixed"],

//       note: "Cheaper for lightweight coding workflows.",
//     },

//     {
//       tool: "Windsurf",
//       plan: "Pro",

//       featureParityScore: 84,

//       bestForTags: ["coding"],

//       worstForTags: ["enterprise"],

//       note: "Closest competitor to Cursor.",
//     },
//   ],

//   "GitHub Copilot|Business": [
//     {
//       tool: "Cursor",
//       plan: "Pro",

//       featureParityScore: 88,

//       bestForTags: ["coding"],

//       worstForTags: ["lightweight_coding"],

//       note: "Better for advanced AI coding workflows.",
//     },
//   ],

//   "Perplexity|Pro": [
//     {
//       tool: "ChatGPT",
//       plan: "Plus",

//       featureParityScore: 75,

//       bestForTags: ["mixed", "coding", "writing"],

//       worstForTags: ["research"],

//       note: "Better all-round assistant.",
//     },
//   ],

//   "Gemini|Advanced": [
//     {
//       tool: "ChatGPT",
//       plan: "Plus",

//       featureParityScore: 82,

//       bestForTags: ["coding", "mixed"],

//       worstForTags: ["research"],

//       note: "Better for broader AI workflows.",
//     },
//   ],

//   "OpenAI API|PAYG": [
//     {
//       tool: "Anthropic API",
//       plan: "PAYG",

//       featureParityScore: 90,

//       bestForTags: ["writing", "research", "data"],

//       worstForTags: ["mixed"],

//       note: "Strong for reasoning and document workflows.",
//     },
//   ],

//   "Anthropic API|PAYG": [
//     {
//       tool: "OpenAI API",
//       plan: "PAYG",

//       featureParityScore: 92,

//       bestForTags: ["mixed", "coding", "data"],

//       worstForTags: ["research"],

//       note: "Better ecosystem and multimodal support.",
//     },
//   ],
// };

const ALTERNATIVES = {
  // ======================
  // CHATGPT
  // ======================

  "ChatGPT|Free": [
    {
      tool: "Claude",
      plan: "Free",
      featureParityScore: 72,
      bestForTags: ["writing", "research"],
      worstForTags: ["coding"],
      note: "Better writing quality but weaker ecosystem.",
    },

    {
      tool: "Gemini",
      plan: "Free",
      featureParityScore: 70,
      bestForTags: ["research", "mixed"],
      worstForTags: ["coding"],
      note: "Good free alternative for Google users.",
    },
  ],

  "ChatGPT|Plus": [
    {
      tool: "Claude",
      plan: "Pro",
      featureParityScore: 90,
      bestForTags: ["writing", "research"],
      worstForTags: ["coding"],
      note: "Excellent for long-form reasoning and writing.",
    },

    {
      tool: "Gemini",
      plan: "Advanced",
      featureParityScore: 80,
      bestForTags: ["research", "mixed"],
      worstForTags: ["coding"],
      note: "Strong Google ecosystem integration.",
    },

    {
      tool: "Perplexity",
      plan: "Pro",
      featureParityScore: 72,
      bestForTags: ["research", "data"],
      worstForTags: ["coding"],
      note: "Best for web research workflows.",
    },
  ],

  "ChatGPT|Pro": [
    {
      tool: "Claude",
      plan: "Max200",
      featureParityScore: 94,
      bestForTags: ["research", "writing", "data"],
      worstForTags: ["mixed"],
      note: "Closest premium competitor to ChatGPT Pro.",
    },

    {
      tool: "Cursor",
      plan: "Ultra",
      featureParityScore: 76,
      bestForTags: ["coding"],
      worstForTags: ["writing"],
      note: "Better for AI-native coding workflows.",
    },
  ],

  "ChatGPT|Team": [
    {
      tool: "Claude",
      plan: "Team",
      featureParityScore: 88,
      bestForTags: ["writing", "research"],
      worstForTags: ["coding"],
      note: "Strong document collaboration workflows.",
    },
  ],

  // ======================
  // CLAUDE
  // ======================

  "Claude|Free": [
    {
      tool: "ChatGPT",
      plan: "Free",
      featureParityScore: 70,
      bestForTags: ["mixed"],
      worstForTags: ["writing"],
      note: "Better general AI assistant experience.",
    },
  ],

  "Claude|Pro": [
    {
      tool: "ChatGPT",
      plan: "Plus",
      featureParityScore: 88,
      bestForTags: ["coding", "mixed"],
      worstForTags: ["writing"],
      note: "Better multimodal and coding workflows.",
    },

    {
      tool: "Gemini",
      plan: "Advanced",
      featureParityScore: 75,
      bestForTags: ["research"],
      worstForTags: ["coding"],
      note: "Good for Google Workspace users.",
    },
  ],

  "Claude|Max100": [
    {
      tool: "ChatGPT",
      plan: "Pro",
      featureParityScore: 92,
      bestForTags: ["coding", "mixed"],
      worstForTags: ["writing"],
      note: "Better all-round premium AI suite.",
    },
  ],

  "Claude|Max200": [
    {
      tool: "ChatGPT",
      plan: "Pro",
      featureParityScore: 95,
      bestForTags: ["coding", "mixed"],
      worstForTags: ["writing"],
      note: "Most direct premium competitor.",
    },
  ],

  "Claude|Team": [
    {
      tool: "ChatGPT",
      plan: "Team",
      featureParityScore: 86,
      bestForTags: ["coding", "mixed"],
      worstForTags: ["writing"],
      note: "Better coding collaboration workflows.",
    },
  ],

  // ======================
  // CURSOR
  // ======================

  "Cursor|Hobby": [
    {
      tool: "GitHub Copilot",
      plan: "Free",
      featureParityScore: 68,
      bestForTags: ["coding"],
      worstForTags: ["advanced_coding"],
      note: "Good lightweight free coding assistant.",
    },
  ],

  "Cursor|Pro": [
    {
      tool: "Windsurf",
      plan: "Pro",
      featureParityScore: 86,
      bestForTags: ["coding"],
      worstForTags: ["enterprise"],
      note: "Closest competitor to Cursor.",
    },

    {
      tool: "GitHub Copilot",
      plan: "Business",
      featureParityScore: 76,
      bestForTags: ["coding"],
      worstForTags: ["agentic_coding"],
      note: "Cheaper for lightweight workflows.",
    },
  ],

  "Cursor|ProPlus": [
    {
      tool: "Windsurf",
      plan: "Teams",
      featureParityScore: 84,
      bestForTags: ["coding"],
      worstForTags: ["large_enterprise"],
      note: "Lower-cost alternative for coding teams.",
    },
  ],

  "Cursor|Ultra": [
    {
      tool: "ChatGPT",
      plan: "Pro",
      featureParityScore: 78,
      bestForTags: ["mixed", "research"],
      worstForTags: ["coding"],
      note: "Better for non-coding AI workflows.",
    },
  ],

  // ======================
  // WINDSURF
  // ======================

  "Windsurf|Free": [
    {
      tool: "Cursor",
      plan: "Hobby",
      featureParityScore: 72,
      bestForTags: ["coding"],
      worstForTags: ["enterprise"],
      note: "Most similar free coding IDE.",
    },
  ],

  "Windsurf|Pro": [
    {
      tool: "Cursor",
      plan: "Pro",
      featureParityScore: 88,
      bestForTags: ["coding"],
      worstForTags: ["lightweight_coding"],
      note: "Stronger AI-native coding workflows.",
    },

    {
      tool: "GitHub Copilot",
      plan: "Business",
      featureParityScore: 74,
      bestForTags: ["coding"],
      worstForTags: ["agentic_coding"],
      note: "Better IDE compatibility.",
    },
  ],

  // ======================
  // GEMINI
  // ======================

  "Gemini|Free": [
    {
      tool: "ChatGPT",
      plan: "Free",
      featureParityScore: 74,
      bestForTags: ["mixed"],
      worstForTags: ["research"],
      note: "Better general AI assistant.",
    },
  ],

  "Gemini|Advanced": [
    {
      tool: "ChatGPT",
      plan: "Plus",
      featureParityScore: 82,
      bestForTags: ["coding", "mixed"],
      worstForTags: ["research"],
      note: "Better overall AI capabilities.",
    },

    {
      tool: "Claude",
      plan: "Pro",
      featureParityScore: 80,
      bestForTags: ["writing", "research"],
      worstForTags: ["coding"],
      note: "Better writing and reasoning quality.",
    },
  ],

  // ======================
  // PERPLEXITY
  // ======================

  "Perplexity|Free": [
    {
      tool: "Gemini",
      plan: "Free",
      featureParityScore: 66,
      bestForTags: ["research"],
      worstForTags: ["data"],
      note: "Good free research assistant.",
    },
  ],

  "Perplexity|Pro": [
    {
      tool: "ChatGPT",
      plan: "Plus",
      featureParityScore: 76,
      bestForTags: ["mixed", "coding"],
      worstForTags: ["research"],
      note: "Better all-round AI workflows.",
    },

    {
      tool: "Claude",
      plan: "Pro",
      featureParityScore: 74,
      bestForTags: ["writing", "research"],
      worstForTags: ["coding"],
      note: "Better reasoning and writing quality.",
    },
  ],

  // ======================
  // COPILOT
  // ======================

  "GitHub Copilot|Free": [
    {
      tool: "Cursor",
      plan: "Hobby",
      featureParityScore: 70,
      bestForTags: ["coding"],
      worstForTags: ["enterprise"],
      note: "More AI-native coding experience.",
    },
  ],

  "GitHub Copilot|Pro": [
    {
      tool: "Cursor",
      plan: "Pro",
      featureParityScore: 88,
      bestForTags: ["coding"],
      worstForTags: ["lightweight_coding"],
      note: "Better for advanced AI coding workflows.",
    },

    {
      tool: "Windsurf",
      plan: "Pro",
      featureParityScore: 82,
      bestForTags: ["coding"],
      worstForTags: ["enterprise"],
      note: "Good lower-cost AI coding IDE.",
    },
  ],

  "GitHub Copilot|ProPlus": [
    {
      tool: "Cursor",
      plan: "ProPlus",
      featureParityScore: 90,
      bestForTags: ["coding", "data"],
      worstForTags: ["lightweight_coding"],
      note: "Closer power-user AI coding experience.",
    },
  ],

  "GitHub Copilot|Business": [
    {
      tool: "Cursor",
      plan: "Teams",
      featureParityScore: 88,
      bestForTags: ["coding"],
      worstForTags: ["existing_ide_workflows"],
      note: "Better AI-native development workflows.",
    },
  ],

  "GitHub Copilot|Enterprise": [
    {
      tool: "Cursor",
      plan: "Enterprise",
      featureParityScore: 86,
      bestForTags: ["coding", "data"],
      worstForTags: ["strict_github_workflows"],
      note: "Enterprise-grade AI coding alternative.",
    },
  ],

  // ======================
  // APIs
  // ======================

  "OpenAI API|PAYG": [
    {
      tool: "Anthropic API",
      plan: "PAYG",
      featureParityScore: 92,
      bestForTags: ["writing", "research", "data"],
      worstForTags: ["mixed"],
      note: "Excellent reasoning and long-context API.",
    },
  ],

  "Anthropic API|PAYG": [
    {
      tool: "OpenAI API",
      plan: "PAYG",
      featureParityScore: 94,
      bestForTags: ["coding", "mixed", "data"],
      worstForTags: ["research"],
      note: "Better multimodal and agent ecosystem.",
    },
  ],
};

module.exports = {
  PRICING_DATA,
  ALTERNATIVES,
};
