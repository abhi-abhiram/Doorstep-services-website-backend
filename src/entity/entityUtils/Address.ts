import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Address {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  address!: number;

  @Column()
  city!: string;

  @Column()
  state!: string;

  @Column()
  country!: string;

  @Column()
  pinCode!: number;
}
