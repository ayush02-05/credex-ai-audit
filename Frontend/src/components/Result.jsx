import axios from "axios";
import {
  ArrowLeft,
  Download,
  Share2,
  AlertCircle,
  CheckCircle as CheckCircleIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CubeLoader from "./CubeLoader";
import { useNavigate, useParams } from "react-router-dom";
import jsPDF from "jspdf";
import { toPng } from "html-to-image";
import Input from "./Function/Input";
import TableRow from "./Function/TableRow";
import TableHead from "./Function/TableHead";
import SimpleActionCard from "./Function/SimpleActionCard";
import Benefit from "./Function/Benefit";

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
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadMessage, setLeadMessage] = useState(null);
  const [leadError, setLeadError] = useState(null);

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
      name: "",
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
        setAuditData(getAuditResult.data);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      } catch (error) {
        console.error(error);
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
      verdict: item.verdict,
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
    setLeadError(null);
    setLeadMessage(null);

    try {
      const payload = {
        auditId,
        ...data,
      };

      await axios.post(`${import.meta.env.VITE_API_URL}/lead/create`, payload);

      setLeadSubmitted(true);
      setLeadMessage("✓ Report saved! Check your email for the full report.");
      reset();

      // Clear message after 5 seconds
      setTimeout(() => {
        setLeadMessage(null);
      }, 5000);
    } catch (err) {
      console.error(err);
      setLeadError(
        "Failed to save your information. Please try again or contact support.",
      );
    }
  };

  const shareUrl = `${import.meta.env.VITE_FRONTEND_URL}/result/${auditId}`;

  const handleShare = async () => {
    try {
      await navigator.share({
        title: "Credex AI Audit",
        text: "Check out this AI spend optimization audit",
        url: shareUrl,
      });
    } catch {
      navigator.clipboard.writeText(shareUrl);
      alert("Link copied to clipboard!");
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
                </button>
              </div>
            )}
          </div>
        </div>

        {/* AI Summary - HERO SECTION */}
        <section>
          <div className="relative overflow-hidden rounded-[28px] p-px bg-gradient-to-r from-[#0f6b4a]/10 to-transparent">
            <div className="relative rounded-[28px] bg-white/80 backdrop-blur-sm p-8 border border-[#0f6b4a]/20">
              {/* Glow Effects */}
              <div className="absolute -top-20 -left-15 w-55 h-55 bg-emerald-400/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-25 -right-10 w-60 h-60 bg-teal-400/20 rounded-full blur-2xl" />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[#0f6b4a] text-white p-2 rounded-xl">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 3.5a.5.5 0 01.5.5v6h6a.5.5 0 010 1h-6v6a.5.5 0 01-1 0v-6h-6a.5.5 0 010-1h6V4a.5.5 0 01.5-.5z" />
                    </svg>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0f172a]">
                    AI-Powered Analysis
                  </h2>
                </div>

                <p className="text-lg text-[#1e293b] leading-relaxed">
                  {auditData.audit.aiSummary || "Analyzing your tool stack..."}
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

          {/* DESKTOP TABLE */}
          <div className="hidden md:block bg-white border border-[#e0e3e5] rounded-2xl overflow-hidden shadow-soft">
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

          {/* MOBILE CARDS */}
          <div className="md:hidden space-y-4">
            {breakdownRows.map((row, i) => (
              <div
                key={i}
                className="bg-white border border-[#e0e3e5] rounded-xl p-4"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-bold text-lg">{row.tool}</h4>
                    <p className="text-xs text-[#5a6168] mt-1">{row.desc}</p>
                  </div>
                  <span className="text-xs font-semibold text-[#0f6b4a] bg-[#e6f2ed] px-2 py-1 rounded-full">
                    {row.verdict}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <p className="text-xs text-[#5a6168] mb-1">
                      Current Cost/yr
                    </p>
                    <p className="font-semibold">{row.cost}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#5a6168] mb-1">Savings</p>
                    <p className="font-bold text-[#0f6b4a]">{row.savings}</p>
                  </div>
                </div>

                <div className="p-3 bg-[#f7f5f2] rounded-lg">
                  <p className="text-xs font-semibold text-[#101418] mb-1">
                    Recommendation:
                  </p>
                  <p className="text-sm text-[#44474d]">{row.recommendation}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white border border-[#e0e3e5] rounded-2xl p-8 grid lg:grid-cols-2 gap-10 shadow-soft">
          <div>
            <h2 className="font-display text-3xl font-bold mb-4">
              Unlock Your Complete AI Spend Report
            </h2>

            <p className="text-[#44474d] leading-relaxed mb-6">
              Save your audit results and receive a detailed breakdown of
              optimization opportunities, cost-saving recommendations, and AI
              stack insights for your team.
            </p>

            <div className="space-y-3">
              <Benefit text="Detailed AI spend breakdown" />
              <Benefit text="Personalized optimization recommendations" />
              <Benefit text="Exportable audit insights & savings report" />
            </div>
          </div>

          <div className="bg-[#f7f5f2] border border-[#e0e3e5] rounded-xl p-6">
            <h3 className="font-display text-xl font-semibold mb-2">
              Access Full Report
            </h3>

            <p className="text-sm text-[#5a6168] mb-6">
              Enter your details to save and unlock your personalized audit
              report.
            </p>

            {/* SUCCESS MESSAGE */}
            {leadMessage && (
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg text-sm mb-6 flex items-start gap-3">
                <CheckCircleIcon size={18} className="flex-shrink-0 mt-0.5" />
                <span>{leadMessage}</span>
              </div>
            )}

            {/* ERROR MESSAGE */}
            {leadError && (
              <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg text-sm mb-6 flex items-start gap-3">
                <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                <span>{leadError}</span>
              </div>
            )}

            <form
              onSubmit={handleSubmit(handleLeadSubmit)}
              className="space-y-4"
            >
              <div>
                <Input
                  label="Work Email"
                  placeholder="jane@company.com"
                  {...register("email", { required: true })}
                />

                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">Email is required</p>
                )}
              </div>

              <div>
                <Input
                  label="Name"
                  placeholder="Your name"
                  {...register("name")}
                />
              </div>

              <div>
                <Input
                  label="Company"
                  placeholder="XYZ Company"
                  {...register("company")}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input label="Role" {...register("role")} />
                <Input label="Team Size" {...register("teamSize")} />
              </div>

              {/* Honeypot */}
              <div
                style={{
                  position: "absolute",
                  left: "-9999px",
                  visibility: "hidden",
                }}
              >
                <label htmlFor="website">Website</label>
                <input type="text" id="website" {...register("website")} />
              </div>

              <button
                type="submit"
                disabled={leadSubmitted}
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  leadSubmitted
                    ? "bg-green-100 text-green-700 cursor-default"
                    : "bg-[#101418] text-white hover:opacity-90"
                }`}
              >
                {leadSubmitted ? "✓ Report Saved" : "Unlock Full Report"}
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
