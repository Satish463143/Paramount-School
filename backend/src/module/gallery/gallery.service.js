const Gallery = require("./gallery.model")

class GalleryService {

    create = async(data)=>{
        try{
            const response = await Gallery.create(data)
            return response.save()
            
        }catch(exception){
            throw exception
        }
    }
    listALL = async({filter={}, skip=0, limits=10})=>{
        try{
            const query = Gallery.find(filter)
                .limit(limits)
                .skip(skip)
                .sort({createdAt:-1})
                .lean()
            
            const [count, data] = await Promise.all([
                Gallery.countDocuments(filter),
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
            const response = await Gallery.findOne({ _id: id }).lean()
            return response
        }catch(exception){
            console.log(exception)
            throw exception
        }
    }
    delete = async(id)=>{
        try{
            const response = await Gallery.findOneAndDelete({ _id: id }).lean()
            if(!response){
                throw {status:404, message:"Gallery not found"}
            }
            return response
        }catch(exception){
            console.log(exception)
            throw exception
        }
    }
}
module.exports = new GalleryService()