import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Boxes, Plus, Trash2, CheckCircle, Sparkles } from "lucide-react";
import { PRICING_DATA } from "./pricingDataFrontend";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const toolOptions = [
  "Cursor",
  "GitHub Copilot",
  "Claude",
  "ChatGPT",
  "Gemini",
  "Windsurf",
  "OpenAI API",
  "Perplexity",
  "Anthropic API",
];

const defaultTool = {
  name: "",
  currentPlan: "",
  monthlyCost: undefined,
  teamSize: undefined,
  useCase: "",
};

export default function SpendForm() {
  const savedData = JSON.parse(localStorage.getItem("credex-form"));

  const navigate = useNavigate();

  // SIMPLE STATE FOR DYNAMIC ROWS
  const [tools, setTools] = useState(savedData?.tools || []);
  const [loading, setLoading] = useState(false);

  // ONLY useForm
  const { register, handleSubmit, watch, reset } = useForm({
    defaultValues: savedData || {
      tools: [],
    },
  });

  const watchedTools = watch("tools");

  // Sync form when tools change
  useEffect(() => {
    reset({ tools });
  }, [tools, reset]);

  // Add Tool
  const addTool = () => {
    setTools([...tools, defaultTool]);
  };

  // Remove Tool
  const removeTool = (index) => {
    const updatedTools = tools.filter((_, i) => i !== index);
    setTools(updatedTools);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const createResponse = await axios.post(
        `${import.meta.env.VITE_API_URL}/audit/create`,
        data,
      );
      const auditId = createResponse.data.auditId;
      // Persist form data
      localStorage.setItem(`credex-form-${auditId}`, JSON.stringify(data));
      navigate(`/result/${auditId}`);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f5f2] relative overflow-hidden text-[#101418]">
      {/* BACKGROUND */}
      <div className="absolute -top-32 left-10 h-72 w-72 rounded-full bg-[#0f6b4a]/10 blur-2xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-black/5 opacity-50" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative z-10 max-w-7xl mx-auto px-6 py-10"
      >
        {/* TOP HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e8f5ef] text-[#0f6b4a] text-xs tracking-[0.3em] uppercase font-semibold">
              Credex Audit
            </div>

            <h1 className="text-5xl font-black tracking-tight mt-5 leading-tight">
              Analyze Your AI Tool Spend
            </h1>

            <p className="text-[#5a6168] mt-4 max-w-2xl text-lg leading-relaxed">
              Add your current AI stack to identify redundant subscriptions,
              pricing inefficiencies, and optimization opportunities.
            </p>
          </div>

          <div className="bg-white border border-[#ececec] rounded-3xl px-5 py-4 shadow-sm min-w-[240px]">
            <p className="text-xs uppercase tracking-[0.25em] text-[#5a6168]">
              Status
            </p>

            <div className="flex items-center gap-2  text-[#0f6b4a] font-semibold">
              <CheckCircle size={18} />
              Auto-save enabled
            </div>
          </div>
        </div>

        {/* INFO CARD */}
        <div className="bg-[#f4fbf7] border border-[#d7efe3] rounded-2xl p-5 mb-8">
          {" "}
          <div className="flex items-start gap-4">
            {" "}
            <div className="bg-[#0f6b4a] text-white p-2 rounded-xl">
              <Sparkles size={18} />{" "}
            </div>{" "}
            <div>
              {" "}
              <h3 className="font-semibold text-[#0f6b4a] mb-1">
                AI Spend Intelligence{" "}
              </h3>{" "}
              <p className="text-sm text-[#446356] leading-relaxed">
                Credex analyzes overlapping subscriptions and unused seats to
                generate recommendations.{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>

        {/* MAIN CARD */}
        <section className="bg-white border border-[#ececec] rounded-[32px] p-8 shadow-sm">
          {/* SECTION HEADER */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">
            <div>
              <div className="flex items-center gap-3">
                <div className="bg-[#eef8f3] p-3 rounded-2xl">
                  <Boxes className="text-[#0f6b4a]" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold">AI Tools & Licenses</h2>

                  <p className="text-sm text-[#5a6168] mt-1">
                    Add the tools currently used by your team
                  </p>
                </div>
              </div>
            </div>

            <button
              aria-label="Add AI Tool"
              type="button"
              onClick={addTool}
              className="bg-[#0f6b4a] hover:bg-[#0c563b] text-white px-6 py-3 rounded-2xl flex items-center gap-2 font-semibold transition"
            >
              <Plus size={18} />
              Add Tool
            </button>
          </div>

          {/* TOOL ROWS */}
          {tools.length > 0 && (
            <div className="space-y-5">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="border border-[#ececec] rounded-3xl p-6 bg-[#fcfcfc] hover:bg-white hover:shadow-lg transition-all"
                >
                  {/* TOP ROW */}
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-[#5a6168]">
                        Tool #{index + 1}
                      </p>

                      <h3 className="text-xl font-bold mt-1">
                        AI Subscription Details
                      </h3>
                    </div>

                    <button
                      type="button"
                      aria-label={`Remove tool ${index + 1}`}
                      onClick={() => removeTool(index)}
                      className="h-11 w-11 rounded-2xl flex items-center justify-center text-red-500 hover:bg-red-50 transition"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  {/* FORM GRID */}
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
                    {/* TOOL */}
                    <div>
                      <label
                        htmlFor={`tool-${index}`}
                        className="block text-xs font-bold uppercase tracking-[0.15em] text-[#5a6168] mb-2"
                      >
                        Tool
                      </label>

                      <select
                        id={`tool-${index}`}
                        {...register(`tools.${index}.name`)}
                        className="w-full border border-gray-300 rounded-2xl p-3.5 bg-white outline-none focus:border-[#0f6b4a]"
                      >
                        <option value="">Select Tool</option>

                        {toolOptions.map((tool) => (
                          <option key={tool} value={tool}>
                            {tool}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* PLAN */}
                    <div>
                      <label
                        htmlFor={`plan-${index}`}
                        className="block text-xs font-bold uppercase tracking-[0.15em] text-[#5a6168] mb-2"
                      >
                        Current Plan
                      </label>

                      <select
                        id={`plan-${index}`}
                        {...register(`tools.${index}.currentPlan`)}
                        className="w-full border border-gray-300 rounded-2xl p-3.5 bg-white outline-none focus:border-[#0f6b4a]"
                      >
                        <option value="">Select Plan</option>

                        {(PRICING_DATA[watchedTools?.[index]?.name] || []).map(
                          (plan) => (
                            <option key={plan} value={plan}>
                              {plan}
                            </option>
                          ),
                        )}
                      </select>
                    </div>

                    {/* COST */}
                    <div>
                      <label
                        htmlFor={`cost-${index}`}
                        className="block text-xs font-bold uppercase tracking-[0.15em] text-[#5a6168] mb-2"
                      >
                        Monthly Cost
                      </label>

                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5a6168] font-medium">
                          $
                        </span>

                        <input
                          id={`cost-${index}`}
                          type="number"
                          {...register(`tools.${index}.monthlyCost`, {
                            valueAsNumber: true,
                          })}
                          className="w-full border border-gray-300 rounded-2xl p-3.5 pl-9 bg-white outline-none focus:border-[#0f6b4a]"
                        />
                      </div>
                    </div>

                    {/* TEAM SIZE */}
                    <div>
                      <label
                        htmlFor={`team-${index}`}
                        className="block text-xs font-bold uppercase tracking-[0.15em] text-[#5a6168] mb-2"
                      >
                        Seats
                      </label>

                      <input
                        id={`team-${index}`}
                        type="number"
                        {...register(`tools.${index}.teamSize`, {
                          valueAsNumber: true,
                        })}
                        className="w-full border border-gray-300 rounded-2xl p-3.5 bg-white outline-none focus:border-[#0f6b4a]"
                      />
                    </div>

                    {/* USE CASE */}
                    <div>
                      <label
                        htmlFor={`usecase-${index}`}
                        className="block text-xs font-bold uppercase tracking-[0.15em] text-[#5a6168] mb-2"
                      >
                        Use Case
                      </label>

                      <select
                        id={`usecase-${index}`}
                        {...register(`tools.${index}.useCase`)}
                        className="w-full border border-gray-300 rounded-2xl p-3.5 bg-white outline-none focus:border-[#0f6b4a]"
                      >
                        <option value="">Select Use Case</option>

                        <option value="coding">Coding</option>
                        <option value="writing">Writing</option>
                        <option value="research">Research</option>
                        <option value="data">Data</option>
                        <option value="mixed">Mixed</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {/* FOOTER */}
          <div className="mt-10 pt-6 border-t border-[#ececec] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <p className="text-[#5a6168]">
              {tools.length} AI tools added to this audit
            </p>

            <button
              type="submit"
              className={`bg-[#101418] hover:bg-black text-white px-10 py-4 rounded-2xl text-lg font-semibold transition hover:-translate-y-0.5 flex items-center justify-center gap-2 ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin mr-2 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  Generating...
                </>
              ) : (
                "Generate AI Savings Report"
              )}
            </button>
          </div>
        </section>
      </form>
    </div>
  );
}
