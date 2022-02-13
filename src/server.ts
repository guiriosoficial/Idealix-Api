import express from 'express';
import cors from 'cors';
import routes from 'routes';
import notFoundHandler from 'middlewares/notFoundHandler';
import errorHandler from 'middlewares/errorHandler';
import { errors } from 'celebrate';
import 'express-async-errors';
import 'reflect-metadata';
import 'dotenv/config';
import 'db';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(notFoundHandler);
app.use(errors());
app.use(errorHandler);

app.listen(4000, () => {
	console.log('🚀 Server started on http://localhost:4000');
});
