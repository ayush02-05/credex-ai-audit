import axios from "axios";
import { ArrowLeft, Download, Share2, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CubeLoader from "./CubeLoader";
import { useNavigate, useParams } from "react-router-dom";
import jsPDF from "jspdf";
import { toPng } from "html-to-image";

const formatMoney = (value) => {
  const number = Number(value);

  if (!Number.isFinite(number)) {
    return "$0";
  }

  return `$${number.toLocaleString()}`;
};

export default function Result() {
  const { auditId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [auditData, setAuditData] = useState(null);
  const [leadSubmitted, setLeadSubmitted] = useState(true);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      company: "",
      role: "",
      teamSize: "",
    },
  });
  const savedForm = JSON.parse(
    localStorage.getItem(`credex-form-${auditId}`),
  ) || { tools: [] };

  useEffect(() => {
    const fetchAudit = async () => {
      try {
        if (!auditId) {
          setTimeout(() => {
            setLoading(false);
          }, 3000);
          return;
        }

        const getAuditResult = await axios.get(
          `${import.meta.env.VITE_API_URL}/audit/getAudit/${auditId}`,
        );
        console.log(getAuditResult.data);
        setAuditData(getAuditResult.data);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      } catch (error) {
        console.log(error);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }
    };

    fetchAudit();
  }, [auditId]);

  const currentYearlySpend = savedForm.tools.reduce((total, tool) => {
    return total + tool.monthlyCost * 12 * tool.teamSize;
  }, 0);

  const optimizedSpend =
    currentYearlySpend - (auditData?.audit?.totalYearlySavings || 0);

  const reductionPercentage = currentYearlySpend
    ? (
        ((auditData?.audit?.totalYearlySavings || 0) / currentYearlySpend) *
        100
      ).toFixed(0)
    : 0;

  const recommendations = auditData?.audit?.tools || [];

  const breakdownRows = recommendations.map((item, index) => {
    const formTool = savedForm.tools[index];
    const yearlyCost = formTool
      ? formTool.monthlyCost * formTool.teamSize * 12
      : 0;
    const yearlySavings = Number(item.yearlySavings) || 0;

    return {
      tool: item.tool,
      desc: item.reasoning,
      plan: item.plan,
      cost: formatMoney(yearlyCost),
      recommendation:
        item.alternativeTool && item.alternativeTool !== item.tool
          ? `Switch to ${item.alternativeTool} ${item.alternativePlan}`
          : item.action,
      savings: formatMoney(yearlySavings),
    };
  });

  const maxSpend = Math.max(currentYearlySpend, optimizedSpend);

  const currentWidth = (currentYearlySpend / maxSpend) * 100;

  const optimizedWidth = (optimizedSpend / maxSpend) * 100;

  if (loading) {
    return <CubeLoader />;
  }

  if (!auditData?.audit) {
    return (
      <div className="min-h-screen bg-[#f7f5f2] text-[#101418] flex items-center justify-center">
        <p className="text-sm text-[#5a6168]">No audit data available.</p>
      </div>
    );
  }
  const handleLeadSubmit = async (data) => {
    try {
      const payload = {
        auditId,
        ...data,
      };

      await axios.post(`${import.meta.env.VITE_API_URL}/lead/create`, payload);
      console.log(payload);

      setLeadSubmitted(true);
      reset(); // clears form
    } catch (err) {
      console.log(err);
    }
  };

  const shareUrl = `${import.meta.env.VITE_FRONTEND_URL}/result/${auditId}`;

  const handleShare = async () => {
    // console.log(import.meta.env.VITE_FRONTEND_URL);
    // console.log(auditId);
    // console.log(shareUrl);
    try {
      await navigator.share({
        title: "Credex AI Audit",
        text: "Check out this AI spend optimization audit",
        url: shareUrl,
      });
    } catch {
      navigator.clipboard.writeText(shareUrl);
      alert("Link copied!");
    }
  };

  const handleDownload = async () => {
    const element = document.getElementById("report-content");

    if (!element) return;

    try {
      const dataUrl = await toPng(element, {
        cacheBust: true,
        pixelRatio: 2,
      });

      const pdf = new jsPDF("p", "mm", "a4");

      const imgProps = pdf.getImageProperties(dataUrl);

      const pdfWidth = pdf.internal.pageSize.getWidth();

      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);

      pdf.save("credex-audit-report.pdf");
    } catch (error) {
      console.error("PDF export failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f5f2] text-[#101418] relative overflow-hidden">
      {/* Background Blur */}
      <div className="pointer-events-none absolute -top-32 left-10 h-72 w-72 rounded-full bg-[#0f6b4a]/15 blur-2xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#1f2937]/10 opacity-50" />

      <main
        id="report-content"
        className="relative z-10 max-w-6xl mx-auto px-6 py-12 space-y-10"
      >
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
            <button
              onClick={() => {
                navigate("/");
              }}
              className="inline-flex items-center gap-2 border border-[#e0e3e5] bg-white px-4 py-2 rounded-full text-sm hover:bg-[#f2f4f6] transition"
            >
              <ArrowLeft size={16} />
              Back
            </button>
            {leadSubmitted && (
              <div className="flex gap-2">
                {/* download */}
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 border border-[#e0e3e5] bg-white px-4 py-2 rounded-full text-sm hover:bg-[#f2f4f6] transition"
                >
                  <Download size={16} />
                  Export Report
                </button>
                {/* Share */}
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 bg-[#0f6b4a] text-white px-4 py-2 rounded-full text-sm hover:bg-[#0b4e37] transition"
                >
                  <Share2 size={16} />
                  Share Results
                </button>{" "}
              </div>
            )}
          </div>
        </div>

        {/* AI Summary */}
        <section>
          <h3 className="text-xs uppercase tracking-[0.35em] text-[#5a6168] mb-4">
            Executive Summary
          </h3>

          <div className="relative overflow-hidden rounded-[28px] p-px">
            {/* Animated Border Glow */}
            <div className="absolute inset-0 rounded-[28px]" />

            {/* Main Card */}
            <div className="relative rounded-[28px] bg-white/70 bg-white p-6 border border-white/40">
              {/* Glow Effects */}
              <div className="absolute -top-20 -left-15 w-55 h-55 bg-pink-400/30 rounded-full blur-2xl " />

              <div className="absolute -bottom-25 -right-10 w-60 h-60 bg-cyan-400/30 rounded-full blur-2xl " />

              {/* Content */}
              <div className="relative z-10">
                <h4 className="font-display text-xl font-bold text-[#0f172a] mb-4">
                  AI Financial Insight
                </h4>

                <p className="leading-relaxed text-[#1e293b] text-[15px]">
                  {auditData.audit.aiSummary}
                </p>
              </div>
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
              High-level optimization opportunities
            </span>
          </div>

          {recommendations.map((item, index) => (
            <SimpleActionCard key={index} {...item} />
          ))}
        </section>

        {/* Savings Section */}
        <section className="grid md:grid-cols-2 gap-5">
          {/* Savings Card */}
          <div className="relative overflow-hidden rounded-3xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
            {/* Soft Glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-100 blur-2xl rounded-full" />

            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.25em] text-[#6b7280] mb-4">
                Identified Savings
              </p>

              <h2 className="text-4xl font-bold tracking-tight text-[#0f6b4a]">
                ${auditData.audit.totalYearlySavings}
                <span className="text-lg text-[#6b7280]"> /yr</span>
              </h2>

              <p className="mt-3 text-sm text-[#6b7280]">
                Save ${auditData.audit.totalMonthlySavings}/month after
                optimization
              </p>
            </div>
          </div>

          {/* Spend Comparison */}
          <div className="rounded-3xl bg-[#0f172a] p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/10 blur-2xl rounded-full" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-medium">Spend Comparison</h4>

                <span className="text-emerald-400 font-semibold text-sm">
                  {reductionPercentage}% ↓
                </span>
              </div>

              <div className="space-y-5">
                {/* Current */}
                <div>
                  <div className="flex justify-between text-sm mb-2 text-slate-300">
                    <span>Current</span>
                    <span>${currentYearlySpend}/yr</span>
                  </div>

                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-red-400 rounded-full transition-all duration-700"
                      style={{ width: `${currentWidth}%` }}
                    />
                  </div>
                </div>

                {/* Optimized */}
                <div>
                  <div className="flex justify-between text-sm mb-2 text-slate-300">
                    <span>Optimized</span>
                    <span>${optimizedSpend}/yr</span>
                  </div>

                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-emerald-400 transition-all duration-700"
                      style={{ width: `${optimizedWidth}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                {breakdownRows.map((row, i) => (
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

            <form
              onSubmit={handleSubmit(handleLeadSubmit)}
              className="space-y-4"
            >
              {" "}
              <div>
                <Input
                  label="Work Email"
                  placeholder="jane@company.com"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">Email is required</p>
                )}
              </div>
              <div>
                <Input
                  label="Company"
                  placeholder="xyz company"
                  {...register("company")}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Input label="Role" {...register("role")} />

                <Input label="Team Size" {...register("teamSize")} />
              </div>
              {/* Honeypot Field */}
              <div className="hidden">
                <input type="text" {...register("website")} />
              </div>
              <button
                type="submit"
                className="w-full bg-[#101418] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Unlock Report
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
  alternativeTool,
  alternativePlan,
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

        {alternativeTool && alternativeTool !== tool && (
          <p className="text-sm text-[#101418] mt-2">
            <span className="font-semibold">Recommendation:</span>{" "}
            {alternativeTool} {alternativePlan}
          </p>
        )}
      </div>

      <div className="flex flex-col items-end min-w-30">
        <span className="font-display text-2xl font-bold text-[#0f6b4a]">
          ${yearlySavings}
        </span>

        <span className="text-xs text-[#5a6168]">estimated yearly savings</span>

        <span className="text-sm text-[#44474d] mt-1">
          ${monthlySavings}/mo
        </span>
      </div>
    </div>
  );
}

function ProgressRow({ label, value, width, color }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-[#44474d]">{label}</span>

        <span className="font-semibold">{value}/yr</span>
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

function Input({ label, placeholder, ...rest }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2 text-[#44474d]">
        {label}
      </label>

      <input
        placeholder={placeholder}
        className="w-full border border-[#e0e3e5] rounded-lg px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-[#0f6b4a]"
        {...rest}
      />
    </div>
  );
}
