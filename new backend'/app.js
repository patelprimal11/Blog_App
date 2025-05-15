const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const blogRoutes = require("./routes/blogRoutes");



dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
// app.use("/api/", require("./routes/authRoutes"));
// app.use("/api/blogs", require("./routes/blogRoutes"));
const authRoutes = require("./routes/authRoutes");
app.use("/api", authRoutes);
app.use("/api/blogs", blogRoutes);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("✅ MongoDB connected");
  app.listen(process.env.PORT, () =>
    console.log(`🚀 Server running on port ${process.env.PORT}`)
  );
}).catch(err => {
  console.error("❌ MongoDB connection error:", err);
});








// Middleware


// Use routes
 // ✅ This ensures POST /api/blogs/ works

// Other routes like auth
