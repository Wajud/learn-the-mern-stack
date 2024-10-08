const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const goalRoutes = require("./routes/goalRoutes");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
// const port = process.env.PORT || 5000;
const port = 8000;

connectDB();

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

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
