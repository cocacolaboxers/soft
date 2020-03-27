/*
      Configurando mis rutas para poder hacer queries de mi tabla Status
*/
import { Router } from 'express';
const router = Router();

import {
	find,
	findById,
	saveStatus,
	updateStatus,
	deleteStatus,
} from '../controller/status.controller';

router
	.route('/find')
	.get(find)
	.post(findById);

router.route('/saveStatus').post(saveStatus);

router.route('/updateStatus').put(updateStatus);

router.route('/deleteStatus').delete(deleteStatus);

export default router;
