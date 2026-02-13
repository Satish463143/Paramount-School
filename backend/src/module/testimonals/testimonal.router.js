const loginCheck = require("../../middleware/auth.middleware");
const hasPermission = require("../../middleware/rbac.config");
const bodyValidator = require("../../middleware/validator.middleware");
const teamController = require("./testimonal.controller");
const TeamDTO = require("./team.request");
const { setPath, uplaodFile, persistAllToS3 } = require('../../middleware/aws.middlware')
const { FileFilterType } = require('../../config/constant.config')

const router = require("express").Router();

router.route('/')
    .post(loginCheck,hasPermission("admin"), setPath("team"),uplaodFile(FileFilterType.IMAGE).fields([
        {name:"image", maxCount:1}
    ]),persistAllToS3, bodyValidator(TeamDTO), teamController.create)
    .get( teamController.index)

router.route('/:id')
    .get(loginCheck,hasPermission("admin"),teamController.showById)
    .put(loginCheck,hasPermission("admin"), setPath("team"),uplaodFile(FileFilterType.IMAGE).fields([
        {name:"image", maxCount:1}
    ]),persistAllToS3, bodyValidator(TeamDTO), teamController.update)
    .delete(loginCheck,hasPermission("admin"), teamController.deleteEvent)

module.exports = router