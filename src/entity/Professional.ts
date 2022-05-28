import { Entity, OneToMany } from 'typeorm';
import { Roles } from '../utils/getClient';
import generateToken from '../utils/generateToken';
import Person from './entityUtils/Person';
import Service from './Service';

@Entity('professional')
export default class Professional extends Person {
  @OneToMany(() => Service, (service) => service.professional)
  services!: Service[];

  getJWTToken() {
    return generateToken(Roles.PROFESSIONAL, this.id);
  }
}
