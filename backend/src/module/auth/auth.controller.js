const userModel = require("../user/user.model");
const userService = require("../user/user.service");
const authService = require("./auth.service");

class AuthController {

    async register(req,res,next){
        try {
            const data = req.body;

            const user = await authService.create(data);

            res.json({
                reuslt:user,
                message:'User registered successfully',
                meta:null
            })
            
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
    async login(req,res,next){
        try {
            const {email, password} = req.body
            const user = await userService.getSingleUserByFilter({email})

            if(!user){
                throw {status:422, message:"Crendtials do not match"}
            }
            const ok = bcrypt.compareSync(password, user.password || '')
            if(!ok){
                throw {status:422, message:"Crendtials do not match"}
            }

            const token = 

            res.json({
                reuslt:user,
                message:'User logged in successfully',
                meta:null
            })
            
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
    async logout(req,res,next){
        try {
            
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
    async refersh(req,res,next){
        try {
            
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
    async showById(req,res,next){
        try {
            
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    
}

module.exports = new AuthController();