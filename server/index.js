const express = require("express");
const loginRouter = require("./router/LoginRouter");
const signupRouter = require("./router/SignUpRouter");
const JobRouter = require("./router/Jobs");
const cors = require("cors");
const emailRouter = require("./router/EmailRouter");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const app = express();
app.use(cors());
// require("./connection/connection");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Let's start creating the server");
});

app.use("/admin/login", loginRouter);
app.use("/admin/signup", signupRouter);
app.use("/", JobRouter);
app.use("/", emailRouter);

const connectDB = async () => {
  try {
    // console.log(process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to DB");
  } catch (error) {
    console.log(`error occured connecting DB ${error.message}`);
  }
};

connectDB().then(() => {
  app.listen(5000, () => {
    console.log("Server connected at Port : 5000");
  });
});
