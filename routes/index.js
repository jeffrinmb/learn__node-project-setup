import { Router } from 'express';
import user from './User';

const router = new Router();

router.use(
	'/user',
	(req, res, next) => {
		try {
			// Test
			next(new Error('Test'));
		} catch (e) {
			next(e);
		}
	},
	user
);

export default router;
