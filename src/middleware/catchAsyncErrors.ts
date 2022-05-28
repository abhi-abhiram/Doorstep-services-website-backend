import { Response, NextFunction } from 'express';

type Controller<T> = (req: T, res: Response, next: NextFunction) => unknown;

export default <T>(theFunc: Controller<T>) =>
  async (req: T, res: Response, next: NextFunction) => {
    try {
      await theFunc(req, res, next);
    } catch (error) {
      next(error);
    }
  };
