import React from "react";

function TableRow({ row, isEven, updateStatus }) {
    
  return (
    <tr className={isEven ? 'bg-gray-50' : 'bg-white'}>
      <td className="px-4 py-2 text-black"><span>{row?.name}</span></td>
      <td className="px-4 py-2 text-black"><span>{row?.amount}</span></td>
      <td className="px-4 py-2">
        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
          row?.status === 'Approved' ? 'bg-green-100 text-green-800' :
          row?.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>{row?.status}</span>
      </td>
      <td className="px-4 py-2 text-black">{row?.date}</td>
      <td className="px-4 py-2">
        <div className="flex space-x-2">
          <button onClick={() => updateStatus(row.id, "Approved")}
                  className="px-3 py-1 border-2 border-blue-500 text-blue-500 rounded text-sm">Approve</button>
          <button onClick={() => updateStatus(row.id, "Rejected")}
                  className="px-3 py-1 border-2 border-blue-500 text-blue-500 rounded text-sm">Reject</button>
        </div>
      </td>
    </tr>
  );
}
export default React.memo(TableRow);
