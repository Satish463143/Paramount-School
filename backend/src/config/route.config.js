const router = require("express").Router();

const authRouter = require('../module/auth/auth.router');
const contactRouter = require('../module/contact/contact.router');
const bannerRouter = require('../module/banner/banner.router');
const teamRouter = require('../module/team/team.router');
const eventsRouter = require('../module/events/events.router');
const noticeRouter = require('../module/notice/notice.router');
const testimonalRouter = require('../module/testimonals/testimonal.router');
const galleryCategoryRouter = require('../module/galleryCategory/galleryCategory.router');
const galleryRouter = require('../module/gallery/gallery.route');

router.use('/auth', authRouter);
router.use('/contact', contactRouter)
router.use('/banner', bannerRouter)
router.use('/team', teamRouter)
router.use('/events', eventsRouter)
router.use('/notice', noticeRouter)
router.use('/testimonal', testimonalRouter)
router.use('/galleryCategory', galleryCategoryRouter)
router.use('/gallery', galleryRouter)




module.exports = router;