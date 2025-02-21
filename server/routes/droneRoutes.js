import express from "express";
import { createDrone, getAllDrones, getDroneById, updateDrone, deleteDrone } from "../controllers/droneController.js";

const router = express.Router();

router.post("/drones", createDrone); // Create a drone
router.get("/drones", getAllDrones); // Get all drones (only relevant details)
router.get("/drones/:id", getDroneById); // Get a single drone (full details)
router.put("/drones/:id", updateDrone); // Update drone details
router.delete("/drones/:id", deleteDrone); // Delete a drone

export default router;
    