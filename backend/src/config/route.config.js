const router = require("express").Router();

const authRouter = require('../module/auth/auth.router');
const contactRouter = require('../module/contact/contact.router');
const bannerRouter = require('../module/banner/banner.router');

router.use('/auth', authRouter);
router.use('/contact', contactRouter)
router.use('/banner', bannerRouter)


module.exports = router;