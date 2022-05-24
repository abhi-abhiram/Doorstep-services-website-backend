import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
} from 'typeorm';

@Entity('user')
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  user_id!: number;

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
  avatar!: string;

  @Column({
    nullable: true,
  })
  reset_password_token!: string;

  @Column({
    nullable: true,
  })
  reset_password_expire!: string;

  @CreateDateColumn({ type: 'date' })
  created_at!: Date;
}
