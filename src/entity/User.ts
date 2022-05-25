import { Entity, Column } from 'typeorm';
import Person from './entityUtils/Person';

@Entity('user')
export default class User extends Person {
  @Column({
    nullable: true,
  })
  avatar!: string;
}
