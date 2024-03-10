const mongoose = require('mongoose');

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(`mongodb://localhost:27017/bhanderi`, {
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected 👌`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }

  module.exports = connectDB;