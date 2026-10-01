const successResponse = (res, statusCode = 200, message = 'Success', data = null) => {
  return res.status(statusCode).json({
    success: true,
    message,
    ...(data && { data })
  });
};

const errorResponse = (res, statusCode = 400, message = 'Error', errors = null) => {
  return res.status(statusCode).json({
    success: false,
    message,
    ...(errors && { errors })
  });
};

module.exports = { successResponse, errorResponse };
