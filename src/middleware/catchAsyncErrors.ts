import { Response, NextFunction } from 'express';

type Controller<T> = (req: T, res: Response, next: NextFunction) => unknown;

export default <T>(theFunc: Controller<T>) =>
  (req: T, res: Response, next: NextFunction) => {
    Promise.resolve(theFunc(req, res, next)).catch((err) => next(err));
  };
