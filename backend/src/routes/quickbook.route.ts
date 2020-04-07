/*
      Configurando mis rutas para poder hacer queries desde QB
*/
import { Router } from 'express';
const router = Router();

import {
	findEmployee,
	findCustomer,
	findInvoice,
	findItem,
	findBills,
	findPurchaseOrders,
	findEmployeeById,
	findCustomerById,
	findBillById,
	findItemById,
	findInvoiceById,
	findPurchaseOrdersById,
	createEmployee,
	createCustomer,
	createBill,
	createBillPayment,
	createPurchaseOrder,
} from '../controller/quickbook.controller';

router.route('/findEmployee').get(findEmployee).post(findEmployeeById);
router.route('/findCustomer').get(findCustomer).post(findCustomerById);
router.route('/findInvoice').get(findInvoice).post(findInvoiceById);
router.route('/findItem').get(findItem).post(findItemById);
router.route('/findBill').get(findBills).post(findBillById);
router
	.route('/findPurchaseOrder')
	.get(findPurchaseOrders)
	.post(findPurchaseOrdersById);

router.route('/createEmployee').post(createEmployee);
router.route('/createCustomer').post(createCustomer);
router.route('/createBill').post(createBill);
router.route('/createBillPayment').post(createBillPayment);
router.route('/createPurchaseOrder').post(createPurchaseOrder);

export default router;
