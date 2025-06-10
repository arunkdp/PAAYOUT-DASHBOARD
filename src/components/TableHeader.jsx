import React from "react";

function TableHeader({ label, sortConfig, toggleSort }) {
  const keyMap = { "Payout Amount": "amount", "Request Date": "date" };
  const key = keyMap[label];
  const sortable = Boolean(key);
  const icon = !sortable ? ""
    : sortConfig.key === key
      ? (sortConfig.direction === "asc" ? "↑" : "↓")
      : "⇅";

  return (
    <th
      className={`px-4 py-2 text-left text-sm font-semibold text-gray-600 ${sortable ? "cursor-pointer select-none" : ""}`}
      onClick={sortable ? () => toggleSort(key) : undefined}
    >
      <div className="inline-flex items-center">
        {label}
        {sortable && <span className="ml-1 text-xs">{icon}</span>}
      </div>
    </th>
  );
}
export default React.memo(TableHeader);
