import logger from '../utilities/Logger';

export const testController = (req, res, next) => {
	logger.silly('Hi');
	next();
};

export const registerController = (req, res) => {
	res.send('Hi');
};
