const loginCheck = require('../../middleware/auth.middleware')
const hasPermission = require('../../middleware/rbac.config')
const bodyValidator = require('../../middleware/validator.middleware')
const noticeController = require('./notice.controller')
const { noticeDTO } = require('./notice.request')

const router = require('express').Router()

router.route('/')
    .post(loginCheck, hasPermission("admin"), bodyValidator(noticeDTO), noticeController.create )
    .get(noticeController.index)


router.route('/:id')
    .get(loginCheck, hasPermission("admin"), noticeController.showById)
    .put(loginCheck, hasPermission("admin"), bodyValidator(noticeDTO), noticeController.update)
    .delete(loginCheck, hasPermission("admin"), noticeController.delete)



module.exports = router
