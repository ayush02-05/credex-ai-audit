import React from "react";
function TableHead({ children }) {
  return (
    <th className="text-left py-4 px-6 text-xs font-semibold text-[#5a6168] uppercase tracking-wider">
      {children}
    </th>
  );
}

export default TableHead;
