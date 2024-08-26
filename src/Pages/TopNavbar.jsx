import React , {useState} from 'react';
import img from '../../src/Pages/img.svg';
import img2 from '../../src/Pages/img2.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell , faBellSlash } from '@fortawesome/free-solid-svg-icons';

const TopNavbar = ({ searchQuery, setSearchQuery }) => {
  const [isNotificationOn, setIsNotificationOn] = useState(false);

  const handleToggle = () => {
    setIsNotificationOn(!isNotificationOn);
  };
  return (
    <div className="ml-[16%] w-[84%] min-h-[10vh] flex justify-between items-center py-6 bg-white shadow-md px-[40px]">
      {/* Search Box */}
      <div className="relative flex items-center w-full max-w-sm">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
          
        </span>
        <input
          type="text"
          placeholder="Search here...."
          className="w-full py-2 pl-10 pr-4 text-sm text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:bg-white"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Right Section with Icons and Profile */}
      <div className="flex items-center space-x-4">
        {/* Notification Bell */}
        <button
      className="text-gray-600 hover:text-gray-800"
      onClick={handleToggle}
    >
      {isNotificationOn ? (
        <FontAwesomeIcon icon={faBell} className='h-6 w-6' />
      ) : (
        <FontAwesomeIcon icon={faBellSlash} className='h-6 w-6' />  
      )}
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
