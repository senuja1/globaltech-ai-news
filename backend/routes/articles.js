const router = require('express').Router();
const Article = require('../models/Article');
const auth = require('../middleware/auth');

// Get all articles
router.get('/', async (req, res) => {
    const articles = await Article.find().sort({ createdAt: -1 });
    res.json(articles);
});

// Create new article (admin only)
router.post('/', auth, async (req, res) => {
    const { title, content, summary } = req.body;
    const article = new Article({ title, content, summary });
    await article.save();
    res.status(201).json(article);
});

// Update article
router.put('/:id', auth, async (req, res) => {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(article);
});

// Delete article
router.delete('/:id', auth, async (req, res) => {
    await Article.findByIdAndDelete(req.params.id);
    res.json({ message: 'Article deleted' });
});

module.exports = router;
