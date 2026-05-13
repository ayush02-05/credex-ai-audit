const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({});

async function generate_Ai_Summary(audit) {
  try {
    const toolsSummary = audit.tools
      .map(
        (t) =>
          `- ${t.tool} ${t.plan}: ${t.verdict}. ` +
          `Potential savings: $${t.monthlySavings}/month. ` +
          `${
            t.alternativeTool && t.alternativeTool !== t.tool
              ? `Suggested alternative: ${t.alternativeTool} ${t.alternativePlan}.`
              : ""
          }`,
      )
      .join("\n");

    const prompt = `
You are an AI spending advisor for startups. 
Your job is to analyze the company’s AI tool expenses like a financial consultant, but explain insights in a simple, clear, and modern business tone.

Write a short executive-style summary that:
- Sounds smart and practical
- Highlights the biggest money-saving opportunity
- Points out unnecessary spending, overlapping tools, or underused plans
- Gives 1 clear next step the company should take
- Feels like advice from an experienced startup operator or finance advisor
- Avoids buzzwords, jargon, and boring consultant terminology
- Keeps the response concise (2-4 sentences)

Company tools and costs:
${toolsSummary}

Total potential yearly savings:
$${audit.totalYearlySavings}

Generate a concise and actionable financial insight.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite",
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);

    return "Unable to generate AI summary.";
  }
}

module.exports = { generate_Ai_Summary };
