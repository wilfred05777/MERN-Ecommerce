const mongoose = require("mongoose");
const env = require("./envConfig");

const connect = async () => {
  try {
    await mongoose.connect(env.URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Successfully connected to Database!");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connect;
