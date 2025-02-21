// import { SensorData } from "../models/Sensors.js";
// import { io } from "../index.js";

// /**
//  * @desc Generate and continuously log dummy sensor data for a specific drone
//  */
// const generateDummySensorData = (droneId) => {
//     setInterval(async () => {
//         try {
//             const dummyData = {
//                 droneId,
//                 accelX: (Math.random() * 10).toFixed(2),
//                 accelY: (Math.random() * 10).toFixed(2),
//                 accelZ: (Math.random() * 10).toFixed(2),
//                 roll: (Math.random() * 360 - 180).toFixed(2),
//                 pitch: (Math.random() * 360 - 180).toFixed(2),
//                 yaw: (Math.random() * 360 - 180).toFixed(2),
//                 bmpTemp: (Math.random() * 50 + 10).toFixed(2),
//                 pressure: (Math.random() * 20 + 980).toFixed(2),
//                 RTC_Time: new Date().toISOString(),
//                 Latitude: (Math.random() * 180 - 90).toFixed(6),
//                 Longitude: (Math.random() * 360 - 180).toFixed(6),
//                 Altitude: (Math.random() * 500).toFixed(2),
//             };

//             console.log("Generated Dummy Sensor Data:", dummyData);

//             // Emit data via WebSocket
//             io.emit("updateSensorData", dummyData);

//             // Store in database every second
//             const sensorData = new SensorData(dummyData);
//             await sensorData.save();
//         } catch (error) {
//             console.error("Error generating dummy sensor data:", error);
//         }
//     }, 1000); // Generates data every second
// };

// const receiveSensorData = async (req, res) => {
//     try {
//         console.log("Received Sensor Data:", req.body);

//         if (!req.body || !req.body.droneId) {
//             return res.status(400).json({ message: "Drone ID is required" });
//         }

//         const {
//             droneId, accelX, accelY, accelZ,
//             roll, pitch, yaw,
//             bmpTemp, pressure,
//             RTC_Time, Latitude, Longitude, Altitude
//         } = req.body;

//         const newData = new SensorData({
//             droneId, accelX, accelY, accelZ,
//             roll, pitch, yaw,
//             bmpTemp, pressure,
//             RTC_Time, Latitude, Longitude, Altitude
//         });

//         await newData.save();

//         // Emit real-time update
//         io.emit("updateSensorData", newData);

//         res.status(201).json({ message: "Sensor data received and saved", data: newData });
//     } catch (error) {
//         console.error("Error receiving sensor data:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// };

// /**
//  * @desc Fetch the latest sensor data for a specific drone
//  */
// const getLatestSensorData = async (req, res) => {
//     try {
//         const { droneId } = req.params;

//         if (!droneId) {
//             return res.status(400).json({ message: "Drone ID is required" });
//         }

//         let latestData = await SensorData.find({ droneId })
//             .sort({ createdAt: -1 })
//             .limit(10);

//         if (latestData.length === 0) {
//             console.log(`No data found for drone ${droneId}. Generating dummy data...`);
//             generateDummySensorData(droneId);
//             return res.status(200).json({ message: "Dummy data generation started" });
//         }

//         res.json(latestData);
//     } catch (error) {
//         console.error("Error fetching sensor data:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// };

// export { receiveSensorData, getLatestSensorData, generateDummySensorData };



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
            RTC_Time, Latitude, Longitude, Altitude
        } = req.body;

        console.log(`Received Coordinates: Lat: ${Latitude}, Lng: ${Longitude}`);
        const newData = new SensorData({
            accelX, accelY, accelZ,
            roll, pitch, yaw,
            bmpTemp, pressure,
            RTC_Time, Latitude, Longitude, Altitude
        });

        await newData.save();
        io.emit("updateSensorData", newData);

        res.status(201).json({ message: "Sensor data received and saved", data: newData });
    } catch (error) {
        console.error("Error receiving sensor data:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};


// Fetch the latest sensor data
export const getLatestSensorData = async (req, res) => {
    try {
        const latestData = await SensorData.find().sort({ createdAt: -1 }).limit(10);
        res.json(latestData);
    } catch (error) {
        console.error("Error fetching sensor data:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// export { receiveSensorData, getLatestSensorData };
