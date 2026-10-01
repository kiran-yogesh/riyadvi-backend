const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true, index: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  featuredImage: { type: String },
  coverImage: { type: String },
  category: { type: String, required: true, index: true },
  tags: [String],
  author: {
    name: { type: String, default: 'Riyadvi Tech Team' },
    role: { type: String, default: 'Solutions Architect' },
    avatar: { type: String }
  },
  featured: { type: Boolean, default: false },
  published: { type: Boolean, default: true, index: true },
  publishedAt: { type: Date, default: Date.now, index: true },
  readTimeMinutes: { type: Number, default: 5 },
  relatedArticles: [String]
}, { timestamps: true });

blogPostSchema.index({ title: 'text', excerpt: 'text', content: 'text' });
blogPostSchema.index({ slug: 1, category: 1, published: 1, publishedAt: -1 });

module.exports = mongoose.model('BlogPost', blogPostSchema, 'blogPosts');
