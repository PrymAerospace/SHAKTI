import Drone from "../models/Drone.js";

// Create a new drone
export const createDrone = async (req, res) => {
  try {
    const drone = new Drone(req.body);
    await drone.save();
    res.status(201).json({ success: true, drone });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get all drones (only selected fields for all drones page)
export const getAllDrones = async (req, res) => {
  try {
    const drones = await Drone.find({}, "uin pilotName location phone owner droneStatus");
    res.status(200).json({ success: true, drones });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get a single drone (full details)
export const getDroneById = async (req, res) => {
  try {
    const drone = await Drone.findById(req.params.id);
    if (!drone) {
      return res.status(404).json({ success: false, message: "Drone not found" });
    }
    res.status(200).json({ success: true, drone });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update a drone
export const updateDrone = async (req, res) => {
  try {
    const updatedDrone = await Drone.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDrone) {
      return res.status(404).json({ success: false, message: "Drone not found" });
    }
    res.status(200).json({ success: true, drone: updatedDrone });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete a drone
export const deleteDrone = async (req, res) => {
  try {
    const deletedDrone = await Drone.findByIdAndDelete(req.params.id);
    if (!deletedDrone) {
      return res.status(404).json({ success: false, message: "Drone not found" });
    }
    res.status(200).json({ success: true, message: "Drone deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
