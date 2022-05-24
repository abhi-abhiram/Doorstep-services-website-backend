import 'reflect-metadata';
import { DataSource } from 'typeorm';
import User from '@src/entity/User';
import dotenv from 'dotenv';

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
  entities: [User],
  migrations: [],
  subscribers: [],
});

export default AppDataSource;
