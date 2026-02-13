const loginCheck = require("../../middleware/auth.middleware");
const hasPermission = require("../../middleware/rbac.config");
const bodyValidator = require("../../middleware/validator.middleware");
const contactController = require("./contact.controller");
const ContactDTO = require("./contact.request");

const router = require("express").Router();

router.post('/',bodyValidator(ContactDTO), contactController.createContact)
router.get('/',loginCheck,hasPermission("admin"), contactController.getAllContact)

module.exports = router