const loginCheck = require("../../middleware/auth.middleware");
const hasPermission = require("../../middleware/rbac.config");
const bodyValidator = require("../../middleware/validator.middleware");
const teamController = require("./testimonal.controller");
const TestimonalDTO = require("./testimonal.request");
const { setPath, uplaodFile, persistAllToS3 } = require('../../middleware/aws.middlware')
const { FileFilterType } = require('../../config/constant.config')

const router = require("express").Router();

router.route('/')
    .post(loginCheck,hasPermission("admin"), setPath("team"),uplaodFile(FileFilterType.IMAGE).fields([
        {name:"avatar", maxCount:1}
    ]),persistAllToS3, bodyValidator(TestimonalDTO), teamController.create)
    .get( teamController.index)

router.route('/:id')
    .get(loginCheck,hasPermission("admin"),teamController.showById)
    .put(loginCheck,hasPermission("admin"), setPath("team"),uplaodFile(FileFilterType.IMAGE).fields([
        {name:"avatar", maxCount:1}
    ]),persistAllToS3, bodyValidator(TestimonalDTO), teamController.update)
    .delete(loginCheck,hasPermission("admin"), teamController.delete)

module.exports = router