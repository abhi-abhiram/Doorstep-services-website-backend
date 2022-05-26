import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BaseEntity,
  BeforeInsert,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

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
    type: 'time without time zone',
  })
  reset_password_expire!: number;

  @CreateDateColumn({ type: 'date' })
  created_at!: Date;

  @BeforeInsert()
  async setPassword(password: string) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(password || this.password, salt);
  }

  getJWTToken() {
    return jwt.sign({ id: this.id }, process.env.JWT_SECRET as string, {
      expiresIn: process.env.JWT_EXPIRE,
    });
  }

  getResetPasswordToken() {
    const resetToken = crypto.randomBytes(20).toString('hex');

    this.reset_password_token = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');

    this.reset_password_expire = Date.now() + 15 * 60 * 1000;

    return resetToken;
  }
}
