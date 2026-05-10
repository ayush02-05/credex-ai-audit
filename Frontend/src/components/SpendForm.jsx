import { useFieldArray, useForm } from "react-hook-form";
import { Building2, Boxes, Plus, Trash2, CheckCircle } from "lucide-react";
import { useEffect } from "react";

const toolOptions = [
  "Cursor",
  "GitHub Copilot",
  "Claude",
  "ChatGPT",
  "Gemini",
  "OpenAI API",
];

export default function SpendForm() {
  const savedData = JSON.parse(localStorage.getItem("credex-form"));

  // React Hook Form
  const { register, control, handleSubmit, watch } = useForm({
    defaultValues: savedData || {
      teamSize: "1-10",
      useCase: "Mixed",

      tools: [
        {
          tool: "Curser",
          plan: "Pro",
          spend: 0,
          seats: 0,
        },
      ],
    },
  });

  // Dynamic Fields
  const { fields, append, remove } = useFieldArray({
    control,
    name: "tools",
  });

  // Watch all form values
  const formData = watch();

  // Auto Save to localStorage
  useEffect(() => {
    localStorage.setItem("credex-form", JSON.stringify(formData));
  }, [formData]);

  // Submit
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-[#f7f5f2] text-[#101418] relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-10 h-72 w-72 rounded-full bg-[#0f6b4a]/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#1f2937]/10 blur-[120px]" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative z-10 max-w-6xl mx-auto px-6 py-12"
      >
        <div className="mb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-[#0f6b4a] bg-[#e6f2ed] px-3 py-1 rounded-full">
              Credex Audit
            </span>

            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
              Start Your SaaS Audit
            </h2>

            <p className="text-[#5a6168] mt-3 max-w-2xl">
              Enter your current tool usage to uncover optimization
              opportunities and align spend with real usage.
            </p>
          </div>

          <div className="bg-white/80 border border-white/60 rounded-2xl p-4 shadow-soft backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.25em] text-[#5a6168]">
              Status
            </p>

            <div className="mt-2 flex items-center gap-2 text-[#0f6b4a] text-sm font-semibold">
              <CheckCircle size={16} />
              Auto-save enabled
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          <section className="lg:col-span-5 bg-white border border-gray-200 rounded-2xl shadow-soft p-7">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="text-[#0f6b4a]" />

              <h3 className="font-display text-xl font-semibold">
                Global Parameters
              </h3>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-[#5a6168] mb-2 uppercase tracking-wider">
                  Team Size
                </label>

                <select
                  {...register("teamSize")}
                  className="w-full border border-gray-300 rounded-xl p-4 bg-white outline-none focus:border-[#0f6b4a]"
                >
                  <option>1-10</option>
                  <option>11-50</option>
                  <option>51-200</option>
                  <option>201-500</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5a6168] mb-2 uppercase tracking-wider">
                  Primary Use Case
                </label>

                <select
                  {...register("useCase")}
                  className="w-full border border-gray-300 rounded-xl p-4 bg-white outline-none focus:border-[#0f6b4a]"
                >
                  <option>Mixed</option>
                  <option>Data</option>
                  <option>Coding</option>
                  <option>Writing</option>
                  <option>Research</option>
                </select>
              </div>
            </div>
          </section>

          <section className="lg:col-span-7 bg-white border border-gray-200 rounded-2xl shadow-soft p-7">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <Boxes className="text-[#0f6b4a]" />

                <h3 className="font-display text-xl font-semibold">
                  Your Tools
                </h3>
              </div>

              <button
                type="button"
                onClick={() =>
                  append({
                    tool: "ChatGPT",
                    plan: "Pro",
                    spend: 20,
                    seats: 1,
                  })
                }
                className="flex items-center gap-2 bg-[#0f6b4a] text-white px-5 py-2 rounded-full hover:bg-[#0b4e37] transition"
              >
                <Plus size={18} />
                Add Tool
              </button>
            </div>

            <div className="space-y-4">
              {fields.map((field, index) => (
                <ToolRow
                  key={field.id}
                  index={index}
                  register={register}
                  remove={remove}
                />
              ))}
            </div>
          </section>
        </div>

        <div className="flex flex-col items-center mt-10 gap-3">
          <button
            type="submit"
            className="bg-[#101418] text-white px-12 py-4 rounded-2xl text-lg font-semibold shadow-soft hover:-translate-y-0.5 transition"
          >
            Generate Audit
          </button>

          <p className="text-sm text-[#5a6168]">
            Your progress is saved locally in your browser.
          </p>
        </div>

        <div className="mt-14 bg-[#101418] rounded-3xl overflow-hidden grid md:grid-cols-2 text-white shadow-soft">
          <div className="p-10">
            <h2 className="font-display text-3xl font-bold mb-4">
              Unlock Deep Savings
            </h2>

            <p className="text-white/70 mb-6 leading-relaxed">
              Our audit engine cross-references your stack against benchmarked
              companies to find overlaps between Copilot, Cursor, and ChatGPT
              plans.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#8dd2b6]">
                <CheckCircle />
                Redundancy Detection
              </div>

              <div className="flex items-center gap-3 text-[#8dd2b6]">
                <CheckCircle />
                Seat Consolidation Advice
              </div>
            </div>
          </div>

          <div className="h-[280px] md:h-full">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuEUffjbtrDI2Hv5BsBntyJG85hI_AQIZZNsj1ZIB0fITWRxvO1KbdDxY3PDUIwxyB7Yymbir8dl8nnUMGEPrOHZ1rTc-zBUBY8X0izcI8MH_yyZB4yfXD3mQ08YIHeEWPAh5dfqAp03JVwI3zyVepU7sMGpvTT0l62hCamWWyQbXqzyAe8pjU3cuEbIXTti-A8OFAOQlczywsMUAsnCxoyEvTpJhx3GABwd00FHN2mABNihmuD1UuhMznABpzK5vWAMAaUeQWIFkF"
              alt="dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

// TOOL ROW
function ToolRow({ index, register, remove }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 bg-[#f7f5f2] border border-transparent hover:border-gray-200 rounded-2xl p-5 items-end transition">
      {/* Tool */}
      <div className="lg:col-span-3">
        <label className="block text-[11px] font-semibold text-[#5a6168] uppercase tracking-wider mb-2">
          Select Tool
        </label>

        <select
          {...register(`tools.${index}.tool`)}
          className="w-full border border-gray-300 rounded-xl p-3 bg-white outline-none focus:border-[#0f6b4a]"
        >
          {toolOptions.map((tool) => (
            <option key={tool}>{tool}</option>
          ))}
        </select>
      </div>

      {/* Plan */}
      <div className="lg:col-span-3">
        <label className="block text-[11px] font-semibold text-[#5a6168] uppercase tracking-wider mb-2">
          Plan
        </label>

        <select
          {...register(`tools.${index}.plan`)}
          className="w-full border border-gray-300 rounded-xl p-3 bg-white outline-none focus:border-[#0f6b4a]"
        >
          <option>Free</option>
          <option>Pro</option>
          <option>Team</option>
          <option>Enterprise</option>
        </select>
      </div>

      {/* Spend */}
      <div className="lg:col-span-2">
        <label className="block text-[11px] font-semibold text-[#5a6168] uppercase tracking-wider mb-2">
          Monthly Spend
        </label>

        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5a6168]">
            $
          </span>

          <input
            type="number"
            {...register(`tools.${index}.spend`)}
            className="w-full border border-gray-300 rounded-xl p-3 pl-8 bg-white outline-none focus:border-[#0f6b4a]"
          />
        </div>
      </div>

      {/* Seats */}
      <div className="lg:col-span-2">
        <label className="block text-[11px] font-semibold text-[#5a6168] uppercase tracking-wider mb-2">
          Seats
        </label>

        <input
          type="number"
          {...register(`tools.${index}.seats`)}
          className="w-full border border-gray-300 rounded-xl p-3 bg-white outline-none focus:border-[#0f6b4a]"
        />
      </div>

      {/* Delete */}
      <div className="lg:col-span-2 flex justify-end">
        <button
          type="button"
          onClick={() => remove(index)}
          className="p-3 rounded-xl text-red-500 hover:bg-red-100 transition"
        >
          <Trash2 />
        </button>
      </div>
    </div>
  );
}
