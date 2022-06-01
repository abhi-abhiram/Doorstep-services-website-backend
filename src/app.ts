import express from 'express';
import cookieparser from 'cookie-parser';
import bodyParser from 'body-parser';
import { admin, all, professional, user } from './routes';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware';
import swaggerDocs from './utils/swagger';

const app = express();

app.use(express.json());
app.use(cookieparser());
app.use(bodyParser.urlencoded({ extended: true }));

swaggerDocs(app, process.env.PORT as unknown as number);
app.use('/api/user', user);
app.use('/api/professional', professional);
app.use('/api/all', all);
app.use('/api/admin', admin);

app.use(errorHandlerMiddleware);

export default app;
