const router = require('express').Router();
const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });

router.post('/', async (req, res) => {
    const { content } = req.body;
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [{ role: "user", content: `Summarize this article in 3-4 sentences:\n\n${content}` }]
        });
        res.json({ summary: response.choices[0].message.content });
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;
