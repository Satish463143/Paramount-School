const authService = require("./auth.service");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("./user.model");
require("dotenv").config();

class AuthController {

    async login(req,res,next){
        try {
            const {email, password} = req.body
            const user = await authService.getSingleUserByFilter({email:email})

            if(!user){
                throw {status:422, message:"Crendtials do not match"}
            }
            if(bcrypt.compareSync(password, user.password || '')){
                const token = jwt.sign({
                    sub:user._id,
                }, process.env.JWT_SECRET, {
                    expiresIn:"1d"
                })
                const refreshToken = jwt.sign({
                    sub:user._id,
                }, process.env.JWT_SECRET, {
                    expiresIn:"7d"
                })

                await userModel.findByIdAndUpdate(user._id, {
                    refreshToken:refreshToken,
                    token:token
                })
                res.json({
                    result:{
                        userDetails:{
                            _id:user._id,
                            name:user.name,
                            email:user.email,
                            role:user.role,
                        },
                        token:{token, refreshToken}
                    },
                    message:"User logged in successfully",
                    meta:null
                })
            }
            else{
                throw {status:422, message:"Crendtials do not match"}
            }            
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
    async logout(req,res,next){
        try {
            const userId = req.authUser._id
            await userModel.findByIdAndUpdate(userId, {
                token:null,
                refreshToken:null
            })
            res.json({
                result:null,
                message:"User logged out successfully",
                meta:null
            })
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
    async getMe(req, res, next) {
        try {
            const userId = req.authUser._id;
            const user = await userModel.findById(userId);
            if (!user) {
                throw { status: 404, message: "User not found" };
            }
            res.json({
                result: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                },
                message: "User details fetched successfully",
                meta: null
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new AuthController();