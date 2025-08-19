const jwt = require('jsonwebtoken')
const UserModel = require('../model/user')



const checkAuth = async (req,res,next)=>{  // yaha 'next' callback hai 
const token = req.cookies.token;
console.log(token);
if(!token){
    return res.status(401).json({
        message:"Unauthorized user"
    })
}
try{
    const decoded = jwt.verify(token,'*&^*&*787*^kjhk')
    console.log(decoded)

    // fetch fulluser dB
    const user = await UserModel.findById(decoded.ID)
    if(!user) return res.status(401).json({message:"User Not found"});

    req.user = user; // full user now available including email
    console.log(req.user)
    next()


}catch(error){
    console.log(error,"kjhkjhkjkjhkjhkjk")
    
    res.status(401).json({message:"Invalid token"})
}

}

module.exports = checkAuth