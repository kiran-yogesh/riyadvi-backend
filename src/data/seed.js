const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { MONGODB_URI, ADMIN_NAME, ADMIN_EMAIL, ADMIN_PASSWORD } = require('../config/env');

const Service = require('../models/Service');
const Portfolio = require('../models/Portfolio');
const BlogPost = require('../models/BlogPost');
const Job = require('../models/Job');
const Admin = require('../models/Admin');

const { servicesData, portfolioData, blogData, jobsData } = require('./seedData');

const seedDB = async () => {
  try {
    console.log(`[Seed Script] Connecting to MongoDB: ${MONGODB_URI}...`);
    await mongoose.connect(MONGODB_URI);
    console.log('[Seed Script] Connected to MongoDB.');

    // Clear existing content collections
    await Service.deleteMany({});
    await Portfolio.deleteMany({});
    await BlogPost.deleteMany({});
    await Job.deleteMany({});

    // Seed content collections
    await Service.insertMany(servicesData);
    await Portfolio.insertMany(portfolioData);
    await BlogPost.insertMany(blogData);
    await Job.insertMany(jobsData);
    console.log('[Seed Success] Seeded 6 Services, 10 Portfolios, Blog Posts, and Jobs.');

    // Admin Seeding without duplication
    const existingAdmin = await Admin.findOne({ email: ADMIN_EMAIL.toLowerCase() });
    if (!existingAdmin) {
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, salt);
      await Admin.create({
        name: ADMIN_NAME,
        email: ADMIN_EMAIL.toLowerCase(),
        passwordHash,
        role: 'SuperAdmin',
        active: true
      });
      console.log(`[Seed Admin Success] Created Admin User (${ADMIN_EMAIL}).`);
    } else {
      console.log(`[Seed Admin Info] Admin User (${ADMIN_EMAIL}) already exists.`);
    }

    console.log('[Seed Script Finished Successfully]');
    process.exit(0);
  } catch (err) {
    console.error('[Seed Script Error]', err);
    process.exit(1);
  }
};

seedDB();
