
// import mongoose from "mongoose";
// const sensorDataSchema = new mongoose.Schema({
//   droneUIN: { type: String, required: true }, // ड्रोन की पहचान के लिए UIN जोड़ा
//   accelX: Number,
//   accelY: Number,
//   accelZ: Number,
//   roll: Number,
//   pitch: Number,
//   yaw: Number,
//   bmpTemp: Number,
//   pressure: Number,
//   RTC_Time: String,
//   Latitude: Number,
//   Longitude: Number,
//   Altitude: Number,
//   battery: Number
// }, { timestamps: true });

// const SensorData = mongoose.model("SensorData", sensorDataSchema);
// export { SensorData };


import mongoose from "mongoose";

const sensorDataSchema = new mongoose.Schema({
  accelX: { type: Number, required: false },
  accelY: { type: Number, required: false },
  accelZ: { type: Number, required: false },
  roll: { type: Number, required: false },
  pitch: { type: Number, required: false },
  yaw: { type: Number, required: false },
  bmpTemp: { type: Number, required: false },
  pressure: { type: Number, required: false },
  RTC_Time: { type: String, required: false },
  Latitude: { type: Number, required: false },
  Longitude: { type: Number, required: false },
  Altitude: { type: Number, required: false },
  battery: { type: Number, required: false } // Added battery status
}, { timestamps: true });

const SensorData = mongoose.model("SensorData", sensorDataSchema);
export { SensorData };
