// index.js

// Step 1: Import Express
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors";
dotenv.config();
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
// Step 2: Initialize the app
const app = express();
app.use(cors());
app.use(express.json());


// Step 4: Listen on a port
const PORT = process.env.PORT || 5000;
const URI = process.env.MongoDBURI;

// connect to mongo
try{
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected to MongoDB");
}catch(error){
    console.log("Error:" , error)
}
app.use("/book" , bookRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
