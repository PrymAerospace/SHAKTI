import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { createServer } from "http"; // Import HTTP module for WebSocket support
import { Server } from "socket.io"; // Import socket.io
import connectDB from "./config/db.js"; 
import authRoutes from "./routes/authRoutes.js";
import droneRoutes from "./routes/droneRoutes.js";
import sensorRoutes from "./routes/sensorRoutes.js"; // Added sensor routes

dotenv.config(); // Load environment variables
connectDB(); // Connect to MongoDB

const app = express();
const server = createServer(app); // Create HTTP server
const io = new Server(server, {
    cors: {
        origin: "*", // Allow all origins for WebSocket connections
        methods: ["GET", "POST"]
    }
});

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors()); 

// Use Routes
app.use("/api/auth", authRoutes);
app.use("/api", droneRoutes);
app.use("/api/sensors", sensorRoutes); // Added sensor routes

// WebSocket Connection
io.on("connection", (socket) => {
    console.log("A client connected:", socket.id);

    socket.on("disconnect", () => {
        console.log("A client disconnected:", socket.id);
    });
});

// Default route
app.get("/", (req, res) => {
    res.send("Welcome to the API!");
});

// Server Port
const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });


server.listen(PORT, "192.168.31.68", () => {
    console.log(`Server running at http://192.168.31.68:${PORT}`);
});


// Export io for usage in controllers
export { io };




// import express from 'express';
// import dotenv from 'dotenv';
// import cookieParser from 'cookie-parser';
// import connectDB from './config/db.js';
// import cors from 'cors'
// import authRoutes from './routes/authRoutes.js';
// import droneRoutes from "./routes/droneRoutes.js";


// dotenv.config(); // Load environment variables
// connectDB(); // Connect to MongoDB



// const jwtSecret = process.env.JWT_SECRET;
// console.log("JWT Secret from .env:", jwtSecret);

// const app = express();
// // Middleware
// app.use(express.json());
// app.use(cookieParser());

// app.use(cors()); // Allow all origins


// // Use authentication routes
// app.use('/api/auth', authRoutes);
// app.use("/api", droneRoutes);

// // Default route
// app.get('/', (req, res) => {
//   res.send('Welcome to the API!');
// });


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
