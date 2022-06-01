import { Entity } from 'typeorm';
import { Roles } from '../utils/getClient';
import generateToken from '../utils/generateToken';
import Person from './entityUtils/Person';

@Entity('admin')
export default class Admin extends Person {
  getJWTToken() {
    return generateToken(Roles.ADMIN, this.id);
  }
}
