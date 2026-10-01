const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true, index: true },
  shortDescription: { type: String },
  description: { type: String },
  heroContent: { tagline: String, sceneType: String },
  problem: { type: String },
  solution: { type: String },
  features: [{ title: String, description: String, icon: String }],
  useCases: [{ industry: String, description: String }],
  technologies: [String],
  process: [{ stepNumber: Number, title: String, description: String }],
  relatedPortfolio: [String],
  cta: { headline: String, buttonText: String },
  featured: { type: Boolean, default: true, index: true },
  order: { type: Number, default: 0 },
  sceneType: { type: String, default: 'browser' },
  iconName: { type: String, default: 'Globe' }
}, { timestamps: true });

serviceSchema.index({ slug: 1, featured: 1 });

module.exports = mongoose.model('Service', serviceSchema, 'services');
