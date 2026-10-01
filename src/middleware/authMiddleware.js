const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/env');
const { errorResponse } = require('../utils/apiResponse');

const requireAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return errorResponse(res, 401, 'Access denied. Authentication token required.');
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return errorResponse(res, 403, 'Invalid or expired authentication token.');
  }
};

const requireAdmin = (req, res, next) => {
  requireAuth(req, res, () => {
    if (req.user && (req.user.role === 'Admin' || req.user.role === 'SuperAdmin' || req.user.role === 'admin')) {
      next();
    } else {
      return errorResponse(res, 403, 'Access denied. Administrator privileges required.');
    }
  });
};

module.exports = { requireAuth, requireAdmin };
