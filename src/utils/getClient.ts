import { User, Professional, Admin } from '../entity';
import ErrorHander from './errorHandler';

export enum Roles {
  USER = 'user',
  PROFESSIONAL = 'professional',
  ADMIN = 'admin',
  ALL = 'all',
}

interface FindBy {
  id?: number;
  email?: string;
}

export default (role: Roles, findBy: FindBy) => {
  switch (role) {
    case Roles.USER:
      return User.findOneBy(findBy);
    case Roles.PROFESSIONAL:
      return Professional.findOneBy(findBy);
    case Roles.ADMIN:
      return Admin.findOneBy(findBy);
    default:
      throw new ErrorHander('Enter valid role', 400);
  }
};
