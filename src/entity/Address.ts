import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import AddressUtil from './entityUtils/Address';
import User from './User';

@Entity('address')
export default class Address extends AddressUtil {
  @ManyToOne(() => User, (user) => user.addresses)
  @JoinColumn({
    name: 'user_id',
  })
  user!: User;
}
