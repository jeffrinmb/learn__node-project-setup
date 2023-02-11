import * as winston from 'winston';

const logger = winston.createLogger({
	level: 'info',
	format: winston.format.json(),
	defaultMeta: { app: 'api' },
	transports: [
		new winston.transports.Console({ level: 'silly' }),
		new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
		new winston.transports.File({ filename: 'logs/combined.log' }),
	],
});

export default logger;
