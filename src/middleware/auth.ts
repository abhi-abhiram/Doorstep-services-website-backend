import jwt from 'jsonwebtoken';
import { NextFunction, Request } from 'express';
import { BaseEntity } from 'typeorm';
import ErrorHander from '../utils/errorHandler';
import catchAsyncErrors from './catchAsyncErrors';
import { Admin, Professional, User } from '../entity';

export enum Roles {
  USER = 'user',
  PROFESSIONAL = 'professional',
  ADMIN = 'admin',
}

export interface AuthRequest extends Request {
  cookies: { token: string };
  client?: BaseEntity;
}

const SearchClientData = (role: Roles, id: number) => {
  switch (role) {
    case Roles.USER:
      return User.findOneBy({ id });
    case Roles.PROFESSIONAL:
      return Professional.findOneBy({ id });
    case Roles.ADMIN:
      return Admin.findOneBy({ id });
    default:
      throw new ErrorHander('Enter valid role', 400);
  }
};

const isAuthenticated = catchAsyncErrors(
  async (req: AuthRequest, res, next: NextFunction) => {
    const { token } = req.cookies;

    if (!token) {
      return next(new ErrorHander('Please Login to access this resource', 401));
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET as string);

    const { id, role } = decodedData as { id: number; role: Roles };

    req.client = (await SearchClientData(role, id)) as Admin;

    if (req.client === null) {
      return next(new ErrorHander('Requested client id is not available', 403));
    }
    return next();
  }
);

export default isAuthenticated;
