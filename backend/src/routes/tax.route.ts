/*
      Configurando mis rutas para poder hacer queries de mi tabla Tax
*/
import { Router } from 'express';
const router = Router();

import {
	find,
	findById,
	saveTax,
	updateTax,
	deleteTax,
} from '../controller/tax.controller';

router
	.route('/find')
	.get(find)
	.post(findById);

router.route('/saveTax').post(saveTax);

router.route('/updateTax').put(updateTax);

router.route('/deleteTax').delete(deleteTax);

export default router;
