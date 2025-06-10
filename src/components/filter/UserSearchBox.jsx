import React from 'react'

const UserSearchBox = ({username,handleUsernameChange}) => {
  return (
     <div>
        <label className="block text-sm font-medium text-gray-700">Search by user name</label>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter user name"
          className="mt-1 block w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2"
        />
      </div>
  )
}

export default UserSearchBox