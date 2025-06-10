import React from 'react'

const StatusSelect = ({selectedStatus,handleStatusChange}) => {
  return (
     <div>
        <label className="block text-sm font-medium text-gray-700">Status</label>
        <select
          value={selectedStatus}
          onChange={handleStatusChange}
          className="mt-1 block w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2"
        >
          <option>All</option>
          <option>Approved</option>
          <option>Pending</option>
          <option>Rejected</option>
        </select>
      </div>
  )
}

export default StatusSelect