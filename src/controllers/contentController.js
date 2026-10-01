const Service = require('../models/Service');
const Portfolio = require('../models/Portfolio');
const BlogPost = require('../models/BlogPost');
const Job = require('../models/Job');
const { servicesData, portfolioData, blogData, jobsData } = require('../data/seedData');
const { successResponse, errorResponse } = require('../utils/apiResponse');

// Services GET
const getServices = async (req, res, next) => {
  try {
    let query = {};
    if (req.query.featured === 'true') query.featured = true;

    let docs = [];
    try {
      docs = await Service.find(query).sort({ order: 1 });
    } catch (err) {
      docs = servicesData;
    }

    if (!docs || docs.length === 0) docs = servicesData;
    return res.status(200).json({ success: true, count: docs.length, data: docs });
  } catch (error) {
    next(error);
  }
};

const getServiceBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    let doc;
    try {
      doc = await Service.findOne({ slug });
    } catch (err) {
      doc = servicesData.find(s => s.slug === slug);
    }
    if (!doc) doc = servicesData.find(s => s.slug === slug);

    if (!doc) {
      return errorResponse(res, 404, `Service '${slug}' not found`);
    }
    return res.status(200).json({ success: true, data: doc });
  } catch (error) {
    next(error);
  }
};

// Services CMS Admin Handlers
const createService = async (req, res, next) => {
  try {
    let doc;
    try {
      doc = await Service.create(req.body);
    } catch (err) {
      doc = { _id: 'mem_srv_' + Date.now(), ...req.body };
      servicesData.push(doc);
    }
    return successResponse(res, 201, 'Service created successfully', doc);
  } catch (error) {
    next(error);
  }
};

const updateService = async (req, res, next) => {
  try {
    const { id } = req.params;
    let doc;
    try {
      doc = await Service.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    } catch (err) {
      const idx = servicesData.findIndex(s => s._id === id || s.slug === id);
      if (idx !== -1) {
        servicesData[idx] = { ...servicesData[idx], ...req.body };
        doc = servicesData[idx];
      }
    }
    if (!doc) return errorResponse(res, 404, 'Service not found');
    return successResponse(res, 200, 'Service updated successfully', doc);
  } catch (error) {
    next(error);
  }
};

const deleteService = async (req, res, next) => {
  try {
    const { id } = req.params;
    try {
      await Service.findByIdAndDelete(id);
    } catch (err) {
      const idx = servicesData.findIndex(s => s._id === id || s.slug === id);
      if (idx !== -1) servicesData.splice(idx, 1);
    }
    return successResponse(res, 200, 'Service deleted successfully');
  } catch (error) {
    next(error);
  }
};

// Portfolio GET
const getPortfolio = async (req, res, next) => {
  try {
    const { industry, service, technology, featured } = req.query;
    let filter = {};

    if (industry) filter.industry = industry;
    if (featured === 'true') filter.featured = true;

    let docs = [];
    try {
      docs = await Portfolio.find(filter).sort({ order: 1 });
    } catch (err) {
      docs = portfolioData;
    }

    if (!docs || docs.length === 0) docs = portfolioData;
    if (industry && industry !== 'All') {
      docs = docs.filter(item => item.industry === industry);
    }

    return res.status(200).json({ success: true, count: docs.length, data: docs });
  } catch (error) {
    next(error);
  }
};

const getPortfolioBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    let doc;
    try {
      doc = await Portfolio.findOne({ slug });
    } catch (err) {
      doc = portfolioData.find(p => p.slug === slug);
    }
    if (!doc) doc = portfolioData.find(p => p.slug === slug);

    if (!doc) {
      return errorResponse(res, 404, `Case study '${slug}' not found`);
    }
    return res.status(200).json({ success: true, data: doc });
  } catch (error) {
    next(error);
  }
};

// Portfolio CMS Admin Handlers
const createPortfolio = async (req, res, next) => {
  try {
    let doc;
    try {
      doc = await Portfolio.create(req.body);
    } catch (err) {
      doc = { _id: 'mem_pf_' + Date.now(), ...req.body };
      portfolioData.push(doc);
    }
    return successResponse(res, 201, 'Portfolio item created', doc);
  } catch (error) {
    next(error);
  }
};

const updatePortfolio = async (req, res, next) => {
  try {
    const { id } = req.params;
    let doc;
    try {
      doc = await Portfolio.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    } catch (err) {
      const idx = portfolioData.findIndex(p => p._id === id || p.slug === id);
      if (idx !== -1) {
        portfolioData[idx] = { ...portfolioData[idx], ...req.body };
        doc = portfolioData[idx];
      }
    }
    if (!doc) return errorResponse(res, 404, 'Portfolio item not found');
    return successResponse(res, 200, 'Portfolio item updated', doc);
  } catch (error) {
    next(error);
  }
};

const deletePortfolio = async (req, res, next) => {
  try {
    const { id } = req.params;
    try {
      await Portfolio.findByIdAndDelete(id);
    } catch (err) {
      const idx = portfolioData.findIndex(p => p._id === id || p.slug === id);
      if (idx !== -1) portfolioData.splice(idx, 1);
    }
    return successResponse(res, 200, 'Portfolio item deleted');
  } catch (error) {
    next(error);
  }
};

// Blog Posts GET
const getBlogPosts = async (req, res, next) => {
  try {
    const { search, category, tag, page = 1, limit = 10 } = req.query;
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;

    let query = { published: true };

    if (category && category !== 'All') {
      query.category = category;
    }

    if (search) {
      const searchRegex = new RegExp(search, 'i');
      query.$or = [
        { title: searchRegex },
        { excerpt: searchRegex },
        { content: searchRegex },
        { tags: searchRegex },
        { category: searchRegex }
      ];
    }

    let docs = [];
    let total = 0;

    try {
      total = await BlogPost.countDocuments(query);
      docs = await BlogPost.find(query).sort({ publishedAt: -1 }).skip(skip).limit(limitNum);
    } catch (err) {
      let filtered = blogData;
      if (category && category !== 'All') filtered = filtered.filter(b => b.category === category);
      if (search) {
        const s = search.toLowerCase();
        filtered = filtered.filter(b => b.title.toLowerCase().includes(s) || b.excerpt.toLowerCase().includes(s));
      }
      total = filtered.length;
      docs = filtered.slice(skip, skip + limitNum);
    }

    if (!docs || docs.length === 0) {
      let filtered = blogData;
      if (category && category !== 'All') filtered = filtered.filter(b => b.category === category);
      if (search) {
        const s = search.toLowerCase();
        filtered = filtered.filter(b => b.title.toLowerCase().includes(s) || b.excerpt.toLowerCase().includes(s));
      }
      docs = filtered;
      total = filtered.length;
    }

    return res.status(200).json({
      success: true,
      count: docs.length,
      data: docs,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        totalPages: Math.ceil(total / limitNum) || 1
      }
    });
  } catch (error) {
    next(error);
  }
};

const getBlogBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    let doc;
    try {
      doc = await BlogPost.findOne({ slug });
    } catch (err) {
      doc = blogData.find(b => b.slug === slug);
    }
    if (!doc) doc = blogData.find(b => b.slug === slug);

    if (!doc) {
      return errorResponse(res, 404, `Blog post '${slug}' not found`);
    }
    return res.status(200).json({ success: true, data: doc });
  } catch (error) {
    next(error);
  }
};

// Blog CMS Admin Handlers
const createBlogPost = async (req, res, next) => {
  try {
    let doc;
    try {
      doc = await BlogPost.create({ ...req.body, publishedAt: new Date() });
    } catch (err) {
      doc = { _id: 'mem_blog_' + Date.now(), ...req.body, publishedAt: new Date() };
      blogData.unshift(doc);
    }
    return successResponse(res, 201, 'Blog post published', doc);
  } catch (error) {
    next(error);
  }
};

const updateBlogPost = async (req, res, next) => {
  try {
    const { id } = req.params;
    let doc;
    try {
      doc = await BlogPost.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    } catch (err) {
      const idx = blogData.findIndex(b => b._id === id || b.slug === id);
      if (idx !== -1) {
        blogData[idx] = { ...blogData[idx], ...req.body };
        doc = blogData[idx];
      }
    }
    if (!doc) return errorResponse(res, 404, 'Blog post not found');
    return successResponse(res, 200, 'Blog post updated', doc);
  } catch (error) {
    next(error);
  }
};

const deleteBlogPost = async (req, res, next) => {
  try {
    const { id } = req.params;
    try {
      await BlogPost.findByIdAndDelete(id);
    } catch (err) {
      const idx = blogData.findIndex(b => b._id === id || b.slug === id);
      if (idx !== -1) blogData.splice(idx, 1);
    }
    return successResponse(res, 200, 'Blog post deleted');
  } catch (error) {
    next(error);
  }
};

// Jobs GET
const getJobs = async (req, res, next) => {
  try {
    const { department, experience, designation } = req.query;
    let query = { status: 'active' };

    if (department && department !== 'All') query.department = department;
    if (experience) query.experience = experience;
    if (designation) query.designation = designation;

    let docs = [];
    try {
      docs = await Job.find(query).sort({ createdAt: -1 });
    } catch (err) {
      docs = jobsData;
    }

    if (!docs || docs.length === 0) docs = jobsData;
    if (department && department !== 'All') {
      docs = docs.filter(j => j.department === department);
    }

    return res.status(200).json({ success: true, count: docs.length, data: docs });
  } catch (error) {
    next(error);
  }
};

const getJobBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    let doc;
    try {
      doc = await Job.findOne({ slug });
    } catch (err) {
      doc = jobsData.find(j => j.slug === slug);
    }
    if (!doc) doc = jobsData.find(j => j.slug === slug);

    if (!doc) {
      return errorResponse(res, 404, `Job opening '${slug}' not found`);
    }
    return res.status(200).json({ success: true, data: doc });
  } catch (error) {
    next(error);
  }
};

// Jobs CMS Admin Handlers
const createJob = async (req, res, next) => {
  try {
    let doc;
    try {
      doc = await Job.create(req.body);
    } catch (err) {
      doc = { _id: 'mem_job_' + Date.now(), ...req.body };
      jobsData.unshift(doc);
    }
    return successResponse(res, 201, 'Job opening created', doc);
  } catch (error) {
    next(error);
  }
};

const updateJob = async (req, res, next) => {
  try {
    const { id } = req.params;
    let doc;
    try {
      doc = await Job.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    } catch (err) {
      const idx = jobsData.findIndex(j => j._id === id || j.slug === id);
      if (idx !== -1) {
        jobsData[idx] = { ...jobsData[idx], ...req.body };
        doc = jobsData[idx];
      }
    }
    if (!doc) return errorResponse(res, 404, 'Job opening not found');
    return successResponse(res, 200, 'Job opening updated', doc);
  } catch (error) {
    next(error);
  }
};

const deleteJob = async (req, res, next) => {
  try {
    const { id } = req.params;
    try {
      await Job.findByIdAndDelete(id);
    } catch (err) {
      const idx = jobsData.findIndex(j => j._id === id || j.slug === id);
      if (idx !== -1) jobsData.splice(idx, 1);
    }
    return successResponse(res, 200, 'Job opening deleted');
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getServices,
  getServiceBySlug,
  createService,
  updateService,
  deleteService,
  getPortfolio,
  getPortfolioBySlug,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
  getBlogPosts,
  getBlogBySlug,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
  getJobs,
  getJobBySlug,
  createJob,
  updateJob,
  deleteJob
};
