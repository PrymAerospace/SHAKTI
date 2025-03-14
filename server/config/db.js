// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     await mongoose.connect("mongodb://89.116.34.114:27017/shakti_db");
//     console.log("✅ MongoDB Connected!");
//   } catch (err) {
//     console.error("❌ Error connecting to MongoDB:", err);
//     process.exit(1);
//   }
// };

// export default connectDB;



import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
