import 'reflect-metadata';
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import {
  Address,
  Admin,
  Location,
  Order,
  Professional,
  Service,
  User,
} from './entity';

if (process.env.NODE_ENV !== 'PRODUCTION') {
  dotenv.config();
}
const AppDataSource = new DataSource({
  type: 'postgres',
  url:process.env.DATABASE_URL,
  synchronize: true,
  logging: false,
  entities: [User, Location, Order, Professional, Service, Admin, Address],
  migrations: [],
  subscribers: [],
});

export default AppDataSource;
