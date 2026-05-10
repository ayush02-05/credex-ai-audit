import { ArrowLeft, Download, Share2, Check } from "lucide-react";

export default function Result() {
  return (
    <div className="min-h-screen bg-[#f7f5f2] text-[#101418] relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-10 h-72 w-72 rounded-full bg-[#0f6b4a]/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#1f2937]/10 blur-[120px]" />

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12 space-y-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-[#0f6b4a] bg-[#e6f2ed] px-3 py-1 rounded-full">
              Credex Audit
            </span>

            <h1 className="font-display text-4xl md:text-5xl font-bold mt-4">
              Optimization Summary
            </h1>

            <p className="text-[#5a6168] mt-3 max-w-2xl">
              Audit completed for the engineering team. Review the savings
              insights and recommended actions below.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 border border-[#e0e3e5] bg-white px-4 py-2 rounded-full text-sm hover:bg-[#f2f4f6] transition">
              <ArrowLeft size={16} />
              Back
            </button>

            <button className="inline-flex items-center gap-2 border border-[#e0e3e5] bg-white px-4 py-2 rounded-full text-sm hover:bg-[#f2f4f6] transition">
              <Download size={16} />
              Export Report
            </button>

            <button className="inline-flex items-center gap-2 bg-[#0f6b4a] text-white px-4 py-2 rounded-full text-sm hover:bg-[#0b4e37] transition">
              <Share2 size={16} />
              Share Results
            </button>
          </div>
        </div>

        <section className="bg-white border border-[#e0e3e5] rounded-2xl p-8 shadow-soft grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#5a6168] mb-5">
              Identified Inefficiencies
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-[#44474d] mb-1">
                  Total Annual Savings
                </p>

                <h2 className="font-display text-5xl font-bold text-[#0f6b4a]">
                  $4,464
                  <span className="text-2xl">/yr</span>
                </h2>
              </div>

              <div>
                <p className="text-sm text-[#44474d] mb-1">
                  Total Monthly Savings
                </p>

                <h3 className="font-display text-3xl font-bold">$372/mo</h3>
              </div>
            </div>
          </div>

          <div className="bg-[#f7f5f2] rounded-xl p-6">
            <h4 className="font-semibold mb-5">Optimization Progress</h4>

            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#44474d]">Current Spend</span>

                <span className="font-semibold">$7,200/yr</span>
              </div>

              <div className="w-full h-3 bg-gray-300 rounded-full">
                <div className="h-3 bg-gray-500 rounded-full w-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#0f6b4a] font-semibold">
                  Optimized Spend
                </span>

                <span className="font-bold text-[#0f6b4a]">$2,736/yr</span>
              </div>

              <div className="w-full h-3 bg-gray-300 rounded-full">
                <div className="h-3 bg-[#0f6b4a] rounded-full w-[38%]" />
              </div>
            </div>

            <p className="text-right text-xs mt-4 text-[#44474d]">
              Potential reduction of 62%
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-xs uppercase tracking-[0.35em] text-[#5a6168] mb-4">
            Breakdown Table
          </h3>

          <div className="bg-white border border-[#e0e3e5] rounded-2xl overflow-hidden shadow-soft">
            <table className="w-full">
              <thead className="bg-[#f7f5f2] border-b border-[#e0e3e5]">
                <tr>
                  <TableHead>Tool</TableHead>
                  <TableHead>Current Plan</TableHead>
                  <TableHead>Current Cost/yr</TableHead>
                  <TableHead>Recommended</TableHead>
                  <TableHead>Yearly Savings</TableHead>
                </tr>
              </thead>

              <tbody>
                <TableRow
                  tool="ChatGPT"
                  desc="Overlaps with GitHub Copilot for dev tasks."
                  plan="Plus"
                  cost="$2,880"
                  recommendation="GitHub Copilot Business"
                  savings="$144"
                />

                <TableRow
                  tool="Midjourney"
                  desc="Low utilization across engineering team."
                  plan="Pro"
                  cost="$4,320"
                  recommendation="Leonardo AI (Free)"
                  savings="$4,320"
                />
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h3 className="text-xs uppercase tracking-[0.35em] text-[#5a6168] mb-4">
            AI Summary
          </h3>

          <div className="bg-[#e8f0ff]/55 border-l-4 border-[#0f6b4a] rounded-r-2xl p-6">
            <h4 className="font-display text-xl font-bold text-[#0f6b4a] mb-4">
              AI Analysis:
            </h4>

            <p className="leading-relaxed text-[#1f2937]">
              Your team is spending $4,464/year on AI tools with significant
              overlap. Switching Midjourney to the free Leonardo AI tier could
              save $4,320/year, while GitHub Copilot Business provides better
              dev collaboration than ChatGPT Plus for coding tasks.
            </p>
          </div>
        </section>

        <section className="bg-white border border-[#e0e3e5] rounded-2xl p-8 grid lg:grid-cols-2 gap-10 shadow-soft">
          <div>
            <h2 className="font-display text-3xl font-bold mb-4">
              Capture these savings with Credex
            </h2>

            <p className="text-[#44474d] leading-relaxed mb-6">
              Our experts can help you implement these recommendations
              immediately.
            </p>

            <div className="space-y-3">
              <Benefit text="Seamless migration planning" />
              <Benefit text="License negotiation support" />
              <Benefit text="Continuous spend monitoring" />
            </div>
          </div>

          <div className="bg-[#f7f5f2] border border-[#e0e3e5] rounded-xl p-6">
            <h3 className="font-display text-xl font-semibold mb-6">
              Book a Free Consultation
            </h3>

            <form className="space-y-4">
              <Input label="Work Email" placeholder="jane@company.com" />

              <div className="grid grid-cols-2 gap-4">
                <Input label="Company" />
                <Input label="Role" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[#44474d]">
                  Team Size
                </label>

                <select className="w-full border border-[#e0e3e5] rounded-lg px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-[#0f6b4a]">
                  <option>Select team size...</option>
                  <option>1-10</option>
                  <option>11-50</option>
                  <option>51-200</option>
                  <option>201+</option>
                </select>
              </div>

              <button className="w-full bg-[#101418] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition">
                Schedule Call
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function TableHead({ children }) {
  return (
    <th className="text-left py-4 px-6 text-xs font-semibold text-[#5a6168] uppercase tracking-wider">
      {children}
    </th>
  );
}

function TableRow({ tool, desc, plan, cost, recommendation, savings }) {
  return (
    <tr className="border-b border-[#e0e3e5] hover:bg-[#f7f5f2] transition">
      <td className="py-5 px-6">
        <h4 className="font-semibold">{tool}</h4>

        <p className="text-xs text-[#5a6168] mt-1">{desc}</p>
      </td>

      <td className="py-5 px-6">{plan}</td>

      <td className="py-5 px-6">{cost}</td>

      <td className="py-5 px-6">{recommendation}</td>

      <td className="py-5 px-6 font-bold text-[#0f6b4a]">{savings}</td>
    </tr>
  );
}

function Benefit({ text }) {
  return (
    <div className="flex items-center gap-3">
      <Check className="text-[#0f6b4a]" size={18} />
      {text}
    </div>
  );
}

function Input({ label, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2 text-[#44474d]">
        {label}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        className="w-full border border-[#e0e3e5] rounded-lg px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-[#0f6b4a]"
      />
    </div>
  );
}
