import express from 'express';
import cookieparser from 'cookie-parser';
import bodyParser from 'body-parser';
import { demoRoute } from './routes';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware';

const app = express();

app.use(express.json());
app.use(cookieparser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', demoRoute);

app.use(errorHandlerMiddleware);

export default app;
