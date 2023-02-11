import { Router } from 'express';
import user from './User';

const router = new Router();

router.use('/user', user);

export default router;
