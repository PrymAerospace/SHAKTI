// import express from "express";
// import { receiveSensorData, getLatestSensorData, generateDummySensorData } from "../controllers/sensorController.js";

// const router = express.Router();

// router.post("/", receiveSensorData); // Store new sensor data
// router.get("/:droneId", getLatestSensorData); // Get latest data for a specific drone
// router.post("/generate-dummy/:droneId", generateDummySensorData); // Manually generate dummy data

// export default router;

import express from "express";
import { receiveSensorData , getLatestSensorData } from "../controllers/sensorController.js";
// import { receiveSensorData, getLatestSensorData } from "../controllers/SensorController.js";

const router = express.Router();

router.post("/", receiveSensorData);
router.get("/", getLatestSensorData);

export default router;
