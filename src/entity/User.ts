import { Entity, Column, OneToMany } from 'typeorm';
import generateToken from '../utils/generateToken';
import Address from './Address';
import Person from './entityUtils/Person';
import Order from './Order';
import { Roles } from '../utils/getClient';

@Entity('user')
export default class User extends Person {
  @Column({
    nullable: true,
  })
  avatar!: string;

  @OneToMany(() => Address, (address) => address.user)
  addresses!: Address[];

  @OneToMany(() => Order, (order) => order.user)
  orders!: Order[];

  getJWTToken() {
    return generateToken(Roles.USER, this.id);
  }
}
