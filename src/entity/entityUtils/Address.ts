import { Entity, PrimaryGeneratedColumn, BaseEntity, Column } from 'typeorm';

@Entity()
export default class Address extends BaseEntity {
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
