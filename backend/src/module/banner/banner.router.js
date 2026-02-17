const { FileFilterType } = require('../../config/constant.config')
const loginCheck = require('../../middleware/auth.middleware')
const { setPath, uplaodFile, persistAllToS3 } = require('../../middleware/aws.middlware')
const hasPermission = require('../../middleware/rbac.config')
const bodyValidator = require('../../middleware/validator.middleware')
const bannerController = require('./banner.controller')
const { bannerDTO } = require('./banner.request')

const router = require('express').Router()

router.route('/')
    .post(loginCheck, hasPermission("admin"),setPath("banner"),uplaodFile(FileFilterType.IMAGE).fields([
        {name:"image", maxCount:1}
    ]),persistAllToS3, bodyValidator(bannerDTO), bannerController.create )
    .get(loginCheck, hasPermission("admin"), bannerController.index)

// Specific routes must come before parameterized routes
router.get('/listForHome', bannerController.listForHome)

router.route('/:id')
    .get(loginCheck, hasPermission("admin"), bannerController.showById)
    .put(loginCheck, hasPermission("admin"), setPath("banner"), uplaodFile(FileFilterType.IMAGE).fields([
        {name:"image", maxCount:1}
    ]), persistAllToS3, bodyValidator(bannerDTO), bannerController.update)
    .delete(loginCheck, hasPermission("admin"), bannerController.delete)

module.exports = router
