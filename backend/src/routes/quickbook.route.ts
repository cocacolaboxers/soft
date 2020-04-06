/*
      Configurando mis rutas para poder hacer queries de mi tabla Status
*/
import { Router } from 'express';
const router = Router();

const qbo = require('../quickbook');

//List Employee 
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

//Create Employee
router.route('/createEmployee').post(function(req, res) {
	qbo.createEmployee(req.body.employees,
	function(e: Error, employees: any) {
		console.log(employees);
		res.json(employees);
	}
	);
});

//Find Employee by Id
router.route('/findEmployee').post(function(req, res) {
	qbo.getEmployee(req.body.id,
	function(e: Error, employees: any) {
		console.log(employees);
		res.json(employees);
	}
	);
});

//List Costumer
router.route('/findCustomer').get(function(req, res) {
	qbo.findCustomers(
		{
			fetchAll: true,
		},
		function(e: Error, customer: any) {
			// console.log(customer);
			console.log(e);
			res.json(customer);
		}
	);
});

//Create Customer
router.route('/createCustomer').post(function(req, res) {
	qbo.createCustomer(req.body.customer,
	function(e: Error, customer: any) {
		console.log(customer);
		res.json(customer);
	}
	);
});

//Find Customer by Id
router.route('/findCustomer').post(function(req, res) {
	qbo.getCustomer(req.body.id,
	function(e: Error, customer: any) {
		console.log(customer);
		res.json(customer);
	}
	);
});

//List Bill
router.route('/findBill').get(function(req, res) {
	qbo.findBills(
		{
			fetchAll: true,
		},
		function(e: Error, bill: any) {
			console.log(bill);
			res.json(bill);
		}
	);
});

//Create Bill
router.route('/createBill').post(function(req, res) {
	qbo.createBill(req.body.bill,
	function(e: Error, bill: any) {
		console.log(bill);
		res.json(bill);
	}
	);
});

//Find Bill by Id
router.route('/findBill').post(function(req, res) {
	qbo.getBill(req.body.id,
	function(e: Error, bill: any) {
		console.log(bill);
		res.json(bill);
	}
	);
});

//Pay Bill
router.route('/PayBill').post(function(req, res) {
	qbo.createBillPayment(req.body.payment,
	function(e: Error, billPayment: any) {
		console.log(billPayment);
		res.json(billPayment);
	}
	);
});


export default router;
