const { status } = require("../../config/constant.config")
const BannerModel = require("./banner.model")

class BannerService {

    create = async(data)=>{
        try{
            const response = await BannerModel.create(data)
            return response.save()
            
        }catch(exception){
            throw exception
        }
    }
    listALL = async({filter={}, skip=0, limits=10})=>{
        try{
            const query = BannerModel.find(filter)
                .limit(limits)
                .skip(skip)
                .sort({createdAt:-1})
                .lean()
            
            const [count, data] = await Promise.all([
                BannerModel.countDocuments(filter),
                query
            ])
            return {count, data}
        }catch(exception){
            console.log(exception)
            throw exception
        }
    }
    showById = async(id)=>{
        try{
            const response = await BannerModel.findOne({ _id: id }).lean()
            return response
        }catch(exception){
            console.log(exception)
            throw exception
        }
    }
    update = async(id, data)=>{
        try{
            const response = await BannerModel.findOneAndUpdate({ _id: id }, data, {new:true}).lean()
            return response
        }catch(exception){
            console.log(exception)
            throw exception
        }
    }
    delete = async(id)=>{
        try{
            const response = await BannerModel.findOneAndDelete({ _id: id }).lean()
            if(!response){
                throw {status:404, message:"Banner not found"}
            }
            return response
        }catch(exception){
            console.log(exception)
            throw exception
        }
    }
    listForHome = async()=>{
        try{
            const response = await BannerModel.find({status:status.ACTIVE}).lean()
            return response
        }catch(exception){
            console.log(exception)
            throw exception
        }
    }
}
module.exports = new BannerService()