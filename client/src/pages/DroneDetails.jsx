import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/AllDrones/Navbar";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { RxActivityLog } from "react-icons/rx";
import { MdOutlineReceiptLong } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";

import { motion } from "framer-motion";
import { GrSettingsOption } from "react-icons/gr";

const DroneDetails = () => {
  const { droneId } = useParams();
  const [drone, setDrone] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDroneDetails = async () => {
      try {
        const response = await axios.get(
          `http://192.168.31.68:9000/api/drones/${droneId}`
        );
        if (!response.data.success) throw new Error(response.data.message);
        setDrone(response.data.drone);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDroneDetails();
  }, [droneId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen text-red-500">
        <p className="text-xl mt-4">Error: {error}</p>
      </div>
    );
  }

  if (!drone)
    return <p className="text-center text-red-500">Drone not found!</p>;

  return (
    <div className="relative min-h-screen p-4 bg-[#ddebf6]">
      {/* <Navbar /> */}

      {/* Navbar */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Blurred Background */}
      {drone.image && (
        <div className="absolute inset-0 w-full h-full">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${drone.image})`,
              filter: "blur(2px)",
            }}
          ></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 p-6 rounded-lg"
      >
        <h1 className="text-6xl pt-6 font-extrabold text-center text-white tracking-wide">
          {drone.droneName}
        </h1>

        {/* Drone Information Containers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 py-8 px-20">
          <div className="bg-white/50 backdrop-blur-md p-6 rounded-2xl">
            <h1 className="flex items-center text-2xl font-bold gap-2 text-gray-900 pb-4 underline">
              <IoMdInformationCircleOutline fontSize={30} /> DRONE INFORMATION
            </h1>
            <table className="w-full rounded-lg">
              <tbody className="text-gray-700">
                <tr>
                  <td className="px-4 font-bold text-gray-900 text-xl">
                    Drone ID :
                  </td>
                  <td className="font-medium text-xl text-gray-700 py-3 px-4">
                    {drone.uin}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 font-bold text-gray-900 text-xl">
                    Drone Status : 
                  </td>
                  <td className="font-medium text-xl text-gray-700 py-3 px-4">
                    {drone.droneStatus}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 font-bold text-gray-900 text-xl">
                    Drone Type :
                  </td>
                  <td className="font-medium text-xl text-gray-700 py-3 px-4">
                    {drone.droneType}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 font-bold text-gray-900 text-xl">
                    Manufacture :
                  </td>
                  <td className="font-medium text-xl text-gray-700 py-3 px-4">
                    {drone.manufacture}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 font-bold text-gray-900 text-xl">
                    Deployment Date :
                  </td>
                  <td className="font-medium text-xl text-gray-700 py-3 px-4">
                    {drone.deploymentDate}
                  </td>
                </tr>
              </tbody>
            </table>{" "}
          </div>
          <div className=" flex items-center justify-center">
            {" "}
            {drone.image && (
              <img
                src={drone.image}
                alt="Drone"
                className="w-full md:w-3/4 h-80 object-cover rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105"
              />
            )}
          </div>

          {/* USAGE DETAILS CONTAINER  */}
          <div className="bg-white/50 backdrop-blur-md p-6 rounded-2xl">
            <h1 className="flex items-center text-2xl font-black gap-2 text-black pb-4 underline">
              <RxActivityLog fontSize={20} /> USAGE DETAILS
            </h1>
            <table className="w-full rounded-lg">
              <tbody className="text-gray-700">
                <tr>
                  <td className="px-4 font-bold text-gray-900 text-xl">
                    Application :
                  </td>
                  <td className="font-medium text-xl text-gray-700 py-3 px-4">
                    {drone.application}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 font-bold text-gray-900 text-xl">
                    Coverage Area :
                  </td>
                  <td className="font-medium text-xl text-gray-700 py-3 px-4">
                    {drone.coverageArea}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 font-bold text-gray-900 text-xl">
                    Control Range
                  </td>
                  <td className="font-medium text-xl text-gray-700 py-3 px-4">
                    {drone.controlRange}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 font-bold text-gray-900 text-xl">
                    GPS Positioning 
                  </td>
                  <td className="font-medium text-xl text-gray-700 py-3 px-4">
                  {drone.gpsPositioning ? "Yes" : "No"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* PILOT DETAILS CONATAINER  */}
          <div className="bg-white/50 backdrop-blur-md p-6 rounded-2xl">
            <h1 className="flex items-center text-2xl font-black gap-2 text-black pb-4 underline">
              <FaUserTie fontSize={26} /> PILOT DETAILS
            </h1>
            <table className="w-full rounded-lg">
              <tbody className="text-gray-700">
                <tr>
                  <td className="px-4 font-bold text-gray-900 text-xl">
                   Pilot Name :
                  </td>
                  <td className="font-medium text-xl text-gray-700 py-3 px-4">
                    {drone.pilotName}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 font-bold text-gray-900 text-xl">
                    Pilot Certification Number :
                  </td>
                  <td className="font-medium text-xl text-gray-700 py-3 px-4">
                    {drone.pilotCertificationNumber}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 font-bold text-gray-900 text-xl">
                    Training Level :
                  </td>
                  <td className="font-medium text-xl text-gray-700 py-3 px-4">
                    {drone.trainingLevel}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 font-bold text-gray-900 text-xl">
                   Insurance Coverage :
                  </td>
                  <td className="font-medium text-xl text-gray-700 py-3 px-4">
                    {drone.insuranceCoverage}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* SPECIFICATION DETAILS CONTAINER  */}
          <div className="bg-white/50 backdrop-blur-md p-6 rounded-2xl">
            <h1 className="flex items-center text-2xl font-black gap-2 text-black pb-4 underline">
              <GrSettingsOption fontSize={26} /> SPECIFICATION
            </h1>
            <table className="w-full rounded-lg">
              <tbody className="text-gray-700">
                <tr>
                  <td className="px-4 font-bold text-gray-900 text-xl">
                   Max Takeoff weight :
                  </td>
                  <td className="font-medium text-xl text-gray-700 py-3 px-4">
                    {drone.maxTakeoffWeight} Kg
                  </td>
                </tr>
                <tr>
                  <td className="px-4 font-bold text-gray-900 text-xl">
                   Payload Capacity :
                  </td>
                  <td className="font-medium text-xl text-gray-700 py-3 px-4">
                    {drone.payloadCapacity} lt
                  </td>
                </tr>
                <tr>
                  <td className="px-4 font-bold text-gray-900 text-xl">
                   Spray System :
                  </td>
                  <td className="font-medium text-xl text-gray-700 py-3 px-4">
                    {drone.spraySystem}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 font-bold text-gray-900 text-xl">
                   Battery Capacity :
                  </td>
                  <td className="font-medium text-xl text-gray-700 py-3 px-4">
                    {drone.batteryCapacity}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 font-bold text-gray-900 text-xl">
                   Spray Width :
                  </td>
                  <td className="font-medium text-xl text-gray-700 py-3 px-4">
                    {drone.sprayWidth}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 font-bold text-gray-900 text-xl">
                  Number Of Nozzels :
                  </td>
                  <td className="font-medium text-xl text-gray-700 py-3 px-4">
                    {drone.numberOfNozzles}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 font-bold text-gray-900 text-xl">
                   Flight Time Per Battery :
                  </td>
                  <td className="font-medium text-xl text-gray-700 py-3 px-4">
                    {drone.flightTimePerBattery}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 font-bold text-gray-900 text-xl">
                   Charging Time Per Battery
                  </td>
                  <td className="font-medium text-xl text-gray-700 py-3 px-4">
                    {drone.chargingTimePerBattery}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* PURCHASE DETAILS CONTAINER   */}
          <div className="bg-white/50 backdrop-blur-md p-6 rounded-2xl">
            <h1 className="flex items-center text-2xl font-black gap-2 text-black pb-4 underline">
              <MdOutlineReceiptLong fontSize={26} /> PURCHASE DETAILS
            </h1>
            <table className="w-full rounded-lg">
              <tbody className="text-gray-700">
                <tr>
                  <td className="px-4 font-bold text-gray-900 text-xl">
                   Owner :
                  </td>
                  <td className="font-medium text-xl text-gray-700 py-3 px-4">
                    {drone.owner}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 font-bold text-gray-900 text-xl">
                   Location :
                  </td>
                  <td className="font-medium text-xl text-gray-700 py-3 px-4">
                    {drone.location}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 font-bold text-gray-900 text-xl">
                    Phone :
                  </td>
                  <td className="font-medium text-xl text-gray-700 py-3 px-4">
                    {drone.phone}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 font-bold text-gray-900 text-xl">
                    Purchase Date :
                  </td>
                  <td className="font-medium text-xl text-gray-700 py-3 px-4">
                    {drone.purchaseDate}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 font-bold text-gray-900 text-xl">
                    Drone Serial Number :
                  </td>
                  <td className="font-medium text-xl text-gray-700 py-3 px-4">
                    {drone.droneSerialNumber}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 font-bold text-gray-900 text-xl">
                    Vendor :
                  </td>
                  <td className="font-medium text-xl text-gray-700 py-3 px-4">
                    {drone.vendor}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 font-bold text-gray-900 text-xl">
                   Battery Warranty :
                  </td>
                  <td className="font-medium text-xl text-gray-700 py-3 px-4">
                    {drone.batteryWarranty}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 font-bold text-gray-900 text-xl">
                    Maintenance Schedule :
                  </td>
                  <td className="font-medium text-xl text-gray-700 py-3 px-4">
                    {drone.maintenanceSchedule}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          
        </div>
      </motion.div>
    </div>
  );
};

export default DroneDetails;
