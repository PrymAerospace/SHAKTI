import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdNotificationsActive } from "react-icons/md";
import ShaktiLogo from "../logos/ShaktiLogo";

const DashNavbar = () => {
  return (
    <div className="h-[8vh] bg-[#FFFFFF] w-full flex items-center justify-between p-2 sm:px-10 shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <ShaktiLogo />
      </div>

      {/* Search & Icons */}
      <div className="flex items-center gap-4 sm:gap-10">
        {/* Search Bar */}
        <div className="border-2 flex items-center px-2 rounded-2xl w-[150px] sm:w-[200px]">
          <input
            className="w-full border-none focus:outline-none focus:ring-0 text-sm sm:text-base"
            type="search"
            placeholder="Search"
          />
          <IoSearch fontSize={18} className="text-gray-600 sm:text-xl" />
        </div>

        {/* Notification & User Profile */}
        <div className="flex items-center gap-4 sm:gap-6">
          <MdNotificationsActive fontSize={24} className="text-gray-700 sm:text-2xl" />
          <FaUserCircle fontSize={28} className="text-gray-700 sm:text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default DashNavbar;
