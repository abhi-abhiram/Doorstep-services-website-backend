import { Entity, Column, OneToMany } from 'typeorm';
import { Roles } from '../middleware/auth';
import generateToken from '../utils/generateToken';
import Person from './entityUtils/Person';
import Service from './Service';

@Entity('professional')
export default class Professional extends Person {
  @Column({
    nullable: true,
  })
  avatar!: string;

  @OneToMany(() => Service, (service) => service.professional)
  services!: Service[];

  getJWTToken() {
    return generateToken(Roles.PROFESSIONAL, this.id);
  }
}
