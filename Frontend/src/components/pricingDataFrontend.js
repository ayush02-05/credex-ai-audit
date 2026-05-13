export const PRICING_DATA = {
  Cursor: ["Hobby", "Pro ", "Pro Plus", "Ultra"],

  "GitHub Copilot": [
    "Free",
    "Pro ($10/mo)",
    "Pro Plus",
    "Business ($21/user/mo)",
    "Enterprise",
  ],

  Claude: [
    "Free (Claude 3.5 Haiku)",
    "Claude Pro ($20/mo)",
    "Claude Team",
    "MAX100",
    "MAX200",
  ],

  ChatGPT: ["Free", "Plus ($20/mo)", "Team ($30/seat/mo)", "Enterprise"],

  Gemini: ["Free", "Gemini Advanced ($20/mo)"],

  Windsurf: ["Free", "Pro ($15/mo)"],

  Perplexity: ["Free", "Pro ($20/mo)"],

  "OpenAI API": ["Pay-as-you-go (Varies)"],

  "Anthropic API": ["Pay-as-you-go (Varies)"],
};

export const TOOL_PRICING_METADATA = {
  Cursor: {
    Free: {
      pricePerUser: 0,
      features: "Basic AI coding features",
    },

    "Pro (Claude)": {
      pricePerUser: 20,
      features: "Claude-powered coding assistance",
    },

    "Pro (GPT-4)": {
      pricePerUser: 20,
      features: "GPT-4 powered coding assistance",
    },

    Business: {
      pricePerUser: 40,
      features: "Team management and enterprise controls",
    },
  },

  "GitHub Copilot": {
    "Individual ($10/mo)": {
      pricePerUser: 10,
      features: "Personal AI coding assistant",
    },

    "Business ($21/user/mo)": {
      pricePerUser: 21,
      features: "Organization management and policy controls",
    },

    Enterprise: {
      pricePerUser: 39,
      features: "Enterprise-grade governance and security",
    },
  },

  Claude: {
    "Free (Claude 3.5 Haiku)": {
      pricePerUser: 0,
      features: "Basic Claude access",
    },

    "Claude Pro ($20/mo)": {
      pricePerUser: 20,
      features: "Higher limits and advanced Claude models",
    },

    "Claude Team": {
      pricePerUser: 30,
      features: "Team collaboration and admin controls",
    },

    "API Usage": {
      pricePerUser: null,
      features: "Usage-based API pricing",
    },
  },

  ChatGPT: {
    Free: {
      pricePerUser: 0,
      features: "Basic ChatGPT access",
    },

    "Plus ($20/mo)": {
      pricePerUser: 20,
      features: "GPT-4 access and premium features",
    },

    "Team ($30/seat/mo)": {
      pricePerUser: 30,
      features: "Shared workspace and collaboration",
    },

    Enterprise: {
      pricePerUser: 60,
      features: "Enterprise privacy and scalability",
    },
  },

  Gemini: {
    Free: {
      pricePerUser: 0,
      features: "Basic Gemini access",
    },

    "Gemini Advanced ($20/mo)": {
      pricePerUser: 20,
      features: "Advanced Gemini models and features",
    },
  },

  Windsurf: {
    Free: {
      pricePerUser: 0,
      features: "Basic AI coding environment",
    },

    "Pro ($15/mo)": {
      pricePerUser: 15,
      features: "Advanced AI-assisted development",
    },
  },

  Perplexity: {
    Free: {
      pricePerUser: 0,
      features: "Basic AI-powered search",
    },

    "Pro ($20/mo)": {
      pricePerUser: 20,
      features: "Advanced models and unlimited Pro search",
    },
  },

  "OpenAI API": {
    "Pay-as-you-go (Varies)": {
      pricePerUser: null,
      features: "Usage-based GPT API pricing",
    },
  },

  "Anthropic API": {
    "Pay-as-you-go (Varies)": {
      pricePerUser: null,
      features: "Usage-based Claude API pricing",
    },
  },
};
