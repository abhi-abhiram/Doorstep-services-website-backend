import { Entity, Column, JoinColumn, ManyToOne } from 'typeorm';
import Address from './entityUtils/Address';
import Service from './Service';
import User from './User';

export enum DeliveredStatus {
  DELIVERED = 'delivered',
  PROCESSING = 'processing',
  ARRIVING = 'arriving',
}

export enum PaymentStatus {
  FAILED = 'failed',
  COMPLETED = 'completed',
  PENDING = 'pending',
  PROCESSING = 'processing',
}

@Entity('order')
export default class Order extends Address {
  @Column()
  pirce!: number;

  @Column({
    enum: DeliveredStatus,
    default: DeliveredStatus.PROCESSING,
  })
  order_status!: string;

  @Column({ type: 'date' })
  delivered_at!: Date;

  @Column()
  transaction_id!: string;

  @Column({
    enum: PaymentStatus,
    default: PaymentStatus.PENDING,
  })
  payment_status!: string;

  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn({
    name: 'user_id',
  })
  user!: User;

  @ManyToOne(() => Service, (service) => service.orders)
  @JoinColumn({
    name: 'service_id',
  })
  service!: Service;
}
