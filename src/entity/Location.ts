import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Service from './Service';

@Entity('location')
export default class Location {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(() => Service, (service) => service.location)
  services!: Service[];
}
