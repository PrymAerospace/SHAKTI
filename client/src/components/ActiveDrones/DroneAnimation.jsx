import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { io } from "socket.io-client";

const socket = io("https://shakti-a.in"); // Replace with your backend WebSocket URL

const DroneAnimation = () => {
  const [roll, setRoll] = useState(0);   // Roll - Sideways tilt
  const [pitch, setPitch] = useState(0); // Pitch - Forward/backward tilt
  const [yaw, setYaw] = useState(0);     // Yaw - Rotation left/right

  useEffect(() => {
    // Listen for real-time sensor data from the backend
    socket.on("updateSensorData", (data) => {
      console.log("Received Sensor Data:", data);
      setRoll(data.roll || 0);
      setPitch(data.pitch || 0);
      setYaw(data.yaw || 0);
    });

    return () => {
      socket.off("updateSensorData"); // Cleanup socket listener on unmount
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-4xl p-4" style={{ width: "15vw", height: "20vh" }}>
      <div className="bg-[#EFF1E4] rounded-full" style={{ width: "13vw", height: "18vh" }}>
        <motion.img
          src="/drone.png" // Replace with your actual drone image path
          alt="Drone"
          className="w-full h-full object-contain bg-transparent"
          animate={{
            rotateX: pitch, // Pitch - Forward/Backward tilt
            rotateY: yaw,   // Yaw - Rotation left/right
            rotateZ: roll,  // Roll - Sideways tilt
          }}
          transition={{ type: "spring", stiffness: 50, damping: 10 }}
        />
      </div>
    </div>
  );
};

export default DroneAnimation;
