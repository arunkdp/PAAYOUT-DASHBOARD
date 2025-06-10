import React from 'react'

const AdminpayoutBanner = () => {

  let bannerData = [
    { name: "Total Requests", count: 68 },
    { name: "Total Requests", count: "$15,000" },
    { name: "Total Approved Amount", count: "$4,200" },
  ]
  return (
    <section className="bg-gray-50 py-3">
      <h6  className='text-black font-bold text-2xl'>Payout Dashboard</h6>
      <div className=" mx-auto px-4 grid sm:grid-cols-3 gap-4 text-left">
        {bannerData.map((data,i) => {
          return (
            <div className="bg-white shadow rounded-lg p-6 text-left" key={i}>
              <p className="text-sm font-medium text-gray-500">{data.name}</p>
              <p className="mt-2 text-3xl font-extrabold text-gray-800">{data.count}</p>
            </div>
          )
        })}
      </div>
    </section>

  )
}

export default AdminpayoutBanner