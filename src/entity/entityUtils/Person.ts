import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export default class Person extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({
    unique: true,
  })
  email!: string;

  @Column()
  password!: string;

  @Column({
    unique: true,
  })
  phone_no!: string;

  @Column({
    nullable: true,
  })
  reset_password_token!: string;

  @Column({
    nullable: true,
    type: 'timestamp without time zone',
  })
  reset_password_expire!: Date;

  @CreateDateColumn({ type: 'date' })
  created_at!: Date;
}
