import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import emailRoutes from "./routes/emailRoutes.js";

dotenv.config();

const app = express();

/* ---------- MIDDLEWARE ---------- */
app.use(
  cors({
    origin: process.env.FRONTEND_URL, // allow only your frontend
    methods: ["POST", "GET"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ---------- ROUTES ---------- */
app.use("/api/contact", emailRoutes);

/* ---------- HEALTH CHECK ---------- */
app.get("/", (req, res) => {
  res.status(200).json({ message: "Backend is running 🚀" });
});

/* ---------- START SERVER ---------- */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
