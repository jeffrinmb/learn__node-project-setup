import { Router } from 'express';

const router = new Router();

router.use('/test', (req, res) => {
	res.send('Hi');
});

export default router;
