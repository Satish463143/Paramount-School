const loginCheck = require("../../middleware/auth.middleware");
const hasPermission = require("../../middleware/rbac.config");
const bodyValidator = require("../../middleware/validator.middleware");
const galleryCategoryController = require("./galleryCategory.controller");
const galleryCategoryDTO = require("./galleryCategory.request");

const router = require("express").Router();

router.post('/',loginCheck,hasPermission("admin"),bodyValidator(galleryCategoryDTO), galleryCategoryController.createGalleryCategory)
router.get('/', galleryCategoryController.getAllGalleryCategory)
router.delete('/:id',loginCheck,hasPermission("admin"), galleryCategoryController.deleteGalleryCategory)

module.exports = router