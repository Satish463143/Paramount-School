const bodyValidator = require('../../middleware/validator.middleware');
const authController = require('./auth.controller');
const { signupRequest, loginRequest } = require('./auth.request');
const router = require('express').Router();

router.post('/register',bodyValidator(signupRequest), authController.register )

router.post('/login',bodyValidator(loginRequest),authController.login )

// router.get('/me',)

// router.get('/logout',)

// router.get('/refresh',)


module.exports = router;
