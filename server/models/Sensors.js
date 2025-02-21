
import mongoose from "mongoose";

const sensorDataSchema = new mongoose.Schema({
  accelX: { type: Number, required: false },
  accelY: { type: Number, required: false },
  accelZ: { type: Number, required: false },
  roll: { type: Number, required: false },
  pitch: { type: Number, required: false },
  yaw: { type: Number, required: false },
  bmpTemp: { type: Number, required: false }, // Corrected field name
  pressure: { type: Number, required: false },
  RTC_Time: { type: String, required: false }, 
  Latitude: { type: Number, required: false },
  Longitude: { type: Number, required: false },
  Altitude: { type: Number, required: false }
}, { timestamps: true });

const SensorData = mongoose.model("SensorData", sensorDataSchema);
export { SensorData };






// import mongoose from "mongoose";

// const sensorDataSchema = new mongoose.Schema({
//   droneId: { type: mongoose.Schema.Types.ObjectId, ref: "Drone", required: true }, // Reference to Drone
//   accelX: { type: Number, required: false },
//   accelY: { type: Number, required: false },
//   accelZ: { type: Number, required: false },
//   roll: { type: Number, required: false },
//   pitch: { type: Number, required: false },
//   yaw: { type: Number, required: false },
//   bmpTemp: { type: Number, required: false }, 
//   pressure: { type: Number, required: false },
//   RTC_Time: { type: String, required: false }, 
//   Latitude: { type: Number, required: false },
//   Longitude: { type: Number, required: false },
//   Altitude: { type: Number, required: false }
// }, { timestamps: true });

// const SensorData = mongoose.model("SensorData", sensorDataSchema);
// export { SensorData };
