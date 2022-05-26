import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import Professional from './Professional';
import Location from './Location';
import Order from './Order';

@Entity('service')
export default class Service {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  service_name!: string;

  @Column()
  price!: number;

  @Column()
  avatar!: string;

  @ManyToOne(() => Professional, (professional) => professional.services)
  @JoinColumn({
    name: 'professional_id',
  })
  professional!: Professional;

  @ManyToOne(() => Location, (location) => location.services)
  @JoinColumn({
    name: 'location_id',
  })
  location!: Location;

  @OneToMany(() => Order, (order) => order.service)
  orders!: Order[];
}
