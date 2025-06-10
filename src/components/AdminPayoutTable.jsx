import { useState, useMemo, useCallback, useEffect } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import Notification from "./Notification";

export default function UserRequestsTable({ tableData = [] }) {
  const [data, setData] = useState(tableData);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [page, setPage] = useState(1);
  const [isStatusUpdate, setIsStatusUpdate] = useState(false)
  const perPage = 10;

  useEffect(() => {
    if (isStatusUpdate) {
      const timer = setTimeout(() => setIsStatusUpdate(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isStatusUpdate]);

  const sorted = useMemo(() => {
    if (!sortConfig.key) return data;
    return [...data].sort((a, b) => {
      let x = a[sortConfig.key], y = b[sortConfig.key];
      if (sortConfig.key === "amount") {
        x = parseFloat(x.replace(/[$,]/g, ""));
        y = parseFloat(y.replace(/[$,]/g, ""));
      }
      if (sortConfig.key === "date") {
        x = new Date(x);
        y = new Date(y);
      }
      return sortConfig.direction === "asc" ? x - y : y - x;
    });
  }, [data, sortConfig]);

  const current = useMemo(() => {
    const start = (page - 1) * perPage;
    return sorted.slice(start, start + perPage);
  }, [sorted, page]);

  const toggleSort = useCallback((key) => {
    setSortConfig(s => ({
      key,
      direction: s.key === key && s.direction === "asc" ? "desc" : "asc"
    }));

  }, []);


  const updateStatus = useCallback((id, status) => {
    setData(prev =>
      prev.map(r => r.id === id ? { ...r, status } : r)
    );
    setIsStatusUpdate(true)
  }, []);

  const pagination = () => {
    return <>
      <button onClick={() => setPage(p => Math.max(p - 1, 1))} disabled={page === 1}
        className={`px-3 py-1 rounded 'bg-gray-200 text-black`}>Prev</button>
      {Array.from({ length: Math.ceil(data.length / perPage) }, (_, i) => (
        <button key={i} onClick={() => setPage(i + 1)}
          className={`px-3 py-1 rounded ${page === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
          {i + 1}
        </button>
      ))}
      <button onClick={() => setPage(p => Math.min(p + 1, Math.ceil(data.length / perPage)))} disabled={page === Math.ceil(data.length / perPage)}
        className={`px-3 py-1 rounded  bg-gray-200 text-black`}>Next</button>
    </>
  }

  const pageShowingCount =() =>{
    return(
      <>
      <span className="text-sm text-gray-700">
            Showing {(page - 1) * perPage + 1}–{Math.min(page * perPage, data.length)} of {data.length}
          </span>
      </>
    )
  }

  return (
    <>
      <div className="space-y-4">
        {isStatusUpdate && <Notification />}

        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="min-w-full table-auto border-collapse overflow-y-auto h-[100px]">
            <thead className="bg-gray-50">
              <tr>
                {['User Name', 'Payout Amount', 'Status', 'Request Date', 'Action'].map(header => (
                  <TableHeader
                    key={header}
                    label={header}
                    sortConfig={sortConfig}
                    toggleSort={toggleSort}
                  />
                ))}
              </tr>
            </thead>
            <tbody>
              {current.length > 0 ? current.map((row, idx) => (
                <TableRow
                  key={row.id}
                  row={row}
                  isEven={idx % 2 === 0}
                  updateStatus={updateStatus}
                />
              )
              ) : null}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center">
            {pageShowingCount()}
          <div className="flex space-x-1">
            {pagination()}
          </div>
        </div>
      </div>

    </>
  );
}

