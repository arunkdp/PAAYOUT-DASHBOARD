import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import DateRange from "./filter/DateRange";
import StatusSelect from "./filter/StatusSelect";
import UserSearchBox from "./filter/UserSearchBox";

export default function AdminPayoutFilter({ }) {
  const [dateRange, setDateRange] = useState({ startDate: null, endDate: null });
  const [status, setStatus] = useState("All");
  const [username, setUsername] = useState("");

  const onFilter =()=>{
    //filter logic
  }

  const handleDateRange = (newRange) => {
    setDateRange(newRange);
    onFilter({ dateRange: newRange, status, username });
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    onFilter({ dateRange, status: e.target.value, username });
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    onFilter({ dateRange, status, username: e.target.value });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow grid grid-cols-1 sm:grid-cols-3 gap-4">
      <DateRange dateRange={dateRange} handleDateRange ={handleDateRange} />
      <StatusSelect  selectedStatus={status} handleStatusChange={handleStatusChange}/>
      <UserSearchBox username={username} handleUsernameChange ={handleUsernameChange}/>

    </div>
  );
}
