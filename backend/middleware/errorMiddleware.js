/**
 * Error handling middleware for catching 404 routes
 */
export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

/**
 * Global error handler middleware
 */
export const errorHandler = (err, req, res, next) => {
  // Set status code (use error status code or 500 if not specified)
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  
  // Set response status
  res.status(statusCode);
  
  // Send error response
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
    status: 'error'
  });
}; 