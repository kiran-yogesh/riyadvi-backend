const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true, index: true },
  category: { type: String, required: true, index: true },
  tags: [String],
  author: {
    name: { type: String, default: 'Riyadvi Tech Team' },
    role: { type: String, default: 'Solutions Architect' },
    avatar: { type: String }
  },
  excerpt: { type: String, required: true },
  contentMarkdown: { type: String, required: true },
  coverImage: { type: String, required: true },
  readTimeMinutes: { type: Number, default: 5 },
  isFeatured: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);
