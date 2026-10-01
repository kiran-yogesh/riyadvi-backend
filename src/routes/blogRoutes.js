const express = require('express');
const router = express.Router();
const { getBlogPosts, getBlogBySlug } = require('../controllers/contentController');

router.get('/', getBlogPosts);
router.get('/:slug', getBlogBySlug);

module.exports = router;
