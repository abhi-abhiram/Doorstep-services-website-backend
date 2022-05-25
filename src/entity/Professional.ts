import { Entity, Column } from 'typeorm';
import Person from './entityUtils/Person';

@Entity('professional')
export default class Professional extends Person {
  @Column({
    nullable: true,
  })
  avatar!: string;
}
