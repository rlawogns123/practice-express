import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import userRouter from "./routes/User.js";
import User from "./models/User.js";

dotenv.config();

const server = express();
const port = 8000;

server.use(express.json());

server.use("/api/user", userRouter);

server.listen(port, (err) => {
  if (err) {
    console.log("Err", err);
  } else {
    mongoose
      .connect(process.env.MONGODB_URL)
      .then(() => {
        console.log("Connection Successful");
      })
      .catch((err) => {
        console.log("Err", err);
      });
  }
});

server.get("/", (req, res) => {
  const newUser = new User();
  newUser.email = "park@gmail.com";
  newUser.name = "park";
  newUser.age = "25";
  newUser
    .save()
    .then((user) => {
      console.log(user);
      res.json({
        message: "User Created Successfully",
      });
    })
    .catch((err) => {
      res.json({
        message: "User was not successfully created",
      });
    });
});
