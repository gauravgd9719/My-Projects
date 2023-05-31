const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors"); //?
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

const app = express();
app.use(express.json());

app.use(cors());

// Routes
app.use("/api/v1/stores", require("./routes/stores"));

// Set static folder

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
