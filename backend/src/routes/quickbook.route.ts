/*
      Configurando mis rutas para poder hacer queries de mi tabla Status
*/
import { Router } from 'express';
const router = Router();

const qbo = require('../quickbook');

router.route('/findEmployee').get(function(req, res) {
	qbo.findEmployees(
		{
			fetchAll: true,
		},
		function(e: Error, employees: any) {
			console.log(employees);
			res.json(employees);
		}
	);
});

export default router;
