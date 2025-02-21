import React from "react";
import MapView from "../components/Maps/MapView";
import Navbar from "../components/AllDrones/Navbar";
import Sensorsdata from "../components/ActiveDrones/Sensorsdata";
import DroneAnimation from "../components/ActiveDrones/DroneAnimation";
import OtherData from "../components/ActiveDrones/OtherData"; // Import OtherData component

const ActiveDrones = () => {
  return (
    <div className="overflow-hidden h-screen relative">
      <div className="relative">
        <MapView />
        <Sensorsdata />
      </div>

      {/* Drone Animation - Positioned at the bottom left */}
      <div className="absolute bottom-4 left-4">
        <DroneAnimation />
      </div>

      {/* Other Data - Positioned at the bottom right */}
      <div className="absolute bottom-5  left-80">
        <OtherData />
      </div>
    </div>
  );
};

export default ActiveDrones;
