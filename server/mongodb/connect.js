import mongoose from "mongoose";


const connectDB = (url) => {
    mongoose.set('strictQuery', true)

    mongoose.connect(url)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("MongoDb connection not established"));
}

export default connectDB;