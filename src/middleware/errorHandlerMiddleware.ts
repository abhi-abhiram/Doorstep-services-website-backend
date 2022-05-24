import ErrorHander from 'src/utils/errorHandler';
import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (error: ErrorHander, req, res) => {
  const newError = error;
  newError.statusCode = error.statusCode || 500;
  newError.message = error.message || 'Internal Server Error';
  res.status(error.statusCode).send(newError.message);
};

export default errorHandler;
