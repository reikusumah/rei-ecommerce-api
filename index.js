const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connection successfull!");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/api/test", () => {
  console.log("test is successfull");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend is running in host 5000.");
});
