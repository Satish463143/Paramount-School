const galleryCategoryService = require("./galleryCategory.service");

class GalleryCategoryController {
    createGalleryCategory = async (req, res,next) => {
        try {
            const body = req.body;
            const galleryCategory = await galleryCategoryService.createGalleryCategory(body)
            
            res.json({
                result:galleryCategory,
                message:"Gallery Category created successfully",
                meat:null
            })
            
        } catch (error) {
            next(error)            
        }
    }
    getAllGalleryCategory = async (req, res,next) => {
        try {
            const limit = req.query.limit || 10;
            const page = req.query.page || 1;
            const skip = (page - 1) * limit;

            const filter = {}
            if(req.query.search){
                filter.name = new RegExp(req.query.search,"i")
            }

            const {count , data } = await galleryCategoryService.getAllGalleryCategory({filter,skip,limit})
            
            res.json({
                result:data,
                message:"Gallery Category fetched successfully",
                meat:{
                    total:count,
                    page:page,
                    limit:limit
                }
            })
            
        } catch (error) {
            next(error)
            
        }
    }
    deleteGalleryCategory = async (req, res,next) => {
        try {
            const {id} = req.params;
            const galleryCategory = await galleryCategoryService.deleteGalleryCategory(id)
            
            res.json({
                result:galleryCategory,
                message:"Gallery Category deleted successfully",
                meat:null
            })
            
        } catch (error) {
            next(error)            
        }
    }
    
}
module.exports = new GalleryCategoryController();