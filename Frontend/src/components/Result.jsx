// import { ArrowLeft, Download, Share2, Check } from "lucide-react";

// export default function Result() {
//   return (
//     <div className="min-h-screen bg-[#f7f5f2] text-[#101418] relative overflow-hidden">
//       <div className="pointer-events-none absolute -top-32 left-10 h-72 w-72 rounded-full bg-[#0f6b4a]/15 blur-3xl" />
//       <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#1f2937]/10 blur-[120px]" />

//       <main className="relative z-10 max-w-6xl mx-auto px-6 py-12 space-y-10">
//         <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
//           <div>
//             <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-[#0f6b4a] bg-[#e6f2ed] px-3 py-1 rounded-full">
//               Credex Audit
//             </span>

//             <h1 className="font-display text-4xl md:text-5xl font-bold mt-4">
//               Optimization Summary
//             </h1>

//             <p className="text-[#5a6168] mt-3 max-w-2xl">
//               Audit completed for the engineering team. Review the savings
//               insights and recommended actions below.
//             </p>
//           </div>

//           <div className="flex flex-wrap items-center gap-3">
//             <button className="inline-flex items-center gap-2 border border-[#e0e3e5] bg-white px-4 py-2 rounded-full text-sm hover:bg-[#f2f4f6] transition">
//               <ArrowLeft size={16} />
//               Back
//             </button>

//             <button className="inline-flex items-center gap-2 border border-[#e0e3e5] bg-white px-4 py-2 rounded-full text-sm hover:bg-[#f2f4f6] transition">
//               <Download size={16} />
//               Export Report
//             </button>

//             <button className="inline-flex items-center gap-2 bg-[#0f6b4a] text-white px-4 py-2 rounded-full text-sm hover:bg-[#0b4e37] transition">
//               <Share2 size={16} />
//               Share Results
//             </button>
//           </div>
//         </div>

//         <section className="bg-white border border-[#e0e3e5] rounded-2xl p-8 shadow-soft grid md:grid-cols-2 gap-8">
//           <div>
//             <p className="text-xs uppercase tracking-[0.3em] text-[#5a6168] mb-5">
//               Identified Inefficiencies
//             </p>

//             <div className="space-y-6">
//               <div>
//                 <p className="text-sm text-[#44474d] mb-1">
//                   Total Annual Savings
//                 </p>

//                 <h2 className="font-display text-5xl font-bold text-[#0f6b4a]">
//                   $4,464
//                   <span className="text-2xl">/yr</span>
//                 </h2>
//               </div>

//               <div>
//                 <p className="text-sm text-[#44474d] mb-1">
//                   Total Monthly Savings
//                 </p>

//                 <h3 className="font-display text-3xl font-bold">$372/mo</h3>
//               </div>
//             </div>
//           </div>

//           <div className="bg-[#f7f5f2] rounded-xl p-6">
//             <h4 className="font-semibold mb-5">Optimization Progress</h4>

//             <div className="mb-6">
//               <div className="flex justify-between text-sm mb-2">
//                 <span className="text-[#44474d]">Current Spend</span>

//                 <span className="font-semibold">$7,200/yr</span>
//               </div>

//               <div className="w-full h-3 bg-gray-300 rounded-full">
//                 <div className="h-3 bg-gray-500 rounded-full w-full" />
//               </div>
//             </div>

//             <div>
//               <div className="flex justify-between text-sm mb-2">
//                 <span className="text-[#0f6b4a] font-semibold">
//                   Optimized Spend
//                 </span>

//                 <span className="font-bold text-[#0f6b4a]">$2,736/yr</span>
//               </div>

//               <div className="w-full h-3 bg-gray-300 rounded-full">
//                 <div className="h-3 bg-[#0f6b4a] rounded-full w-[38%]" />
//               </div>
//             </div>

//             <p className="text-right text-xs mt-4 text-[#44474d]">
//               Potential reduction of 62%
//             </p>
//           </div>
//         </section>

//         <section>
//           <h3 className="text-xs uppercase tracking-[0.35em] text-[#5a6168] mb-4">
//             Breakdown Table
//           </h3>

//           <div className="bg-white border border-[#e0e3e5] rounded-2xl overflow-hidden shadow-soft">
//             <table className="w-full">
//               <thead className="bg-[#f7f5f2] border-b border-[#e0e3e5]">
//                 <tr>
//                   <TableHead>Tool</TableHead>
//                   <TableHead>Current Plan</TableHead>
//                   <TableHead>Current Cost/yr</TableHead>
//                   <TableHead>Recommended</TableHead>
//                   <TableHead>Yearly Savings</TableHead>
//                 </tr>
//               </thead>

//               <tbody>
//                 <TableRow
//                   tool="ChatGPT"
//                   desc="Overlaps with GitHub Copilot for dev tasks."
//                   plan="Plus"
//                   cost="$2,880"
//                   recommendation="GitHub Copilot Business"
//                   savings="$144"
//                 />

//                 <TableRow
//                   tool="Midjourney"
//                   desc="Low utilization across engineering team."
//                   plan="Pro"
//                   cost="$4,320"
//                   recommendation="Leonardo AI (Free)"
//                   savings="$4,320"
//                 />
//               </tbody>
//             </table>
//           </div>
//         </section>

//         <section>
//           <h3 className="text-xs uppercase tracking-[0.35em] text-[#5a6168] mb-4">
//             AI Summary
//           </h3>

//           <div className="bg-[#e8f0ff]/55 border-l-4 border-[#0f6b4a] rounded-r-2xl p-6">
//             <h4 className="font-display text-xl font-bold text-[#0f6b4a] mb-4">
//               AI Analysis:
//             </h4>

//             <p className="leading-relaxed text-[#1f2937]">
//               Your team is spending $4,464/year on AI tools with significant
//               overlap. Switching Midjourney to the free Leonardo AI tier could
//               save $4,320/year, while GitHub Copilot Business provides better
//               dev collaboration than ChatGPT Plus for coding tasks.
//             </p>
//           </div>
//         </section>

//         <section className="bg-white border border-[#e0e3e5] rounded-2xl p-8 grid lg:grid-cols-2 gap-10 shadow-soft">
//           <div>
//             <h2 className="font-display text-3xl font-bold mb-4">
//               Capture these savings with Credex
//             </h2>

//             <p className="text-[#44474d] leading-relaxed mb-6">
//               Our experts can help you implement these recommendations
//               immediately.
//             </p>

//             <div className="space-y-3">
//               <Benefit text="Seamless migration planning" />
//               <Benefit text="License negotiation support" />
//               <Benefit text="Continuous spend monitoring" />
//             </div>
//           </div>

//           <div className="bg-[#f7f5f2] border border-[#e0e3e5] rounded-xl p-6">
//             <h3 className="font-display text-xl font-semibold mb-6">
//               Book a Free Consultation
//             </h3>

//             <form className="space-y-4">
//               <Input label="Work Email" placeholder="jane@company.com" />

//               <div className="grid grid-cols-2 gap-4">
//                 <Input label="Company" />
//                 <Input label="Role" />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2 text-[#44474d]">
//                   Team Size
//                 </label>

//                 <select className="w-full border border-[#e0e3e5] rounded-lg px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-[#0f6b4a]">
//                   <option>Select team size...</option>
//                   <option>1-10</option>
//                   <option>11-50</option>
//                   <option>51-200</option>
//                   <option>201+</option>
//                 </select>
//               </div>

//               <button className="w-full bg-[#101418] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition">
//                 Schedule Call
//               </button>
//             </form>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// /* ---------------- COMPONENTS ---------------- */

// function TableHead({ children }) {
//   return (
//     <th className="text-left py-4 px-6 text-xs font-semibold text-[#5a6168] uppercase tracking-wider">
//       {children}
//     </th>
//   );
// }

// function TableRow({ tool, desc, plan, cost, recommendation, savings }) {
//   return (
//     <tr className="border-b border-[#e0e3e5] hover:bg-[#f7f5f2] transition">
//       <td className="py-5 px-6">
//         <h4 className="font-semibold">{tool}</h4>

//         <p className="text-xs text-[#5a6168] mt-1">{desc}</p>
//       </td>

//       <td className="py-5 px-6">{plan}</td>

//       <td className="py-5 px-6">{cost}</td>

//       <td className="py-5 px-6">{recommendation}</td>

//       <td className="py-5 px-6 font-bold text-[#0f6b4a]">{savings}</td>
//     </tr>
//   );
// }

// function Benefit({ text }) {
//   return (
//     <div className="flex items-center gap-3">
//       <Check className="text-[#0f6b4a]" size={18} />
//       {text}
//     </div>
//   );
// }

// function Input({ label, placeholder }) {
//   return (
//     <div>
//       <label className="block text-sm font-medium mb-2 text-[#44474d]">
//         {label}
//       </label>

//       <input
//         type="text"
//         placeholder={placeholder}
//         className="w-full border border-[#e0e3e5] rounded-lg px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-[#0f6b4a]"
//       />
//     </div>
//   );
// }

import { ArrowLeft, Download, Share2, Check } from "lucide-react";

const recommendations = [
  {
    tool: "Midjourney",
    verdict: "High Impact",
    reasoning:
      "Very low utilization across the engineering team despite premium pricing.",
    action: "Move design experimentation to Leonardo AI free tier.",
    yearlySavings: "$4,320",
    monthlySavings: "$360",
  },
  {
    tool: "ChatGPT Team",
    verdict: "Optimization Opportunity",
    reasoning:
      "Developers already rely heavily on GitHub Copilot for coding workflows.",
    action: "Reduce inactive ChatGPT seats and renegotiate renewal.",
    yearlySavings: "$3,000",
    monthlySavings: "$250",
  },
];

const breakdown = [
  {
    tool: "ChatGPT",
    desc: "Overlaps with GitHub Copilot for dev tasks.",
    plan: "Team",
    cost: "$3,600",
    recommendation: "Reduce unused seats",
    savings: "$3,000",
  },
  {
    tool: "Midjourney",
    desc: "Low utilization across engineering team.",
    plan: "Pro",
    cost: "$4,320",
    recommendation: "Switch to Leonardo AI",
    savings: "$4,320",
  },
];

export default function Result() {
  return (
    <div className="min-h-screen bg-[#f7f5f2] text-[#101418] relative overflow-hidden">
      {/* Background Blur */}
      <div className="pointer-events-none absolute -top-32 left-10 h-72 w-72 rounded-full bg-[#0f6b4a]/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#1f2937]/10 blur-[120px]" />

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12 space-y-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-[#0f6b4a] bg-[#e6f2ed] px-3 py-1 rounded-full">
              Credex Audit
            </span>

            <h1 className="font-display text-4xl md:text-5xl font-bold mt-4">
              Optimization Summary
            </h1>

            <p className="text-[#5a6168] mt-3 max-w-2xl">
              AI spend audit completed for your engineering team. Review key
              savings opportunities and recommended actions below.
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

        {/* AI Summary */}
        <section>
          <h3 className="text-xs uppercase tracking-[0.35em] text-[#5a6168] mb-4">
            Executive Summary
          </h3>

          <div className="bg-[#e8f0ff]/55 border-l-4 border-[#0f6b4a] rounded-r-2xl p-6">
            <h4 className="font-display text-xl font-bold text-[#0f6b4a] mb-4">
              AI Financial Insight
            </h4>

            <p className="leading-relaxed text-[#1f2937] text-[15px]">
              Your team is currently overspending on overlapping AI tools with
              low utilization across engineering workflows. The largest savings
              opportunity comes from replacing Midjourney’s premium plan and
              reducing inactive ChatGPT seats, which together could lower AI
              software spend by more than 60% annually without impacting team
              productivity.
            </p>
          </div>
        </section>

        {/* Savings Section */}
        <section className="bg-white border border-[#e0e3e5] rounded-2xl p-8 shadow-soft grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#5a6168] mb-5">
              Identified Savings
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
                <p className="text-sm text-[#44474d] mb-1">Monthly Reduction</p>

                <h3 className="font-display text-3xl font-bold">$372/mo</h3>
              </div>
            </div>
          </div>

          {/* Spend Comparison */}
          <div className="bg-[#f7f5f2] rounded-xl p-6">
            <h4 className="font-semibold mb-6">Spend Comparison</h4>

            <div className="space-y-6">
              <ProgressRow
                label="Current Spend"
                value="$7,200/yr"
                width="100%"
                color="bg-red-400"
              />

              <ProgressRow
                label="Optimized Spend"
                value="$2,736/yr"
                width="38%"
                color="bg-[#0f6b4a]"
              />
            </div>

            <div className="mt-8">
              <span className="text-4xl font-bold text-[#0f6b4a]">62%</span>

              <p className="text-sm text-[#5a6168] mt-1">
                projected reduction in annual AI spend
              </p>
            </div>
          </div>
        </section>

        {/* Key Recommendations */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs uppercase tracking-[0.35em] text-[#1f2937] font-bold">
              Key Recommendations
            </h3>

            <span className="text-sm text-[#5a6168]">
              Prioritized by savings impact
            </span>
          </div>

          {recommendations.map((item, index) => (
            <SimpleActionCard key={index} {...item} />
          ))}
        </section>

        {/* Breakdown Table */}
        <section>
          <h3 className="text-xs uppercase tracking-[0.35em] text-[#5a6168] mb-4">
            Tool Breakdown
          </h3>

          <div className="bg-white border border-[#e0e3e5] rounded-2xl overflow-hidden shadow-soft">
            <table className="w-full">
              <thead className="bg-[#f7f5f2] border-b border-[#e0e3e5]">
                <tr>
                  <TableHead>Tool</TableHead>
                  <TableHead>Current Plan</TableHead>
                  <TableHead>Current Cost/yr</TableHead>
                  <TableHead>Recommendation</TableHead>
                  <TableHead>Savings</TableHead>
                </tr>
              </thead>

              <tbody>
                {breakdown.map((row, i) => (
                  <TableRow key={i} {...row} />
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white border border-[#e0e3e5] rounded-2xl p-8 grid lg:grid-cols-2 gap-10 shadow-soft">
          <div>
            <h2 className="font-display text-3xl font-bold mb-4">
              Capture these savings with Credex
            </h2>

            <p className="text-[#44474d] leading-relaxed mb-6">
              Our team helps startups optimize software spending, reduce waste,
              and negotiate smarter AI tooling decisions.
            </p>

            <div className="space-y-3">
              <Benefit text="AI tooling optimization support" />
              <Benefit text="License & vendor negotiation help" />
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

/* COMPONENTS */

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

function SimpleActionCard({
  tool,
  verdict,
  reasoning,
  action,
  yearlySavings,
  monthlySavings,
}) {
  return (
    <div className="bg-white border border-[#e0e3e5] rounded-2xl p-6 shadow-soft flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <h4 className="font-display text-lg font-bold">{tool}</h4>

          <span className="text-xs font-semibold text-[#0f6b4a] bg-[#e6f2ed] px-3 py-1 rounded-full">
            {verdict}
          </span>
        </div>

        <p className="text-sm text-[#5a6168] mb-2">
          <span className="font-semibold text-[#101418]">Reason:</span>{" "}
          {reasoning}
        </p>

        <p className="text-sm text-[#0f6b4a]">
          <span className="font-semibold">Action:</span> {action}
        </p>
      </div>

      <div className="flex flex-col items-end min-w-[120px]">
        <span className="font-display text-2xl font-bold text-[#0f6b4a]">
          {yearlySavings}
        </span>

        <span className="text-xs text-[#5a6168]">estimated yearly savings</span>

        <span className="text-sm text-[#44474d] mt-1">{monthlySavings}/mo</span>
      </div>
    </div>
  );
}

function ProgressRow({ label, value, width, color }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-[#44474d]">{label}</span>

        <span className="font-semibold">{value}</span>
      </div>

      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div className={`h-3 rounded-full ${color}`} style={{ width }} />
      </div>
    </div>
  );
}

function Benefit({ text }) {
  return (
    <div className="flex items-center gap-3">
      <Check className="text-[#0f6b4a]" size={18} />
      <span>{text}</span>
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
