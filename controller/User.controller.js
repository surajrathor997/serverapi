const UserModel = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
class userController {
    static register = async(req,res)=>{
        try{
            // console.log(req.body)
            const {name, email, password} = req.body
            // const existingUser = await UserModel.fu
            const existingUser = await UserModel.findOne({email})
            if(existingUser){
                return res.status(400).json({
                    msg:"email allready exit"
                })

            }
            // hass passworsd 
            const hashPassword = await bcrypt.hash(password,10)



            const data = await UserModel.create({
                name,
                email,
                password:hashPassword
            })
            res.json({
                data,
                message:"user register success"
            })

        }
        catch(error){
            console.log(error)
        }
    }

    static login = async (req,res)=>{
        try{
            // console.log(req.body)
            const {email,password} = req.body
            const user = await UserModel.findOne({email});

            if(!user){
                return res.status(400).json({
                    message:"Invalid credentials"
                });
            }

            const isMatch = await bcrypt.compare(password,user.password)
            if(!isMatch){
                return res.status(400).json({message:"invalid password"});
            }

            // create token
            const token = jwt.sign({ID:user._id},process.env.JWT_SECRET,{expiresIn:"2d"});
            // console.log(token)

            res.cookie("token",token,{
                httpOnly:true,
            });


            res
            .status(200)
            .json({
                message:"Login successfully"
            })

        }
        catch(error){
            console.log(error)
        }
    }

    static profile = async (req,res)=>{
        try{
            console.log("hello profile")

        }
        catch(error){
            console.log(error)
        }
    }


    static logout = async (req,res)=>{
        try{
             res.clearCookie("token")
             res.status(200).json({message:"logout successfully"})
        }
        catch(error){
            console.log(error)
        }
    }

    



// const changeCurrentPassword = asyncHandler(async (req,res) => {
//     const {oldPassword,newPassword} = req.body

//     const user = await User.findById(req.user?._id)
//     const isPasswordCorrect = await user.isPasswordCorrect(oldPassword)

//     if(!isPasswordCorrect){
//         throw new ApiError(400,"Invalid Old Password")
//     }

//     user.password = newPassword
//    await user.save({validateBeforeSave:false})

//    return res
//    .status(200)
//    .json(new ApiResponse(200,{},"Password change Successfully"))
// })









}

module.exports = userController