import React from 'react'

const DateRange = ({dateRange,handleDateRange}) => {
  return (
     <div>
        <label className="block text-sm font-medium text-gray-700">Date Range</label>
         <input
          type="date"
        //   value={startDate}
          onChange={handleDateRange}
          className="mt-1 block w-full bg-white border border-gray-300 rounded-lg py-2 px-3 text-gray-900
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
  )
}

export default DateRange