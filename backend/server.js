const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4004;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const userRoutes = require("./routes/userRoutes"); // adjust path if needed
const moodRoutes = require("./routes/moodRoutes"); // new mood routes
const journalRoutes = require("./routes/journalRoutes"); // new journal routes
const chatbotRoutes = require("./routes/chatbotRoutes"); // new chatbot routes
app.use("/api", userRoutes);
app.use("/api", moodRoutes);
app.use("/api", journalRoutes);
app.use("/api", chatbotRoutes);

// ✅ Connect to MongoDB only ONCE
mongoose
  .connect("mongodb://127.0.0.1:27017/your-db-name", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err);
  });

// const mongoose = require("mongoose");

// Remove duplicate connection block below as it is redundant
