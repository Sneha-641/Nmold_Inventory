import React from 'react';

const TopNavbar = () => {
  return (
    <div className="ml-[16%] w-[84%] min-h-[10vh] flex justify-between items-center py-6 bg-white shadow-md px-[40px]">
      {/* Search Box */}
      <div className="relative flex items-center w-full max-w-sm">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.9 14.32a8 8 0 111.42-1.42l4.28 4.29-1.42 1.41-4.28-4.28zm-7.9-6.32a6 6 0 1112 0 6 6 0 01-12 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search here...."
          className="w-full py-2 pl-10 pr-4 text-sm text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:bg-white"
        />
      </div>

      {/* Right Section with Icons and Profile */}
      <div className="flex items-center space-x-4">
        {/* Notification Bell */}
        <button className="text-gray-600 hover:text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a7.003 7.003 0 00-5-6.708V4a3 3 0 00-6 0v.292A7.003 7.003 0 002 11v3.159c0 .538-.214 1.054-.595 1.437L0 17h5m10 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>

        {/* Profile Picture and Dropdown */}
        <div className="flex items-center space-x-2">
          <img
            className="h-8 w-8 rounded-full object-cover"
            src="https://randomuser.me/api/portraits/women/75.jpg"
            alt="User"
          />
          <div className="text-sm">
            <p className="text-gray-800 font-semibold">Welcome User</p>
            <p className="text-gray-500">Admin</p>
          </div>
          <button className="text-gray-600 hover:text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
 
  );
};

export default TopNavbar;
