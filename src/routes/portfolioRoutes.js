const express = require('express');
const router = express.Router();
const { getPortfolio, getPortfolioBySlug } = require('../controllers/contentController');

router.get('/', getPortfolio);
router.get('/:slug', getPortfolioBySlug);

module.exports = router;
