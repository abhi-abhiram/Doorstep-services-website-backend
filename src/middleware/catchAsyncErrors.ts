import { Request, Response, NextFunction } from 'express';

type Controller = (req: Request, res: Response, next: NextFunction) => unknown;

export default (theFunc: Controller) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(theFunc(req, res, next)).catch((err) => next(err));
  };
