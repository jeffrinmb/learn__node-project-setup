import express from 'express';
import * as dotenv from 'dotenv';
import middleWare from './middleware/Middleware';
import logger from './config/Logger';
import route from './routes';

dotenv.config();

const { API_PORT } = process.env;
const PORT = process.env.PORT || API_PORT;
const app = express();
middleWare(app);

app.use('/v1', route);

app.listen(PORT, () => {
	logger.info('Server Started');
});
