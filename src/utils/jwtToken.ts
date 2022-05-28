import { Response } from 'express';
import { Roles } from './getClient';

export default function sendToken<T>(
  client: T,
  statusCode: number,
  res: Response,
  token: string,
  role: Roles
) {
  const options = {
    expires: new Date(
      Date.now() +
        parseInt(process.env.COOKIE_EXPIRE as string, 10) * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res
    .status(statusCode)
    .cookie('token', token, options)
    .json({
      success: true,
      [role]: client,
      token,
    });
}
