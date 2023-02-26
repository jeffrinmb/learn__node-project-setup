import express from 'express';
import * as dotenv from 'dotenv';
import middleWare from './middleware/Middleware';
import logger from './utilities/Logger';
import routes from './routes';
import { sendError } from './middleware/ErrorHandler';
import { sendResponse } from './middleware/ResponseHandler';

dotenv.config();

const { API_PORT } = process.env;
const PORT = process.env.PORT || API_PORT;
const app = express();
middleWare(app);

app.use(routes);
app.use(sendError);
app.use(sendResponse);

app.listen(PORT, err => {
	if (err) {
		logger.error(err);
		process.exit(1);
	}
	logger.info(`Server Listening on Port: ${PORT}`);
});

process.on('uncaughtException', err => {
	logger.error(err);
});
