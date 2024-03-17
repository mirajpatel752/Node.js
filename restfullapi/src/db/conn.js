const mongoose = require('mongoose');

async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/students-api', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connection to MongoDB is successful");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

connectToDatabase();


