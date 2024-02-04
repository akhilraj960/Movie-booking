const mongoose = require("mongoose");

const URL = "mongodb://localhost:27017/amigoz";

mongoose
  .connect(URL)
  .then(() => {
    console.log(`DB CONNECTED`);
  })
  .catch((error) => {
    console.log(error);
  });
