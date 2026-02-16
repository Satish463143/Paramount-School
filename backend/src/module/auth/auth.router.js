const loginCheck = require('../../middleware/auth.middleware');
const bodyValidator = require('../../middleware/validator.middleware');
const authController = require('./auth.controller');
const {  loginRequest } = require('./auth.request');
const router = require('express').Router();


router.post('/login',bodyValidator(loginRequest),authController.login )

router.get('/logout',loginCheck, authController.logout)

router.get('/me', loginCheck, authController.getMe)


module.exports = router;
