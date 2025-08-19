const mongoose = require("mongoose")

const teacherSchema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    city:{
        type:String
    }
})

const TeacherModel = mongoose.model('teacher',teacherSchema)
module.exports = TeacherModel