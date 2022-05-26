import { Entity, Column, OneToMany } from 'typeorm';
import Address from './Address';
import Person from './entityUtils/Person';
import Order from './Order';

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
}
