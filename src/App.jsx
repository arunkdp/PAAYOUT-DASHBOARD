import { useState } from 'react'
import './App.css'
import  AdminpayoutBanner  from './components/AdminpayoutBanner'
import UserRequestsTable from './components/AdminPayoutTable'
import AdminPayoutFilter from './components/AdminPayout'

function App() {
  const [tableData,setTableData] = useState([
  {id:1, name: 'Jane Smith',username:"arun", amount: '$1,200', status: 'Pending', date: '02/10/2025' },
  {id:2, name: 'Emily Johnson', amount: '$800', status: 'Approved', date: '01/28/2025' },
  { id:3,name: 'Michael Brown', amount: '$1,500', status: 'Rejected', date: '01/15/2025' },
  { id:5,name: 'Sarah Wilson', amount: '$2,000', status: 'Pending', date: '01/05/2026' },
  { id:6,name: 'Sarah Wilson', amount: '$2,000', status: 'Pending', date: '01/05/2027' },
  { id:7,name: 'Sarah Wilson', amount: '$2,000', status: 'Pending', date: '01/05/2028' },
  { id:8,name: 'Sarah Wilson', amount: '$2,000', status: 'Pending', date: '01/05/2028' },
  { id:9,name: 'Sarah Wilson', amount: '$2,000', status: 'Pending', date: '01/05/2020' },
  { id:10,name: 'Sarah Wilson', amount: '$2,000', status: 'Pending', date: '01/05/2010' },
  { id:11,name: 'Sarah Wilson', amount: '$2,000', status: 'Pending', date: '01/05/2001' },
  { id:12,name: 'Sarah Wilson', amount: '$2,000', status: 'Pending', date: '01/05/2002' },
  { id:13,name: 'Sarah Wilson', amount: '$2,000', status: 'Pending', date: '01/05/2003' },
  { id:14,name: 'Sarah Wilson', amount: '$2,000', status: 'Pending', date: '01/05/2004' },
  { id:15,name: 'Sarah Wilson', amount: '$2,000', status: 'Pending', date: '01/05/2005' },
  { id:16,name: 'Sarah Wilson', amount: '$2,000', status: 'Pending', date: '01/05/2006' },
  { id:17,name: 'Sarah Wilson', amount: '$2,000', status: 'Pending', date: '01/05/2000' },
]) 

  return (
    <>
    <div className='ml-5 pl-3'>
      <AdminpayoutBanner/>
      <AdminPayoutFilter />
      <UserRequestsTable tableData ={tableData}/>
    </div>
    </>
  )
}

export default App
