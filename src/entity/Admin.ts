import { Entity } from 'typeorm';
import { Roles } from '../middleware/auth';
import generateToken from '../utils/generateToken';
import Person from './entityUtils/Person';

@Entity('admin')
export default class Admin extends Person {
  getJWTToken() {
    return generateToken(Roles.PROFESSIONAL, this.id);
  }
}
