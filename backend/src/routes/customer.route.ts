/*
      Configurando mis rutas para poder hacer queries de mi tabla Customer
*/
import { Router } from 'express';
const router = Router();

import {
	find,
	findById,
	saveCustomer,
	updateCustomer,
	deleteCustomer,
} from '../controller/customer.controller';

router
	.route('/find')
	.get(find)
	.post(findById);

router.route('/saveCustomer').post(saveCustomer);

router.route('/updateCustomer').put(updateCustomer);

router.route('/deleteCustomer').delete(deleteCustomer);

export default router;
