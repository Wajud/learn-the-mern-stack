const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const goalRoutes = require("./routes/goalRoutes");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const path = require("path");

// const port = process.env.PORT || 5000;
const port = 8000;
connectDB();
console.log("dirname here: ", __dirname);
const app = express();

// app.use(
//   cors({
//     origin: "*",
//   })
// );

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/goals", goalRoutes);
app.use("/api/users", userRoutes);

//use the frontend app
app.use(express.static(path.join(__dirname, "/frontend/build")));

//Render client for any path
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"))
);

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
