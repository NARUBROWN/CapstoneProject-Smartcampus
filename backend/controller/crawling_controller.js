const express = require('express');
const router = express.Router();
const crawling = require('../controller/crawling_service');

router.get('/contents/:page', crawling.noticeContents)
router.get('/notice-list/:page', crawling.noticeList)

module.exports = router;