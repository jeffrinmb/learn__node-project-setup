import express from 'express';
import * as dotenv from 'dotenv';
import middleWare from './middleware/Middleware';
import logger from './config/Logger';
import routes from './routes';

dotenv.config();

const { API_PORT } = process.env;
const PORT = process.env.PORT || API_PORT;
const app = express();
middleWare(app);

app.use('/v1', routes);

app.listen(PORT, err => {
	if (err) {
		logger.error(err);
		process.exit(1);
	}
	logger.info(`Server Listening on Port: ${PORT}`);
});
