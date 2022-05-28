import catchAsyncErrors from 'src/middleware/catchAsyncErrors';
import { NextFunction, Request, Response } from 'express';
import { Professional } from '../entity';
import ErrorHander from '../utils/errorHandler';
import sendToken from '../utils/jwtToken';
import { loginClient } from './allController';
import { Roles } from '../utils/getClient';

interface Register {
  name: string;
  email: string;
  password: string;
  phoneNo: string;
}

interface CustomRequest<Body> extends Request {
  body: Body;
}

export const registerProfessional = catchAsyncErrors(
  async (req: CustomRequest<Register>, res: Response, next: NextFunction) => {
    const { name, email, password, phoneNo } = req.body;

    const professional = Professional.create({
      name,
      email,
      password,
      phone_no: phoneNo,
    });

    try {
      const professionalInstance = await professional.save();
      return sendToken(
        professionalInstance,
        201,
        res,
        professionalInstance.getJWTToken(),
        Roles.PROFESSIONAL
      );
    } catch (error) {
      const message = (error as { detail: string }).detail;
      if (message) return next(new ErrorHander(message, 409));
    }
  }
);

export const loginProfessional = loginClient(Roles.PROFESSIONAL);
