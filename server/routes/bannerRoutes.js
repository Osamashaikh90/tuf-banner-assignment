const express = require('express');
const { getBanner,createBanner } = require('../controllers/bannerControllers');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

router.get('/banner', getBanner);
router.post('/banner/create', authenticateToken, createBanner);


module.exports = router;
