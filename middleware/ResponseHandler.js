export const sendResponse = (req, res, next) => {
	const output = { success: true };
	res.json(output);
};
