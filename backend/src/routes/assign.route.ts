/*
      Configurando mis rutas para poder hacer queries de mi tabla Orden
*/
import { Router } from 'express';
const router = Router();

import {
	find,
	findView,
	findById,
	saveAssign,
	updateAssign,
	deleteAssign,
} from '../controller/assign.controller';

router
	.route('/find')
	.get(find)
	.post(findById);

router.route('/findView').get(findView);

router.route('/saveAssign').post(saveAssign);

router.route('/updateAssign').put(updateAssign);

router.route('/deleteAssign').delete(deleteAssign);

export default router;
