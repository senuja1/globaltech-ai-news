const router = require('express').Router();
const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });

router.post('/', async (req, res) => {
    const { message } = req.body;
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [{ role: "user", content: message }]
        });
        res.json({ reply: response.choices[0].message.content });
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;
