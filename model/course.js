const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    title:String,
    description:String,
    price:Number,
    duration:String,

    // ye image cloudinary se upload kiya hai
    image:{
        public_id:{
            type:String,
            required:true
        },
         url:{
            type:String,
            required:true
         }
    }
    // image:string
    // cludinary_id:String

});
const CourseModel = mongoose.model('Course',courseSchema)
module.exports = CourseModel




 