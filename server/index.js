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


server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
});


// Export io for usage in controllers
export { io };



