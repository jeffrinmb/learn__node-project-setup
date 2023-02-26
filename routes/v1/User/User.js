import { Router } from 'express';
import { testController } from '../../../controller/User';

const router = new Router();

router.route('/test').get(testController);

export default router;
