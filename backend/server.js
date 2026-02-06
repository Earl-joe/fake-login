import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import auth from "./routes/auth.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ✅ Enable CORS so React frontend can call backend
app.use(cors({
  origin: "http://localhost:5173", // change if your frontend runs on a different port
  methods: ["GET", "POST"]
}));
app.use(cors({ origin: "http://localhost:5173" }));

// ✅ Middleware
app.use(express.json());

// ✅ Routes
app.use("/api/auth", auth);

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected successfully"))
  .catch(err => console.error("DB connection error:", err));

// ✅ Serve frontend build (if you have one)
const frontendPath = path.join(__dirname, "../dist");
app.use(express.static(frontendPath));

// ✅ Catch-all route for SPA
app.use((req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

