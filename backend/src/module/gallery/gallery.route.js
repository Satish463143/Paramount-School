const loginCheck = require("../../middleware/auth.middleware");
const hasPermission = require("../../middleware/rbac.config");
const bodyValidator = require("../../middleware/validator.middleware");
const galleryController = require("./gallery.controller");
const { galleryDTO } = require("./gallery.request");
const { setPath, uplaodFile, persistAllToS3 } = require('../../middleware/aws.middlware')
const { FileFilterType } = require('../../config/constant.config')

const router = require("express").Router();

router.route('/')
    .post(loginCheck,hasPermission("admin"), setPath("gallery"),uplaodFile(FileFilterType.IMAGE).fields([
        {name:"image", maxCount:1}
    ]),persistAllToS3, bodyValidator(galleryDTO), galleryController.create)
    .get( galleryController.index)

router.route('/:id')
    .delete(loginCheck,hasPermission("admin"), galleryController.delete)

module.exports = router