import { config } from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app = express();

if (process.env.NODE_ENV === 'DEVELOPMENT') {
  config({ path: '.env' });
}

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = (process.env.PORT as unknown as number) || 3000;
const HOST = process.env.HOST as string;

app.listen(PORT, HOST, () => {
  console.log('server is listening on', `http://${HOST}:${PORT}`);
});
