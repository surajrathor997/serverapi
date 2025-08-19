const  CourseModel = require('../model/course')

const cloudinary = require('cloudinary')

    // Configuration
    cloudinary.config({ 
        cloud_name: 'dtmzbf6aq', 
        api_key: '137427998913395', 
        api_secret: 'xVtncX4mlGONXtMDmRMYoY_UHFg' // Click 'View API Keys' above to copy your API secret
    });



class CourseController {

      static display = async(req,res)=>{
        try{
             const data = await CourseModel.find()
             res.json(data)

        }
        catch(error){
            console.log(error)

        };
        
    }
    static create = async (req,res)=>{
        try{
            console.log("hellow bhai")
            const {title,description,price,duration} = req.body
            const file = req.files.image
            // console.log(file)
            const imgeUpload = await cloudinary.uploader.upload(file.tempFilePath,{
                folder:"courseImage"
            })
            // console.log("image url aya hai",imgeUpload)
            const data = await CourseModel.create({
                title,
                description,
                price,
                duration,
                image:{
                    public_id:imgeUpload.public_id,
                    url:imgeUpload.secure_url
                }

            })
            res.json(data)

        }
        catch(error){
            console.log(error)
        }
    }

    static view = async (req,res)=>{
        try{
            const id = req.params.id
            const data = await CourseModel.findById(id)
            res.json(data)

        }
        catch(error){
            console.log(error)
        }
    }

    static update = async (req,res)=>{
        try{
            const id  = req.params.id
            const {title,description,price,duration} = req.body
            const data = await CourseModel.findByIdAndUpdate(id,{
                title,
                description,
                price,
                duration

                 
            })
            res.json({
                msg:"update contact success"
            })

        }
        catch(error){
            console.log(error)

        }
    }

    static delete = async (req,res)=>{
        try{
            const id  = req.params.id
            // const {name} = req.body
            const data = await CourseModel.findByIdAndDelete(id)
            res.json({
                msg:"delete contact success"
            })

        }
        catch(error){
            console.log(error)

        }
    }



}

module.exports = CourseController