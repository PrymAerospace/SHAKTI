import React, { useState } from "react";

const AddDrone = () => {
    const [drone, setDrone] = useState({
        uin: "", // Unique Drone ID
        droneName: "",
        location: "",
        pilotName: "",
        owner: "",
        phone: "",
        droneStatus: "Active",
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setDrone({ ...drone, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const response = await fetch("http://192.168.31.68:9000/api/drones", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(drone),
            });
            
            const data = await response.json();
            if (data.success) {
                setMessage("Drone added successfully!");
                setDrone({
                    uin: "",
                    droneName: "",
                    location: "",
                    pilotName: "",
                    owner: "",
                    phone: "",
                    droneStatus: "Active",
                });
            } else {
                setMessage("Error: " + data.message);
            }
        } catch (error) {
            setMessage("Failed to connect to the server");
        }
        
        setLoading(false);
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md w-96 mx-auto mt-10">
            <h2 className="text-xl font-semibold mb-4">Add a New Drone</h2>
            {message && <p className="text-center text-red-500">{message}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700">Unique ID (UIN)</label>
                    <input 
                        type="text" 
                        name="uin" 
                        value={drone.uin} 
                        onChange={handleChange} 
                        className="w-full p-2 border rounded-lg" 
                        required 
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Drone Name</label>
                    <input 
                        type="text" 
                        name="droneName" 
                        value={drone.droneName} 
                        onChange={handleChange} 
                        className="w-full p-2 border rounded-lg" 
                        required 
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Location</label>
                    <input 
                        type="text" 
                        name="location" 
                        value={drone.location} 
                        onChange={handleChange} 
                        className="w-full p-2 border rounded-lg" 
                        required 
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Pilot Name</label>
                    <input 
                        type="text" 
                        name="pilotName" 
                        value={drone.pilotName} 
                        onChange={handleChange} 
                        className="w-full p-2 border rounded-lg" 
                        required 
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Owner</label>
                    <input 
                        type="text" 
                        name="owner" 
                        value={drone.owner} 
                        onChange={handleChange} 
                        className="w-full p-2 border rounded-lg" 
                        required 
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Phone</label>
                    <input 
                        type="text" 
                        name="phone" 
                        value={drone.phone} 
                        onChange={handleChange} 
                        className="w-full p-2 border rounded-lg" 
                        required 
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Status</label>
                    <select 
                        name="droneStatus" 
                        value={drone.droneStatus} 
                        onChange={handleChange} 
                        className="w-full p-2 border rounded-lg"
                    >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        <option value="Repair">Repair</option>
                        <option value="Crashed">Crashed</option>
                    </select>
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                    disabled={loading}
                >
                    {loading ? "Adding..." : "Add Drone"}
                </button>
            </form>
        </div>
    );
};

export default AddDrone;
