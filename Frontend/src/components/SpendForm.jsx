import { useEffect } from "react";
import { useForm } from "react-hook-form";

function SpendForm() {
  const tools = {
    Cursor: ["Hobby", "Pro", "Business", "Enterprise"],
    "GitHub Copilot": ["Individual", "Business", "Enterprise"],
    Claude: ["Free", "Pro", "Max", "Team", "Enterprise", "API Direct"],
    ChatGPT: ["Plus", "Team", "Enterprise", "API Direct"],
    "Anthropic API Direct": ["API"],
    "OpenAI API Direct": ["API"],
    Gemini: ["Pro", "Ultra", "API"],
    "Windsurf / v0": ["Free", "Pro", "Team", "Enterprise"],
  };

  const { register, handleSubmit, watch, reset, setValue } = useForm({
    defaultValues: {
      companyName: "",
      teamSize: "",
      primaryUseCase: "Coding",
      selectedTool: "",
      selectedPlan: "",
      monthlySpend: "",
      seats: "",
    },
  });

  // Watch selected tool
  const selectedTool = watch("selectedTool");

  // Load data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("credex-audit-form");

    if (savedData) {
      reset(JSON.parse(savedData));
    }
  }, [reset]);

  // Watch all form data    
  const formValues = watch();

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("credex-audit-form", JSON.stringify(formValues));
  }, [formValues]);

  const onSubmit = (data) => {
    console.log(data);
    alert("Audit Submitted");
  };

  const clearData = () => {
    localStorage.removeItem("credex-audit-form");

    reset({
      companyName: "",
      teamSize: "",
      primaryUseCase: "Coding",
      selectedTool: "",
      selectedPlan: "",
      monthlySpend: "",
      seats: "",
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-3">Credex AI Tool Audit</h1>

          <p className="text-slate-400 text-lg">
            Track AI tool usage, plans, spending, and seats.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl"
        >
          {/* Company Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div>
              <label className="block mb-2 text-sm text-slate-300">
                Company Name
              </label>

              <input
                type="text"
                placeholder="Enter company name"
                {...register("companyName")}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-slate-300">
                Team Size
              </label>

              <input
                type="number"
                placeholder="e.g. 25"
                {...register("teamSize")}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-slate-300">
                Primary Use Case
              </label>

              <select
                {...register("primaryUseCase")}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option>Coding</option>
                <option>Writing</option>
                <option>Data</option>
                <option>Research</option>
                <option>Mixed</option>
              </select>
            </div>
          </div>

          {/* Tool Details */}
          <div className="bg-slate-800/60 border border-slate-700 rounded-3xl p-8 mb-10">
            <h2 className="text-2xl font-semibold mb-8">AI Tool Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tool */}
              <div>
                <label className="block mb-2 text-sm text-slate-300">
                  Select Tool
                </label>

                <select
                  {...register("selectedTool")}
                  onChange={(e) => {
                    setValue("selectedTool", e.target.value);
                    setValue("selectedPlan", "");
                  }}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="">Choose Tool</option>

                  {Object.keys(tools).map((tool) => (
                    <option key={tool} value={tool}>
                      {tool}
                    </option>
                  ))}
                </select>
              </div>

              {/* Plan */}
              <div>
                <label className="block mb-2 text-sm text-slate-300">
                  Select Plan
                </label>

                <select
                  {...register("selectedPlan")}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="">Choose Plan</option>

                  {selectedTool &&
                    tools[selectedTool]?.map((plan) => (
                      <option key={plan} value={plan}>
                        {plan}
                      </option>
                    ))}
                </select>
              </div>

              {/* Monthly Spend */}
              <div>
                <label className="block mb-2 text-sm text-slate-300">
                  Monthly Spend ($)
                </label>

                <input
                  type="number"
                  placeholder="e.g. 200"
                  {...register("monthlySpend")}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              {/* Seats */}
              <div>
                <label className="block mb-2 text-sm text-slate-300">
                  Number of Seats
                </label>

                <input
                  type="number"
                  placeholder="e.g. 15"
                  {...register("seats")}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex justify-end gap-4 mt-10">
            <button
              type="button"
              onClick={clearData}
              className="px-6 py-3 rounded-xl border border-slate-600 hover:bg-slate-800 transition"
            >
              Clear Data
            </button>

            <button
              type="submit"
              className="px-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition"
            >
              Submit Audit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SpendForm;
