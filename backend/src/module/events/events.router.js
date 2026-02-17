const loginCheck = require("../../middleware/auth.middleware");
const hasPermission = require("../../middleware/rbac.config");
const bodyValidator = require("../../middleware/validator.middleware");
const eventController = require("./events.controller");
const EventDTO = require("./events.request");
const { setPath, uplaodFile, persistAllToS3 } = require('../../middleware/aws.middlware')
const { FileFilterType } = require('../../config/constant.config')

const router = require("express").Router();

router.route('/')
    .post(loginCheck,hasPermission("admin"), setPath("events"),uplaodFile(FileFilterType.IMAGE).fields([
        {name:"image", maxCount:1}
    ]),persistAllToS3, bodyValidator(EventDTO), eventController.create)
    .get( eventController.index)

router.route('/:id')
    .get(loginCheck,hasPermission("admin"),eventController.showById)
    .put(loginCheck,hasPermission("admin"), setPath("events"),uplaodFile(FileFilterType.IMAGE).fields([
        {name:"image", maxCount:1}
    ]),persistAllToS3, bodyValidator(EventDTO), eventController.update)
    .delete(loginCheck,hasPermission("admin"), eventController.delete)

module.exports = router