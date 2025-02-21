import React, { useState } from "react";
import { IoArrowBackCircle, IoSearch } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router";
import DroneTable from "./DroneTable";

const MainContent = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");

  const goback = () => {
    navigate(-1);
  };

  return (
    <section className="flex flex-col items-center">
      {/* Upper container / All Drones title */}
      <div>
        <h1 className="flex justify-center items-center p-4 text-5xl font-bold text-[#1c4684] ">
          All Drones
        </h1>
      </div>

      {/* Middle container / Back button / Dropdown / Add btn / Searchbar */}
      <div className="flex w-[90vw] justify-between items-center py-4">
        <div className="flex gap-10 items-center ">
          <IoArrowBackCircle
            onClick={goback}
            fontSize={50}
            color="#2bb0d4"
            text-white
          />

          {/* Dropdown for drone status selection */}
          <div className="relative w-fit">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-10 py-2 font-bold bg-[#2bb0d4] text-white rounded-md outline-none appearance-none pr-10"
            >
              <option className="bg-[#2bb0d4] text-white p-4" value="all">
                All Drones
              </option>
              <option className="bg-[#2bb0d4] text-white p-4" value="active">
                Active Drones
              </option>
              <option className="bg-[#2bb0d4] text-white p-4" value="repair">
                Repair Drones
              </option>
              <option className="bg-[#2bb0d4] text-white p-4" value="crashed">
                Crashed Drones
              </option>
              <option className="bg-[#2bb0d4] text-white p-4" value="inactive">
                Inactive Drones
              </option>
            </select>

            {/* Custom arrow positioned on the right */}
            <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
              <MdKeyboardArrowDown color="white" size={30} />
            </div>
          </div>
        </div>

        {/* Add button and Searchbar */}
        <div className="flex gap-10 items-center px-4">
         

          <div className="flex bg-[#2bb0d4] text-white rounded-xl py-1 px-2">
            <IoSearch fontSize={30} />
            <input
              type="search"
              className="px-2 border-none outline-none bg-transparent placeholder-white"
              placeholder="Search drone by id, loc..."
            />
          </div>

          <button
            onClick={() => navigate("/add-drone")}
            className="py-1 px-8 text-lg font-bold bg-green-700 rounded-lg  hover:bg-green-700 hover:rounded-4xl  text-white"
          >
            Add New Drone
          </button> 
        </div>
      </div>

      {/* Bottom container */}
      <DroneTable />
    </section>
  );
};

export default MainContent;
