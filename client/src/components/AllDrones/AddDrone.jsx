import { useState } from "react";
import axios from "axios";

const AddDrone = () => {
    const [drone, setDrone] = useState({
        uin: "",
        droneName: "",
        droneStatus: "Active",
        droneType: "",
        manufacture: "",
        application: "",
        coverageArea: "",
        controlRange: "",
        gpsPositioning: false,
        weatherResistance: "",
        maxTakeoffWeight: "",
        payloadCapacity: "",
        spraySystem: "",
        batteryCapacity: "",
        sprayWidth: "",
        numberOfNozzles: "",
        flightTimePerBattery: "",
        chargingTimePerBattery: "",
        owner: "",
        location: "",
        phone: "",
        purchaseDate: "",
        droneSerialNumber: "",
        vendor: "",
        batteryWarranty: "",
        maintenanceSchedule: "",
        pilotName: "",
        pilotCertificationNumber: "",
        trainingLevel: "",
        insuranceCoverage: "",
        image: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setDrone({
            ...drone,
            [name]: type === "number" ? Number(value) : type === "checkbox" ? checked : value
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setDrone({ ...drone, image: reader.result });
        };
        if (file) reader.readAsDataURL(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post("http://localhost:8000/api/drones", drone);
            alert("Drone added successfully!");
            setDrone({
                uin: "",
                droneName: "",
                droneStatus: "Active",
                droneType: "",
                manufacture: "",
                application: "",
                coverageArea: "",
                controlRange: "",
                gpsPositioning: false,
                weatherResistance: "",
                maxTakeoffWeight: "",
                payloadCapacity: "",
                spraySystem: "",
                batteryCapacity: "",
                sprayWidth: "",
                numberOfNozzles: "",
                flightTimePerBattery: "",
                chargingTimePerBattery: "",
                owner: "",
                location: "",
                phone: "",
                purchaseDate: "",
                droneSerialNumber: "",
                vendor: "",
                batteryWarranty: "",
                maintenanceSchedule: "",
                pilotName: "",
                pilotCertificationNumber: "",
                trainingLevel: "",
                insuranceCoverage: "",
                image: ""
            });
        } catch (error) {
            console.error("Error adding drone", error);
            alert("Failed to add drone.");
        }
        setLoading(false);
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-4">Add Drone</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {Object.keys(drone).map((key) => (
                    <div key={key} className="flex flex-col">
                        <label className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
                        {key === "gpsPositioning" ? (
                            <input type="checkbox" name={key} checked={drone[key]} onChange={handleChange} className="mt-1" />
                        ) : key === "image" ? (
                            <input type="file" accept="image/*" onChange={handleImageChange} className="mt-1" />
                        ) : (
                            <input
                                type={key.includes("Date") ? "date" : key.includes("phone") || key.includes("number") || key.includes("Weight") || key.includes("Capacity") ? "number" : "text"}
                                name={key}
                                value={drone[key]}
                                onChange={handleChange}
                                className="p-2 border rounded-lg"
                                required
                            />
                        )}
                    </div>
                ))}
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600" disabled={loading}>
                    {loading ? "Adding..." : "Add Drone"}
                </button>
            </form>
        </div>
    );
};

export default AddDrone;