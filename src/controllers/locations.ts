import { Handler, RequestHandler } from 'express';
import ErrorHander from 'src/utils/errorHandler';
import catchAsyncErrors from 'src/middleware/catchAsyncErrors';

const getLocation: RequestHandler<{}, string, string> = async (
  req,
  res,
  next
) => {};
