// Import mongoose to interact with MongoDB
import mongoose from "mongoose";

// Define the schema for the 'User' model
const userSchema = new mongoose.Schema({
    // The 'username' field will store the user's name as a string.
    username: {
        type: String,          // Data type is a string
        required: true         // This field is mandatory
    },
    // The 'password' field will store the user's password as a string.
    password: {
        type: String,          // Data type is a string
        required: true,        // This field is mandatory
        unique: true           // This field must be unique, no two users can have the same password
    },
    // The 'orgCode' field will store the user's organization code as a string.
    orgCode: {
        type: String,          // Data type is a string
        required: true,        // This field is mandatory
        unique: true           // This field must be unique, no two users can have the same orgCode
    }
});

// Create and export a 'User' model based on the schema defined above
export const User = mongoose.model('User', userSchema);
