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
  host: process.env.DB_HOST,
  port: process.env.DB_PORT as unknown as number,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  synchronize: true,
  logging: false,
  entities: [User, Location, Order, Professional, Service, Admin, Address],
  migrations: [],
  subscribers: [],
});

export default AppDataSource;
