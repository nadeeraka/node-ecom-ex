const mongoose = require("mongoose");
const drvie = require("../config/db/config");
const connect = () => {
  try {
    const cString = mongoose.connect(
      drvie.mongoURI,
      { useNewUrlParser: true }
    );
    console.log("connected !");
  } catch (error) {}
};

module.exports = connect;
