/**Packages */

const Mongoose = require("mongoose");
const config = require("config");
const { default: mongoose } = require("mongoose");

const mongodbInfo = config.get("db-connections.mongodb");

const connStr = `mongodb+srv://${mongodbInfo.user}:${mongodbInfo.password}@${mongodbInfo.host}/${mongodbInfo.dbname}?retryWrites=true&w=majority`;

module.exports = () => {
  mongoose.connect(connStr);

  mongoose.connection.on("connected", () => {
    console.log("Mongoose connected to " + connStr);
  });
  mongoose.connection.on("disconnected", (err) => {
    console.log("Mongoose connection error: " + err);
  });
  mongoose.connect.on("SIGINT", () => {
    mongoose.connection.close(() => {
      console.log("Mongoose server shutting down!");
    });
  });
};
