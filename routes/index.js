import { Router } from 'express';
import v1Routes from './v1';

const router = new Router();

router.use('/v1', v1Routes);

export default router;
