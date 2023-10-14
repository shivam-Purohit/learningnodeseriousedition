const express = require('express');

const router = express.Router();
const {GenerateShortUrl, getAnalytics, showURL, redirectURL} = require('../controllers/url')

router.get('/', showURL)
router.get('/:shortID', redirectURL)
router.post('/', GenerateShortUrl)
router.get('/analytics/:shortID', getAnalytics)

module.exports = router;