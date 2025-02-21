import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaMapMarkedAlt, FaMap } from "react-icons/fa";
import "leaflet/dist/leaflet.css";

const MapView = () => {
  const [position, setPosition] = useState(null); // No static coordinates
  const [useSatellite, setUseSatellite] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLatestSensorData = async () => {
      try {
        const response = await fetch("http://192.168.31.68:9000/api/sensors"); // Update with actual API URL
        const data = await response.json();

        if (data.length > 0) {
          const latest = data[0]; // Get the latest entry
          if (latest.Latitude && latest.Longitude) {
            setPosition({ lat: latest.Latitude, lng: latest.Longitude });
            setError(null); // Reset error if data is found
          } else {
            setPosition(null);
            setError("No valid location data found.");
          }
        } else {
          setPosition(null);
          setError("No location data available.");
        }
      } catch (error) {
        console.error("Error fetching sensor data:", error);
        setPosition(null);
        setError("Error fetching location data.");
      }
    };

    fetchLatestSensorData();
    const interval = setInterval(fetchLatestSensorData, 5000); // Refresh every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[100vh] w-[100vw]">
      {/* Floating Button to Toggle Map View */}
      <button
        onClick={() => setUseSatellite(!useSatellite)}
        className="absolute bottom-10 right-8 z-50 bg-[#1c4684] text-white p-3 rounded-full shadow-md transition"
      >
        {useSatellite ? <FaMap className="text-4xl" /> : <FaMapMarkedAlt className="text-4xl" />}
      </button>

      {position ? (
        <MapContainer center={[position.lat, position.lng]} zoom={16} className="h-[100vh] w-[100vw] z-0">
          <TileLayer
            url={
              useSatellite
                ? "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            }
          />
          <Marker position={[position.lat, position.lng]}>
            <Popup>Drone Live Location 📍</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <div className="flex items-center justify-center h-full text-gray-500 text-xl">
          {error || "No Location Found"}
        </div>
      )}
    </div>
  );
};

export default MapView;
