// const PRICING_DATA = {
//   Cursor: {
//     provider: "Cursor",
//     plans: [
//       {
//         name: "Hobby",
//         pricePerMonth: 0,
//         maxSeats: 1,
//         features: ["Basic AI coding", "Limited usage"],
//       },
//       {
//         name: "Pro",
//         pricePerMonth: 20,
//         maxSeats: 1,
//         features: ["Unlimited completions", "Advanced AI models"],
//       },
//       {
//         name: "Business",
//         pricePerMonth: 40,
//         maxSeats: 100,
//         features: ["Team management", "Privacy mode", "Admin controls"],
//       },
//       {
//         name: "Enterprise",
//         pricePerMonth: 60,
//         maxSeats: "Unlimited",
//         features: ["Enterprise security", "SSO", "Dedicated support"],
//       },
//     ],
//   },

//   "GitHub Copilot": {
//     provider: "GitHub",
//     plans: [
//       {
//         name: "Individual",
//         pricePerMonth: 10,
//         maxSeats: 1,
//         features: ["AI code completion"],
//       },
//       {
//         name: "Business",
//         pricePerMonth: 19,
//         maxSeats: 500,
//         features: ["Organization management", "Policy controls"],
//       },
//       {
//         name: "Enterprise",
//         pricePerMonth: 39,
//         maxSeats: "Unlimited",
//         features: ["Enterprise governance", "Advanced security"],
//       },
//     ],
//   },

//   Claude: {
//     provider: "Anthropic",
//     plans: [
//       {
//         name: "Free",
//         pricePerMonth: 0,
//         maxSeats: 1,
//         features: ["Limited Claude access"],
//       },
//       {
//         name: "Pro",
//         pricePerMonth: 20,
//         maxSeats: 1,
//         features: ["Higher usage limits", "Claude advanced models"],
//       },
//       {
//         name: "Max",
//         pricePerMonth: 100,
//         maxSeats: 1,
//         features: ["Highest usage limits"],
//       },
//       {
//         name: "Team",
//         pricePerMonth: 30,
//         maxSeats: 200,
//         features: ["Team collaboration", "Shared workspace"],
//       },
//       {
//         name: "Enterprise",
//         pricePerMonth: 60,
//         maxSeats: "Unlimited",
//         features: ["SSO", "Compliance", "Enterprise support"],
//       },
//       {
//         name: "API Direct",
//         pricePerMonth: "Usage Based",
//         maxSeats: "Unlimited",
//         features: ["API access", "Token billing"],
//       },
//     ],
//   },

//   ChatGPT: {
//     provider: "OpenAI",
//     plans: [
//       {
//         name: "Plus",
//         pricePerMonth: 20,
//         maxSeats: 1,
//         features: ["GPT-4 access", "Priority usage"],
//       },
//       {
//         name: "Team",
//         pricePerMonth: 30,
//         maxSeats: 250,
//         features: ["Shared workspace", "Team management"],
//       },
//       {
//         name: "Enterprise",
//         pricePerMonth: 60,
//         maxSeats: "Unlimited",
//         features: ["Enterprise-grade security", "Unlimited GPT-4"],
//       },
//       {
//         name: "API Direct",
//         pricePerMonth: "Usage Based",
//         maxSeats: "Unlimited",
//         features: ["OpenAI API access"],
//       },
//     ],
//   },

//   Gemini: {
//     provider: "Google",
//     plans: [
//       {
//         name: "Pro",
//         pricePerMonth: 20,
//         maxSeats: 1,
//         features: ["Gemini Advanced", "Google Workspace AI"],
//       },
//       {
//         name: "Ultra",
//         pricePerMonth: 40,
//         maxSeats: 1,
//         features: ["Highest Gemini capabilities"],
//       },
//       {
//         name: "API",
//         pricePerMonth: "Usage Based",
//         maxSeats: "Unlimited",
//         features: ["Gemini API access"],
//       },
//     ],
//   },

//   Windsurf: {
//     provider: "Codeium",
//     plans: [
//       {
//         name: "Free",
//         pricePerMonth: 0,
//         maxSeats: 1,
//         features: ["Basic AI coding assistant"],
//       },
//       {
//         name: "Pro",
//         pricePerMonth: 15,
//         maxSeats: 1,
//         features: ["Advanced completions", "Faster responses"],
//       },
//       {
//         name: "Team",
//         pricePerMonth: 35,
//         maxSeats: 100,
//         features: ["Team collaboration", "Admin dashboard"],
//       },
//       {
//         name: "Enterprise",
//         pricePerMonth: 55,
//         maxSeats: "Unlimited",
//         features: ["Enterprise security", "SSO", "Analytics"],
//       },
//     ],
//   },

//   "Anthropic API": {
//     provider: "Anthropic",
//     plans: [
//       {
//         name: "API",
//         pricePerMonth: "Usage Based",
//         maxSeats: "Unlimited",
//         features: ["Claude API usage"],
//       },
//     ],
//   },

//   "OpenAI API": {
//     provider: "OpenAI",
//     plans: [
//       {
//         name: "API",
//         pricePerMonth: "Usage Based",
//         maxSeats: "Unlimited",
//         features: ["GPT API access"],
//       },
//     ],
//   },
// };

const PRICING_DATA = {
  Cursor: {
    Hobby: {
      price: 0,
      alternatives: {
        Windsurf: 0,
      },
    },

    Pro: {
      price: 20,
      alternatives: {
        "GitHub Copilot Individual": 10,
        "Claude Pro": 20,
      },
    },

    Business: {
      price: 40,
      alternatives: {
        "GitHub Copilot Business": 19,
        "Windsurf Team": 35,
      },
    },

    Enterprise: {
      price: 60,
      alternatives: {},
    },
  },

  ChatGPT: {
    Plus: {
      price: 20,
      alternatives: {
        "Claude Pro": 20,
        "Gemini Pro": 20,
      },
    },

    Team: {
      price: 30,
      alternatives: {
        "Claude Team": 30,
      },
    },

    Enterprise: {
      price: 60,
      alternatives: {},
    },

    "API Direct": {
      price: "usage-based",
      alternatives: {
        "Anthropic API": "usage-based",
      },
    },
  },

  Claude: {
    Free: {
      price: 0,
      alternatives: {
        "ChatGPT Plus": 20,
      },
    },

    Pro: {
      price: 20,
      alternatives: {
        "ChatGPT Plus": 20,
        "Gemini Pro": 20,
      },
    },

    Max: {
      price: 100,
      alternatives: {
        "ChatGPT Enterprise": 60,
      },
    },

    Team: {
      price: 30,
      alternatives: {
        "ChatGPT Team": 30,
      },
    },

    Enterprise: {
      price: 60,
      alternatives: {},
    },

    "API Direct": {
      price: "usage-based",
      alternatives: {
        "OpenAI API": "usage-based",
      },
    },
  },

  "GitHub Copilot": {
    Individual: {
      price: 10,
      alternatives: {
        "Cursor Pro": 20,
        Windsurf: 15,
      },
    },

    Business: {
      price: 19,
      alternatives: {
        "Cursor Business": 40,
      },
    },

    Enterprise: {
      price: 39,
      alternatives: {},
    },
  },

  Gemini: {
    Pro: {
      price: 20,
      alternatives: {
        "ChatGPT Plus": 20,
        "Claude Pro": 20,
      },
    },

    Ultra: {
      price: 40,
      alternatives: {
        "ChatGPT Team": 30,
      },
    },

    API: {
      price: "usage-based",
      alternatives: {
        "OpenAI API": "usage-based",
      },
    },
  },

  Windsurf: {
    Free: {
      price: 0,
      alternatives: {
        "Cursor Hobby": 0,
      },
    },

    Pro: {
      price: 15,
      alternatives: {
        "GitHub Copilot Individual": 10,
      },
    },

    Team: {
      price: 35,
      alternatives: {
        "Cursor Business": 40,
      },
    },

    Enterprise: {
      price: 55,
      alternatives: {},
    },
  },

  "Anthropic API": {
    API: {
      price: "usage-based",
      alternatives: {
        "OpenAI API": "usage-based",
      },
    },
  },

  "OpenAI API": {
    API: {
      price: "usage-based",
      alternatives: {
        "Anthropic API": "usage-based",
      },
    },
  },
};

const createAudit = async (req, res) => {
  try {
    const { tools } = req.body.tools;

    if (!tools || tools.length === 0) {
      return res.status(400).json({ error: "No tools provided" });
    }

    //  find alternatives and calculate savings
    const processedTools = tools.map((tool) => {
      const toolData = PRICING_DATA[tool.name];
      let alternativeCost = tool.monthlyCost; // default: no savings
      let recommendedAlternative = "No alternative found";

      if (toolData && toolData[tool.currentPlan]) {
        const alternatives = toolData[tool.currentPlan].alternatives;
        if (Object.keys(alternatives).length > 0) {
          // Get first alternative
          recommendedAlternative = Object.keys(alternatives)[0];
          alternativeCost = alternatives[recommendedAlternative];
        }
      }

      const monthlySavings =
        (tool.monthlyCost - alternativeCost) * tool.teamSize;
      const yearlySavings = monthlySavings * 12;

      return {
        name: tool.name,
        currentPlan: tool.currentPlan,
        monthlyCost: tool.monthlyCost,
        teamSize: tool.teamSize,
        useCase: tool.useCase,
        recommendedAlternative,
        alternativeCost,
        monthlySavings,
        yearlySavings,
      };
    });

    // Calculate totals
    const totalMonthlySavings = processedTools.reduce(
      (sum, t) => sum + t.monthlySavings,
      0,
    );
    const totalYearlySavings = processedTools.reduce(
      (sum, t) => sum + t.yearlySavings,
      0,
    );

    // Create audit
    const audit = new Audit({
      tools: processedTools,
      totalMonthlySavings,
      totalYearlySavings,
      aiSummary: "", // Will be filled later
    });

    await audit.save();

    res.status(201).json({
      success: true,
      auditId: audit._id,
      message: "Audit created successfully",
    });
  } catch (error) {
    console.error("Error creating audit:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  createAudit,
};
