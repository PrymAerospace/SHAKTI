

// import { SensorData } from "../models/Sensors.js";
// import { io } from "../index.js";


// export const receiveSensorData = async (req, res) => {
//     try {
//         console.log("Received Sensor Data:", req.body);

//         if (!req.body || !req.body.droneUIN) {
//             return res.status(400).json({ message: "Drone UIN is required" });
//         }

//         const {
//             droneUIN, accelX, accelY, accelZ,
//             roll, pitch, yaw,
//             bmpTemp, pressure,
//             RTC_Time, Latitude, Longitude, Altitude,
//             battery
//         } = req.body;

//         console.log(`Drone UIN: ${droneUIN}, Lat: ${Latitude}, Lng: ${Longitude}, Battery: ${battery}%`);

//         const newData = new SensorData({
//             droneUIN, accelX, accelY, accelZ,
//             roll, pitch, yaw,
//             bmpTemp, pressure,
//             RTC_Time, Latitude, Longitude, Altitude,
//             battery
//         });

//         await newData.save();
//         io.emit("updateSensorData", newData);

//         res.status(201).json({ message: "Sensor data received and saved", data: newData });
//     } catch (error) {
//         console.error("Error receiving sensor data:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// };

// export const getLatestSensorDataByDrone = async (req, res) => {
//     try {
//         const { droneUIN } = req.params;
//         const latestData = await SensorData.find({ droneUIN })
//             .sort({ createdAt: -1 })
//             .limit(10); // लेटेस्ट 10 डेटा पॉइंट्स

//         if (!latestData.length) {
//             return res.status(404).json({ message: "No sensor data found for this drone" });
//         }

//         res.json(latestData);
//     } catch (error) {
//         console.error("Error fetching sensor data:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// };


import { SensorData } from "../models/Sensors.js";
import { io } from "../index.js";

export const receiveSensorData = async (req, res) => {
    try {
        console.log("Received Sensor Data:", req.body);

        if (!req.body) {
            return res.status(400).json({ message: "Request body is missing" });
        }

        const {
            accelX, accelY, accelZ,
            roll, pitch, yaw,
            bmpTemp, pressure,
            RTC_Time, Latitude, Longitude, Altitude,
            battery // Added battery status
        } = req.body;

        console.log(`Received Coordinates: Lat: ${Latitude}, Lng: ${Longitude}, Battery: ${battery}%`);

        const newData = new SensorData({
            accelX, accelY, accelZ,
            roll, pitch, yaw,
            bmpTemp, pressure,
            RTC_Time, Latitude, Longitude, Altitude,
            battery // Store battery status
        });

        await newData.save();
        io.emit("updateSensorData", newData);

        res.status(201).json({ message: "Sensor data received and saved", data: newData });
    } catch (error) {
        console.error("Error receiving sensor data:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getLatestSensorData = async (req, res) => {
    try {
        const latestData = await SensorData.find().sort({ createdAt: -1 }).limit(10);
        res.json(latestData);
    } catch (error) {
        console.error("Error fetching sensor data:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};