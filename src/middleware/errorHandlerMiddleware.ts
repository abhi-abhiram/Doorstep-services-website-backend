import ErrorHander from 'src/utils/errorHandler';
import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (
  error: ErrorHander,
  req,
  res,
  next
) => {
  const newError = error;
  newError.statusCode = error.statusCode || 500;
  newError.message = error.message || 'Internal Server Error';
  res
    .status(error.statusCode)
    .json({ success: false, error: newError.message });
  return next();
};

export default errorHandler;
