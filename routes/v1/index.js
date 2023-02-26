import { Router } from 'express';
import user from './User/User';

const router = new Router();

router.use('/user', user);

export default router;
