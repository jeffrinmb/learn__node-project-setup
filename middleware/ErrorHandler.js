export const catchErrors = fn => (req, res, next) =>
	fn(req, res, next).catch(next);

// eslint-disable-next-line no-unused-vars
export const sendError = (err, req, res, next) => {
	if (err) {
		res.send(`In Error Handler ${err}`);
	}
};
