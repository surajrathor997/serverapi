const TeacherModel = require('../model/teacher')
class teachercontroller{
    static display = async(req,res)=>{
        try{
            res.send("hello sir")

        }
        catch(error){
            console.log(error)

        };
        
    }
    static create = async (req,res)=>{
        try{
            console.log(req.body)
            const {name,email,city} = req.body
            const data = await TeacherModel.create({
                name,
                email,
                city
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
            const data = await TeacherModel.findById(id)
            res.json(data)

        }
        catch(error){
            console.log(error)
        }
    }

     static update = async (req,res)=>{
        try{
            const id  = req.params.id
            const {name,email,city} = req.body
            const data = await TeacherModel.findByIdAndUpdate(id,{
               name,
                email,
                city

                 
            })
            res.json({
                msg:"update contact success"
            })

        }
        catch(error){
            console.log(error)

        }
    }



}

module.exports = teachercontroller