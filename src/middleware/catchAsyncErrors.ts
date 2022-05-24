import { RequestHandler } from 'express';

export default (theFunc: RequestHandler): RequestHandler =>
  (req, res, next) => {
    Promise.resolve(theFunc(req, res, next)).catch((err) => next(err));
  };
