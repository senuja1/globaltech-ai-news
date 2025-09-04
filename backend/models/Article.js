const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  summary: { type: String },
  content: { type: String, required: true },
  author: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Article', ArticleSchema);
