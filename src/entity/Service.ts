import { Entity, PrimaryGeneratedColumn, BaseEntity, Column } from 'typeorm';

@Entity('service')
export default class Service extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  service_name!: string;

  @Column()
  price!: number;

  @Column()
  avatar!: string;
}
