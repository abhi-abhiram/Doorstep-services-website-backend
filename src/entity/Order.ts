import { Entity, Column } from 'typeorm';
import Address from './entityUtils/Address';

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

@Entity('location')
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
}
