const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4004;

// =====================
// Middleware
// =====================
app.use(cors());
app.use(express.json());

// =====================
// Routes
// =====================
const userRoutes = require("./routes/userRoutes");
const moodRoutes = require("./routes/moodRoutes");
const journalRoutes = require("./routes/journalRoutes");
const chatbotRoutes = require("./routes/chatbotRoutes");

app.use("/api", userRoutes);
app.use("/api", moodRoutes);
app.use("/api", journalRoutes);
app.use("/api", chatbotRoutes);

// =====================
// MongoDB Connection
// =====================
console.log("👉 Mongo URI being used:", process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  });
