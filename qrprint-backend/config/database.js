const mongoose = require("mongoose");

exports.mongooseConnection = () => {
  mongoose.connect(process.env.mongoDB_URI).then((data) => {
    console.log(
      `SuccessFully Connected to the MongoDB ${data.connection.host}`
    );
  });
};
