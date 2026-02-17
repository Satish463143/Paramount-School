const loginCheck = require("../../middleware/auth.middleware");
const hasPermission = require("../../middleware/rbac.config");
const bodyValidator = require("../../middleware/validator.middleware");
const galleryCategoryController = require("./galleryCategory.controller");
const galleryCategoryDTO = require("./galleryCategory.request");
const { setPath, uplaodFile, persistAllToS3 } = require('../../middleware/aws.middlware')
const { FileFilterType } = require('../../config/constant.config')

const router = require("express").Router();

router.route('/')
    .post(loginCheck,hasPermission("admin"), setPath("galleryCategory"),uplaodFile(FileFilterType.IMAGE).fields([
        {name:"image", maxCount:1}
    ]),persistAllToS3, bodyValidator(galleryCategoryDTO), galleryCategoryController.create)
    .get( galleryCategoryController.index)

router.route('/:id')
    .delete(loginCheck,hasPermission("admin"), galleryCategoryController.delete)

module.exports = router