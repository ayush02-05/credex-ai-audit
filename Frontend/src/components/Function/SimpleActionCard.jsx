import React from "react";

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
  const verdictConfig = {
    OVERPAYING: {
      color: "bg-red-50",
      border: "border-l-4 border-red-500",
      badge: "bg-red-100 text-red-700",
      label: "⚠ Overpaying",
    },
    SWITCH_RECOMMENDED: {
      color: "bg-amber-50",
      border: "border-l-4 border-amber-500",
      badge: "bg-amber-100 text-amber-700",
      label: "⬆ Switch",
    },
    OPTIMAL: {
      color: "bg-green-50",
      border: "border-l-4 border-green-500",
      badge: "bg-green-100 text-green-700",
      label: "✓ Optimal",
    },
    NEGOTIATED_DEAL: {
      color: "bg-teal-50",
      border: "border-l-4 border-teal-500",
      badge: "bg-teal-100 text-teal-700",
      label: "⭐ Good Deal",
    },
    USAGE_BASED_PRICING: {
      color: "bg-gray-50",
      border: "border-l-4 border-gray-500",
      badge: "bg-gray-100 text-gray-700",
      label: "ℹ Usage-Based",
    },
    PLAN_OVERKILL: {
      color: "bg-blue-50",
      border: "border-l-4 border-blue-500",
      badge: "bg-blue-100 text-blue-700",
      label: "↓ Downgrade",
    },
  };

  const config = verdictConfig[verdict] || verdictConfig.OPTIMAL;

  return (
    <div
      className={`${config.color} ${config.border} bg-white rounded-lg p-6 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6`}
    >
      <div>
        <div className="flex items-center gap-3 mb-3">
          <h4 className="font-display text-lg font-bold">{tool}</h4>

          <span
            className={`text-xs font-semibold ${config.badge} px-3 py-1 rounded-full`}
          >
            {config.label}
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

export default SimpleActionCard;
