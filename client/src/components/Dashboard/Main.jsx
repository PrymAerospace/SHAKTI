import React from "react";
import { Link } from "react-router-dom";
import { GiDeliveryDrone } from "react-icons/gi";
import { TbDroneOff } from "react-icons/tb";
import { PiDrone } from "react-icons/pi";
import { GiAutoRepair } from "react-icons/gi";

// import Map from "../Maps/Map";
const Main = () => {
  return (
    <div className="w-[80vw]  bg-[#ffffff] flex justify-evenly rounded-2xl">
              {/* deployed drones card  */}
              <div className="  px-6 py-4 w-[18vw] flex justify-between ">
                <div className="flex flex-col  justify-center">
                  <h1 className="underline font-semibold text-lg">
                    DEPLOYED DRONES
                  </h1>
                  <h1 className="font-black text-4xl">500</h1>
                </div>
                <div className="flex items-center shadow-lg p-2 rounded-full bg-[#f5f5f5]">
                  <PiDrone fontSize={60} />
                </div>
              </div>

              <div class="vertical-line"></div>

              {/* active drones card  */}
              <div className="  px-6 py-4 w-[18vw] flex justify-between ">
                <div className="flex flex-col  justify-center">
                 <Link to="/ActiveDrones">
                 <h1 className="underline font-semibold text-lg">
                    ACTIVE DRONES
                  </h1>
                  </Link>
                  <h1 className="font-black text-4xl">500</h1>
                </div>
                <div className="flex items-center shadow-lg p-2 rounded-full bg-[#f5f5f5]">
                  <GiDeliveryDrone fontSize={60} />
                </div>
              </div>

              <div class="vertical-line"></div>

              {/* repair drones card  */}
              <div className="  px-6 py-4 w-[18vw] flex justify-between ">
                <div className="flex flex-col  justify-center">
                  <h1 className="underline font-semibold text-lg">
                    CRASHED DRONES
                  </h1>
                  <h1 className="font-black text-4xl">500</h1>
                </div>
                <div className="flex items-center shadow-lg p-2 rounded-full bg-[#f5f5f5]">
                  <GiAutoRepair fontSize={60} />
                </div>
              </div>

              <div class="vertical-line"></div>

              {/* crashed drones card  */}
              <div className="  px-6 py-4 w-[18vw] flex justify-between ">
                <div className="flex flex-col  justify-center">
                  <h1 className="underline font-semibold text-lg">
                    REPAIR DRONES
                  </h1>
                  <h1 className="font-black text-4xl">500</h1>
                </div>
                <div className="flex items-center shadow-lg p-2 rounded-full bg-[#f5f5f5]">
                  <TbDroneOff fontSize={60} />
                </div>
              </div>
            </div>
  );
};

export default Main;
