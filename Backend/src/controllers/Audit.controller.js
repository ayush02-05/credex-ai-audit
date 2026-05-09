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
    const { tools } = req.body;

    if (!tools || tools.length === 0) {
      return res.status(400).json({ error: "No tools provided" });
    }

    //  find alternatives and calculate savings
    const processedTools = tools.map((tool) => {
      const toolData = PRICING_DATA[tool.provider];
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
        name: tool.provider,
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

    // // Create audit
    // const audit = new Audit({
    //   tools: processedTools,
    //   totalMonthlySavings,
    //   totalYearlySavings,
    //   aiSummary: "", // Will be filled later
    // });

    // await audit.save();

    res.status(201).json({
      success: true,
      processedTools,
      // auditId: audit._id,
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
