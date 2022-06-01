import { NextFunction, Response, Request } from 'express';
import { Professional, User } from '../entity';
import catchAsyncErrors from '../middleware/catchAsyncErrors';
import ErrorHander from '../utils/errorHandler';
import { Roles } from '../utils/getClient';
import { loginClient } from './allController';

export const getUsers = catchAsyncErrors(
  async (req: Request, res: Response) => {
    const users = await User.find({});
    return res.json({ success: true, users });
  }
);

export const getProfessionals = catchAsyncErrors(
  async (req: Request, res: Response) => {
    const professionals = await Professional.find({});
    return res.json({ success: true, professionals });
  }
);

export const getUser = catchAsyncErrors(
  async (
    req: Request<{ userId: number }>,
    res: Response,
    next: NextFunction
  ) => {
    const { userId } = req.params;
    const user = await User.findOneBy({ id: userId });

    if (user) {
      res.json({
        success: true,
        user,
      });
    } else {
      return next(new ErrorHander('User not found', 400));
    }
  }
);

export const getProfessional = catchAsyncErrors(
  async (
    req: Request<{ professionalId: number }>,
    res: Response,
    next: NextFunction
  ) => {
    const { professionalId } = req.params;
    const professional = await Professional.findOneBy({ id: professionalId });
    if (professional) {
      res.json({
        success: true,
        professional,
      });
    } else {
      return next(new ErrorHander('professional not found', 400));
    }
  }
);

export const loginAdmin = catchAsyncErrors(loginClient(Roles.ADMIN));
