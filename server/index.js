import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./route/userRoute.js";

const app = express();
dotenv.config(); // Load environment variables from .env file

app.use(bodyParser.json());
app.use(cors()); // Allow CORS for all origins, customize if needed

const PORT = process.env.PORT || 10000; // Use PORT from Render or default to 10000
const URL = process.env.MONGOURL; // MongoDB connection URL

// Connect to MongoDB
mongoose.connect(URL)
    .then(() => {
        console.log("DB connected successfully");

        // Start the server
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        });
    })
    .catch(error => console.log("Error connecting to DB:", error));

// Define API routes
app.use("/api", route);
