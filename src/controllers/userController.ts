import catchAsyncErrors from 'src/middleware/catchAsyncErrors';
import { NextFunction, Request, Response } from 'express';
import { User, Address } from '../entity';
import ErrorHander from '../utils/errorHandler';
import sendToken from '../utils/jwtToken';

interface Register {
  name: string;
  email: string;
  password: string;
  phoneNo: string;
  avatar: string;
}

interface CustomRequest<Body> extends Request {
  body: Body;
}

export const registerUser = catchAsyncErrors(
  async (req: CustomRequest<Register>, res: Response, next: NextFunction) => {
    const { name, email, password, phoneNo, avatar } = req.body;

    const user = User.create({
      name,
      email,
      password,
      phone_no: phoneNo,
      avatar,
    });

    try {
      const userData = await user.save();

      sendToken(userData, 201, res, userData.getJWTToken());
    } catch (error) {
      const message = (error as { detail: string }).detail;
      if (message) next(new ErrorHander(message, 409));
    }
  }
);

interface AddAddress {
  address: string;
  city: string;
  state: string;
  country: string;
  pinCode: number;
}

interface AddAddressRequest<Body> extends Request {
  client?: User;
  body: Body;
}

export const addAddress = catchAsyncErrors(
  async (req: AddAddressRequest<AddAddress>, res: Response) => {
    const addressBody = req.body;

    if (req.client) {
      const address = Address.create({ ...addressBody, user: req.client });
      const userAddress = await address.save();

      res.json({ success: true, userAddress });
    } else {
      throw new ErrorHander("user doesn't exist", 403);
    }
  }
);

interface UserCredentials {
  email: string;
  password: string;
}

export const loginUser = catchAsyncErrors(
  async (
    req: CustomRequest<UserCredentials>,
    res: Response,
    next: NextFunction
  ) => {
    const { email, password } = req.body;

    if (!email || !password) {
      next(new ErrorHander('Please Enter Email & Password', 400));
    }

    const user = await User.findOneBy({ email });

    if (!user) {
      next(new ErrorHander('Invalid email or password', 401));
    }

    const isPasswordMatched = await user?.comparePassword(password);

    if (!isPasswordMatched) {
      next(new ErrorHander('Invalid email or password', 401));
    }

    if (user) sendToken(user, 200, res, user?.getJWTToken());
  }
);
