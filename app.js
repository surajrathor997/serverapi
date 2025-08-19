const express = require('express')
const app = express()
const port = 3001;
const web = require("./routes/web")
const connectDB = require('./db/connectDB');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const cors = require('cors')

require("dotenv").config();


app.use(cors({
    origin: 'http://localhost:5173', // Frontend ka address
    credentials: true                // Cookies / Auth headers allow karega
}));

app.use(cookieParser())  // token get karne ke liye use kiya hai jo ki auth file mai verify function use kar raha hai 

// image upload
app.use(fileUpload({
    useTempFiles:true,
}));

// connect data base
connectDB()
app.use(express.json())


app.use('/api',web)
app.listen(process.env.PORT,console.log("server is running on port 3000"))