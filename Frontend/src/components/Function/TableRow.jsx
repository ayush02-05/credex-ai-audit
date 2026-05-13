import React from "react";

function TableRow({
  tool,
  desc,
  plan,
  verdict,
  cost,
  recommendation,
  savings,
}) {
  const getVerdictColor = (verdict) => {
    switch (verdict) {
      case "OVERPAYING":
        return "border-l-4 border-red-500";
      case "SWITCH_RECOMMENDED":
        return "border-l-4 border-amber-500";
      case "OPTIMAL":
        return "border-l-4 border-green-500";
      case "NEGOTIATED_DEAL":
        return "border-l-4 border-teal-500";
      default:
        return "border-l-4 border-gray-500";
    }
  };

  return (
    <tr
      className={`border-b border-[#e0e3e5] hover:bg-[#f7f5f2] transition ${getVerdictColor(
        verdict,
      )}`}
    >
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

export default TableRow;
