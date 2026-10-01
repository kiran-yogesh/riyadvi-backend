const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true, index: true },
  client: { type: String, required: true },
  industry: { type: String, required: true, index: true },
  challenge: { type: String, required: true },
  solution: { type: String, required: true },
  technologies: [String],
  results: [{ metric: String, label: String }],
  visuals: [String],
  services: [String],
  featured: { type: Boolean, default: false, index: true },
  has3DExperience: { type: Boolean, default: true },
  order: { type: Number, default: 0 },
  coverImage: { type: String, required: true },
  model3DType: { type: String, default: 'cube' }
}, { timestamps: true });

portfolioSchema.index({ slug: 1, featured: 1, industry: 1 });

module.exports = mongoose.model('Portfolio', portfolioSchema, 'portfolio');
