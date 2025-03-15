import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DroneList = () => {
  const [drones, setDrones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchDrones = async () => {
      try {
        const response = await fetch("https://shakti-a.in/api/drones");
        const data = await response.json();

        if (data.success) {
          setDrones(data.drones);
        } else {
          throw new Error(data.message);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDrones();
  }, []);

  const statusColors = {
    Active: "text-green-700 ",
    Flying : "text-blue-400" ,
    Inactive: "text-gray-700",
    Repair: "text-yellow-700",
    Crashed: "text-red-700",
  };

  if (loading) return <p className="text-7xl pt-20 text-gray-500">Loading drones...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="w-[90vw] bg-transparent">
      <div className="overflow-x-auto rounded-2xl">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#5e6466] text-white font-bold text-xl border-b border-gray-300">
              <th className="px-4 py-2">UIN</th>
              <th className="px-4 py-2">Pilot Name</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Owner</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {drones.map((drone, index) => (
              <tr
              key={drone._id} // Use MongoDB ObjectId as key
              className={`cursor-pointer text-center text-md font-light text-[#5e6466]  border-gray-400  hover:bg-[#5e6466]/20 
                ${
                       index % 2 === 0 ? "bg-white" : "bg-slate-300"
                    } `}
              onClick={() => navigate(`/drone/${drone._id}`)} // Navigate to details page
            >
              <td className="px-4 py-2">{drone.uin}</td>
              <td className="px-4 py-2">{drone.pilotName}</td>
              <td className="px-4 py-2">{drone.location}</td>
              <td className="px-4 py-2">{drone.owner}</td>
              <td className="px-4 py-2">{drone.phone}</td>
              <td className={`px-4 py-2 text-xl font-bold ${statusColors[drone.droneStatus]}`}>
                {drone.droneStatus}
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DroneList;
