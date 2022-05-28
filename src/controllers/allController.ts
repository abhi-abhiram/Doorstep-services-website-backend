import { BaseEntity } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import catchAsyncErrors from '../middleware/catchAsyncErrors';
import ErrorHander from '../utils/errorHandler';
import sendToken from '../utils/jwtToken';
import getClient, { Roles } from '../utils/getClient';

interface GetClientRequest extends Request {
  client?: BaseEntity;
  role?: Roles;
}

export const getClientDetails = catchAsyncErrors(
  (req: GetClientRequest, res: Response) => {
    if (req.client) {
      return res.json({ success: true, [req.role as string]: req.client });
    }
    throw new ErrorHander(`${req.role as string} doesn't exist`, 403);
  }
);

export const logout = catchAsyncErrors((req, res) => {
  res.cookie('token', null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  return res.status(200).json({
    success: true,
    message: 'Logged Out',
  });
});

interface ClientCredentials {
  email: string;
  password: string;
}

interface CustomRequest<Body> extends Request {
  body: Body;
}

export const loginClient = (role: Roles) =>
  catchAsyncErrors(
    async (
      req: CustomRequest<ClientCredentials>,
      res: Response,
      next: NextFunction
    ) => {
      const { email, password } = req.body;

      if (!email || !password) {
        return next(new ErrorHander('Please Enter Email & Password', 400));
      }

      const client = await getClient(role, { email });

      if (!client) {
        return next(new ErrorHander('Invalid email or password', 401));
      }

      const isPasswordMatched = await client?.comparePassword(password);

      if (!isPasswordMatched) {
        return next(new ErrorHander('Invalid email or password', 401));
      }

      if (client)
        return sendToken(client, 200, res, client?.getJWTToken(), role);
    }
  );
