import catchAsyncErrors from 'src/middleware/catchAsyncErrors';
import { NextFunction, Request, Response } from 'express';
import { User } from '../entity';
import ErrorHander from '../utils/errorHandler';
import sendToken from '../utils/jwtToken';

interface Register {
  name: string;
  email: string;
  password: string;
  phoneNo: string;
}

interface CustomRequest<T> extends Request {
  body: T;
}

export default catchAsyncErrors(
  async (req: CustomRequest<Register>, res: Response, next: NextFunction) => {
    const { name, email, password, phoneNo } = req.body;

    const user = User.create({ name, email, password, phone_no: phoneNo });

    try {
      const userData = await user.save();

      sendToken(userData, 201, res, userData.getJWTToken());
    } catch (error) {
      const message = (error as { detail: string }).detail;
      if (message) next(new ErrorHander(message, 409));
    }
  }
);
