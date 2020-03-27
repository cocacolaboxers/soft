/*
      Configurando mis rutas para poder hacer queries de mi tabla Item
*/
import { Router } from 'express';
const router = Router();

import {
	find,
	findById,
	saveItem,
	updateItem,
	deleteItem,
} from '../controller/item.controller';

router
	.route('/find')
	.get(find)
	.post(findById);

router.route('/saveItem').post(saveItem);

router.route('/updateItem').put(updateItem);

router.route('/deleteItem').delete(deleteItem);

export default router;
