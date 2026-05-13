import React from "react";

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

export default Input;
