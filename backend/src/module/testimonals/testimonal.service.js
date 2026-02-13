const TestimonalModel = require("./testimonal.model")

class TestimonalService {

    create = async(data)=>{
        try{
            const response = await TestimonalModel.create(data)
            return response.save()
            
        }catch(exception){
            throw exception
        }
    }
    listALL = async({filter={}, skip=0, limits=10})=>{
        try{
            const query = TestimonalModel.find(filter)
                .limit(limits)
                .skip(skip)
                .sort({createdAt:-1})
                .lean()
            
            const [count, data] = await Promise.all([
                TestimonalModel.countDocuments(filter),
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
            const response = await TestimonalModel.findOne({ _id: id }).lean()
            return response
        }catch(exception){
            console.log(exception)
            throw exception
        }
    }
    update = async(id, data)=>{
        try{
            const response = await TestimonalModel.findOneAndUpdate({ _id: id }, data, {new:true}).lean()
            return response
        }catch(exception){
            console.log(exception)
            throw exception
        }
    }
    delete = async(id)=>{
        try{
            const response = await TestimonalModel.findOneAndDelete({ _id: id }).lean()
            if(!response){
                throw {status:404, message:"Testimonal not found"}
            }
            return response
        }catch(exception){
            console.log(exception)
            throw exception
        }
    }
}
module.exports = new TestimonalService()