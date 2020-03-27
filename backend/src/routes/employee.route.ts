/*
      Configurando mis rutas para poder hacer queries de mi tabla Employee
*/
import { Router } from 'express';
const router = Router();

import {
	find,
	findById,
	saveEmployee,
	updateEmployee,
	deleteEmployee,
} from '../controller/employee.controller';

router
	.route('/find')
	.get(find)
	.post(findById);

router.route('/saveEmployee').post(saveEmployee);

router.route('/updateEmployee').put(updateEmployee);

router.route('/deleteEmployee').delete(deleteEmployee);

export default router;
