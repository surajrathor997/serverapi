const mongoose = require('mongoose')

// const Live_url = "mongodb+srv://bookreview123:Suraj123@cluster1.ilco5g2.mongodb.net/bookreview?retryWrites=true&w=majority&appName=Cluster1"

const connectDB = async ()=>{
    return mongoose.connect(process.env.LIVE_URL)

    .then(()=>{
        console.log("Database connection successfully")
    })
    .catch((error)=>{
        console.log("error in connecting data base",error)
    })
}


module.exports = connectDB;