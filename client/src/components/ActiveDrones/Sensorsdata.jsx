import React, { useState, useEffect } from "react";
import GaugeChart from "react-gauge-chart";
import { FaBatteryFull } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { BiSolidDetail } from "react-icons/bi";
import { TbDrone } from "react-icons/tb";
import { FaCheckSquare } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import io from "socket.io-client"; // Import socket.io-client

const socket = io("http://192.168.31.68:9000"); // Replace with your backend WebSocket URL

const Sensorsdata = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sensorData, setSensorData] = useState({
    altitude: 0,
    temperature: 0,
    pressure: 0,
    pitch: 0,
    yaw: 0,
    roll: 0,
    battery: 100, 
    latitude: 0,
    longitude: 0,
  });

  // Fetch latest sensor data on component mount
  useEffect(() => {
    const fetchLatestData = async () => {
      try {
        const response = await fetch("http://192.168.31.68:9000/api/sensors");
        const data = await response.json();
        if (data.length > 0) {
          setSensorData({
            altitude: data[0].Altitude,
            temperature: data[0].bmpTemp,
            pressure: data[0].pressure,
            pitch: data[0].pitch,
            yaw: data[0].yaw,
            roll: data[0].roll,
            battery: Math.floor(Math.random() * (100 - 20) + 20), // Simulated battery
            latitude: data[0].Latitude,
            longitude: data[0].Longitude,
          });
        }
      } catch (error) {
        console.error("Error fetching latest sensor data:", error);
      }
    };

    fetchLatestData();

    // Listen for live updates from WebSocket
    socket.on("updateSensorData", (newData) => {
      setSensorData({
        altitude: newData.Altitude,
        temperature: newData.bmpTemp,
        pressure: newData.pressure,
        pitch: newData.pitch,
        yaw: newData.yaw,
        roll: newData.roll,
        battery: 85, // Simulated battery
        latitude: newData.Latitude,
        longitude: newData.Longitude,
      });
      setSensorData(updatedData);
      console.log("Real-time Data:", updatedData); // Print real-time updates to console
    });

    return () => {
      socket.off("updateSensorData");
    };
  }, []);

  return (
    <div className="absolute top-20 right-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#ddebf6] shadow-md rounded-bl-xl rounded-tl-xl p-2 absolute top-4 right-0"
      >
        {isOpen ? <BsChevronRight className="text-gray-600" /> : <BsChevronLeft className="text-gray-600" />}
      </button>

      {isOpen && (
        <div className="w-80 bg-[#eff1e4]/70 shadow-lg rounded-lg p-4 flex flex-col gap-4">
          <div className="flex justify-center items-center">
            <h3 className="text-lg font-bold text-black flex items-center p-2">
              <FaFileAlt size={22} /> DRONE DETAILS
            </h3>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-lg font-bold flex gap-4 items-center">
              <TbDrone size={22} /> Drone - ID:
              <span className="text-gray-700 ml-1">PAPL-00123</span>
            </span>

            <span className="text-lg font-medium flex gap-4 items-center">
              <FaCheckSquare color="green" size={22} /> Drone Status:
              <span className="flex justify-center items-center gap-1">
                <span className="text-green-600 font-bold ml-2 flex items-center">Active</span>
                <span className="w-2 h-2 bg-green-500 rounded-full p-2"></span>
              </span>
            </span>

            <span className="text-lg font-bold flex gap-4 items-center">
              <FaBatteryFull size={22} /> Battery Status:
              <span className="ml-2 text-gray-700">{sensorData.battery}%</span>
            </span>

            <span className="text-lg font-medium flex flex-col">
              <span className="flex gap-4 font-bold">
                <IoLocationSharp size={22} className="text-blue-500" /> Location Coordinates:
              </span>
              <span className="text-center text-gray-700 ml-1">
                {sensorData.latitude}° N, {sensorData.longitude}° W
              </span>
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            {[
              { label: "Altitude", value: sensorData.altitude, unit: "m" },
              { label: "Temperature", value: sensorData.temperature, unit: "°C" },
              { label: "Pressure", value: sensorData.pressure, unit: "hPa" },
              { label: "Pitch", value: sensorData.pitch, unit: "°" },
              { label: "Yaw", value: sensorData.yaw, unit: "°" },
              { label: "Roll", value: sensorData.roll, unit: "°" },
            ].map((sensor, index) => (
              <div key={index} className="text-center">
                <p className="text-lg font-semibold">{sensor.label}:</p>
                <GaugeChart
                  id={`gauge-${sensor.label}`}
                  nrOfLevels={5}
                  colors={["#00FF00", "#FFFF00", "#FF0000"]}
                  cornerRadius={0}
                  arcPadding={0}
                  arcWidth={0.3}
                  percent={Math.min(sensor.value / 100, 1)}
                  hideText
                />
                <p className="text-md text-gray-700">
                  {sensor.value} {sensor.unit}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center">
            <button className="mt-4 w-1/2 bg-[#2bb0d4] text-white font-bold py-2 rounded-lg hover:rounded-2xl">
              View Drone Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sensorsdata;





// import React, { useState, useEffect } from "react";
// import GaugeChart from "react-gauge-chart";
// import { FaBatteryFull } from "react-icons/fa";
// import { IoLocationSharp } from "react-icons/io5";
// import { BiSolidDetail } from "react-icons/bi";
// import { TbDrone } from "react-icons/tb";
// import { FaCheckSquare } from "react-icons/fa";
// import { FaFileAlt } from "react-icons/fa";
// import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

// const Sensorsdata = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [sensorData, setSensorData] = useState({
//     altitude: 1200,
//     temperature: 22.8,
//     pressure: 1012,
//     pitch: 15.4,
//     yaw: 72.5,
//     roll: -8.2,
//     battery: 86,
//   });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSensorData({
//         altitude: (Math.random() * (1500 - 500) + 500).toFixed(1),
//         temperature: (Math.random() * (35 - 15) + 15).toFixed(1),
//         pressure: (Math.random() * (1025 - 990) + 990).toFixed(1),
//         pitch: (Math.random() * (30 - -30) + -30).toFixed(1),
//         yaw: (Math.random() * (180 - 0) + 0).toFixed(1),
//         roll: (Math.random() * (30 - -30) + -30).toFixed(1),
//         battery: (Math.random() * (100 - 20) + 20).toFixed(0),
//       });
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="absolute top-20 right-0">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="bg-[#ddebf6]  shadow-md rounded-bl-xl rounded-tl-xl p-2 absolute top-4 right-0"
//       >
//         {isOpen ? (
//           <BsChevronRight className="text-gray-600" />
//         ) : (
//           <BsChevronLeft className="text-gray-600" />
//         )}
//       </button>

//       {isOpen && (
//         <div className="w-80 bg-[#eff1e4]/70 shadow-lg rounded-lg p-4 flex flex-col gap-4">
//           <div className="flex justify-center items-center">
//             <h3 className="text-lg font-bold text-black flex items-center p-2">
//               <FaFileAlt size={22} /> DRONE DETAILS
//             </h3>
//           </div>

//           <div className="flex flex-col gap-2">
//             <span className="text-lg font-bold flex gap-4 items-center ">
//               <TbDrone size={22} /> Drone - ID:
//               <span className="text-gray-700 ml-1">PAPL-00123</span>
//             </span>

//             <span className="text-lg font-medium flex  gap-4 items-center">
//               <span className="flex justify-center items-center gap-4 font-bold">
//                 {" "}
//                 <FaCheckSquare color=" green" size={22} /> Drone Status:{" "}
//               </span>
//               <span className="flex justify-center items-center gap-1">
//                 <span className="text-green-600 font-bold ml-2 flex items-center">
//                   Active{" "}
//                 </span>
//                 <span className="w-2 h-2 bg-green-500 rounded-full p-2"></span>
//               </span>
//             </span>

//             <span className="text-lg font-bold flex gap-4 items-center">
//               <FaBatteryFull size={22} /> Battery Status:
//               <span className="ml-2 text-gray-700">{sensorData.battery}%</span>
//             </span>

//             <span className="text-lg font-medium flex flex-col">
//               <span className="flex gap-4 font-bold">
//                 <IoLocationSharp size={22} className="text-blue-500" /> Location
//                 Coordinates:
//               </span>
//               <span className="text-center text-gray-700 ml-1">
//                 37.7749° N, 122.4194° W
//               </span>
//             </span>
//           </div>

//           <div className="grid grid-cols-2 gap-4 mt-4">
//             {[
//               { label: "Altitude", value: sensorData.altitude, unit: "m" },
//               {
//                 label: "Temperature",
//                 value: sensorData.temperature,
//                 unit: "°C",
//               },
//               { label: "Pressure", value: sensorData.pressure, unit: "hPa" },
//               { label: "Pitch", value: sensorData.pitch, unit: "°" },
//               { label: "Yaw", value: sensorData.yaw, unit: "°" },
//               { label: "Roll", value: sensorData.roll, unit: "°" },
//             ].map((sensor, index) => (
//               <div key={index} className="text-center">
//                 <p className="text-lg font-semibold">{sensor.label}:</p>
//                 <GaugeChart
//                   id={`gauge-${sensor.label}`}
//                   nrOfLevels={5}
//                   colors={["#00FF00", "#FFFF00", "#FF0000"]}
//                   cornerRadius={0}
//                   arcPadding={0}
//                   arcWidth={0.3}
//                   percent={Math.min(sensor.value / 100, 1)}
//                   hideText
//                 />
//                 <p className="text-md text-gray-700">
//                   {sensor.value} {sensor.unit}
//                 </p>
//               </div>
//             ))}
//           </div>

//         <div className="flex items-center justify-center">
//         <button className="mt-4 w-1/2 bg-[#2bb0d4] text-white font-bold py-2 rounded-lg  hover:rounded-2xl">
//             View Drone Details
//           </button>
//         </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Sensorsdata;

// import React, { useState } from "react";
// import GaugeChart from "react-gauge-chart";
// import { FaBatteryFull } from "react-icons/fa";
// import { IoLocationSharp } from "react-icons/io5";
// import { BiSolidDetail } from "react-icons/bi";
// import { TbDrone } from "react-icons/tb";
// import { FaCheckSquare } from "react-icons/fa";
// import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

// const Sensorsdata = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <div className="absolute top-20 right-0">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="bg-[#eff1e4] border-2 border-gray-500 shadow-md rounded-bl-xl rounded-tl-xl p-2 absolute top-4 right-0"
//       >
//         {isOpen ? (
//           <BsChevronRight className="text-gray-600" />
//         ) : (
//           <BsChevronLeft className="text-gray-600" />
//         )}
//       </button>

//       {isOpen && (
//         <div className="w-80 bg-[#eff1e4]/50 shadow-lg rounded-lg p-4">
//           <div className="flex justify-center items-center">
//             <h3 className="text-lg font-bold text-black flex items-center p-2">
//               <BiSolidDetail className="mr-2" /> DRONE DETAILS
//             </h3>
//           </div>

//           <div className="flex flex-col gap-2">
//             <span className="text-lg font-medium flex  gap-4 items-center">
//               <span className="flex justify-center items-center gap-1">
//                 <TbDrone size={22} /> Drone - ID:{" "}
//               </span>
//               <span className="font-bold text-blue-600 ml-1">PAPL-00123</span>
//             </span>

//             <span className="text-lg font-medium flex  gap-4 items-center">
//               <span className="flex justify-center items-center gap-1">
//                 {" "}
//                 <FaCheckSquare color=" green" size={22} /> Drone Status:{" "}
//               </span>
//               <span className="flex justify-center items-center gap-1">
//                 <span className="text-green-600 font-bold ml-2 flex items-center">
//                   Active{" "}
//                 </span>
//                 <span className="w-2 h-2 bg-green-500 rounded-full p-2"></span>
//               </span>
//             </span>

//             <span className="text-lg font-medium flex  gap-4 items-center">
//               <span className="flex justify-center items-center gap-1">
//               <FaBatteryFull className="text-green-500 mr-2" /> Battery Status:{" "}
//               </span>
//               <span className="font-bold ml-2">86%</span>
//             </span>

//             <span className="text-lg font-medium flex flex-col gap-4 items-center">
//               <span className="flex justify-center items-center gap-1">
//               <IoLocationSharp className="text-blue-500 " /> Location
//               Coordinates:{" "}
//               </span>
//               <span className="font-bold ml-1">37.7749° N, 122.4194° W</span>
//             </span>

//           </div>
//           <div className="grid grid-cols-2 gap-4 mt-4">
//             {[
//               { label: "Altitude", value: 1200, unit: "m" },
//               { label: "Temperature", value: 22.8, unit: "°C" },
//               { label: "Pressure", value: 1012, unit: "hPa" },
//               { label: "Pitch", value: 15.4, unit: "°" },
//               { label: "Yaw", value: 72.5, unit: "°" },
//               { label: "Roll", value: -8.2, unit: "°" },
//             ].map((sensor, index) => (
//               <div key={index} className="text-center">
//                 <p className="text-lg font-semibold">{sensor.label} :</p>
//                 <GaugeChart
//                   id={`gauge-${sensor.label}`}
//                   nrOfLevels={5}
//                   colors={["#00FF00", "#FFFF00", "#FF0000"]}
//                   arcWidth={0.3}
//                   percent={Math.min(sensor.value / 100, 1)}
//                   hideText
//                 />
//                 <p className="text-lg font-bold">
//                   {sensor.value} {sensor.unit}
//                 </p>
//               </div>
//             ))}
//           </div>

//           <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-medium">
//             View Drone Details
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Sensorsdata;
