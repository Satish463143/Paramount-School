const GalleryCategory = require("./galleryCategory.model")

class GalleryCategoryService{
    createGalleryCategory = async (body) => {
        try {
            const galleryCategory = await GalleryCategory.create(body)
            return galleryCategory.save()

        } catch (error) {
            throw error
            
        }
    }
    getAllGalleryCategory = async (filter,skip,limit)=>{
        try {
            const query = GalleryCategory.find(filter)
                .sort({_id:-1})
                .skip(skip)
                .limit(limit)
                .lean()
            
            const [count, data] = await Promise.all([
                GalleryCategory.countDocuments(filter),
                query
            ])
            return {count,data}
            
        } catch (error) {
            throw error
            
        }
    }
    deleteGalleryCategory = async (id) => {
        try {
            const galleryCategory = await GalleryCategory.findByIdAndDelete(id)
            if(!galleryCategory){
                throw new Error("Gallery Category not found")
            }
            return galleryCategory
        } catch (error) {
            throw error
        }
    }
}
module.exports = new GalleryCategoryService()