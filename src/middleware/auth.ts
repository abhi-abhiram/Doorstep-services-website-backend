import jwt from 'jsonwebtoken';
import { NextFunction, Request } from 'express';
import { BaseEntity } from 'typeorm';
import ErrorHander from '../utils/errorHandler';
import catchAsyncErrors from './catchAsyncErrors';
import { Admin } from '../entity';
import getClient, { Roles } from '../utils/getClient';

export interface AuthRequest extends Request {
  cookies: { token: string };
  client?: BaseEntity;
  role?: Roles;
}

const isAuthenticated = (allowedRole?: Roles) =>
  catchAsyncErrors(async (req: AuthRequest, res, next: NextFunction) => {
    const { token } = req.cookies;

    if (!token) {
      return next(new ErrorHander('Please Login to access this resource', 401));
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET as string);

    const { id, role } = decodedData as { id: number; role: Roles };

    req.role = role;

    if (role !== allowedRole && allowedRole !== Roles.ALL)
      return next(
        new ErrorHander(
          `Role: ${role} is not allowed to access this resouce `,
          403
        )
      );

    if (role) req.client = (await getClient(role, { id })) as Admin;

    if (req.client === null) {
      return next(new ErrorHander('Requested client id is not available', 403));
    }
    return next();
  });

export default isAuthenticated;
