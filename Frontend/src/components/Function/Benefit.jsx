import { Check } from "lucide-react";
import React from "react";

function Benefit({ text }) {
  return (
    <div className="flex items-center gap-3">
      <Check className="text-[#0f6b4a]" size={18} />
      <span>{text}</span>
    </div>
  );
}

export default Benefit;
