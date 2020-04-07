/*
    Aqui estan definidas las funciones para el crud de mi tabla Tax
*/
import { Request, Response } from 'express';
import {
	Employee,
	Customer,
	Bill,
	BillPayment,
	Invoice,
	Payment,
	Item,
	PurchaseOrder,
} from '../interfaces/ERP.interface';
const qbo = require('../quickbook');

//Esta funcion busca los empleados que estan en QB
export async function findEmployee(req: Request, res: Response) {
	await qbo.findEmployees(
		{
			fetchAll: true,
		},
		function (e: Error, employees: any) {
			console.log(employees);
			res.json(employees.QueryResponse.Employee);
		}
	);
}

//Esta funcion busca los clientes que estan en QB
export async function findCustomer(req: Request, res: Response) {
	await qbo.findCustomers(
		{
			fetchAll: true,
		},
		function (e: Error, customers: any) {
			console.log(customers);
			res.json(customers.QueryResponse.Customer);
		}
	);
}

//Esta funcion busca las ordenes que estan en QB
export async function findInvoice(req: Request, res: Response) {
	await qbo.findInvoices(
		{
			fetchAll: true,
		},
		function (e: Error, invoice: any) {
			console.log(invoice);
			res.json(invoice.QueryResponse.Invoice);
		}
	);
}

//Esta funcion busca las ordenes que estan en QB
export async function findInvoiceById(req: Request, res: Response) {
	await qbo.getInvoice(req.body.id, function (e: Error, invoice: any) {
		console.log(invoice);
		res.json(invoice);
	});
}

//Esta funcion busca los articulos que estan en QB
export async function findItem(req: Request, res: Response) {
	await qbo.findItems(
		{
			fetchAll: true,
		},
		function (e: Error, item: any) {
			console.log(item);
			res.json(item.QueryResponse.Item);
		}
	);
}

//Esta funcion busca los articulos que estan en QB por ID
export async function findItemById(req: Request, res: Response) {
	await qbo.getItem(req.body.id, function (e: Error, item: any) {
		console.log(item);
		res.json(item);
	});
}

export async function findPurchaseOrders(req: Request, res: Response) {
	await qbo.findPurchaseOrders(
		{
			fetchAll: true,
		},
		function (e: Error, orders: any) {
			console.log(orders);
			res.json(orders.QueryResponse.PurchaseOrder);
		}
	);
}

export async function findPurchaseOrdersById(req: Request, res: Response) {
	await qbo.getPurchaseOrder(req.body.id, function (e: Error, order: any) {
		console.log(order);
		res.json(order);
	});
}

export async function createPurchaseOrder(req: Request, res: Response) {
	const order: PurchaseOrder = req.body;
	await qbo.createPurchaseOrder(order, function (e: Error, orders: any) {
		console.log(orders);
		res.json(orders);
	});
}

//Create Employee
export async function createEmployee(req: Request, res: Response) {
	const employee: Employee = req.body;
	await qbo.createEmployee(employee, function (e: Error, employees: any) {
		console.log(employees);
		res.json(employees);
	});
}

//Find Employee by Id
export async function findEmployeeById(req: Request, res: Response) {
	await qbo.getEmployee(req.body.id, function (e: Error, employees: any) {
		console.log(employees);
		res.json(employees);
	});
}

//Create Customer
export async function createCustomer(req: Request, res: Response) {
	const customer: Customer = req.body;
	await qbo.createCustomer(customer, function (e: Error, customer: any) {
		console.log(customer);
		res.json(customer);
	});
}

//Find Customer by Id
export async function findCustomerById(req: Request, res: Response) {
	await qbo.getCustomer(req.body.id, function (e: Error, customer: any) {
		console.log(customer);
		res.json(customer);
	});
}

//List Bill
export async function findBills(req: Request, res: Response) {
	await qbo.findBills(
		{
			fetchAll: true,
		},
		function (e: Error, bill: any) {
			console.log(bill);
			res.json(bill.QueryResponse.Bill);
		}
	);
}

//Create Bill
export async function createBill(req: Request, res: Response) {
	const bill: Bill = req.body;
	await qbo.createBill(bill, function (e: Error, bill: any) {
		console.log(bill);
		res.json(bill);
	});
}

//Find Bill by Id
export async function findBillById(req: Request, res: Response) {
	await qbo.getBill(req.body.id, function (e: Error, bill: any) {
		console.log(bill);
		res.json(bill);
	});
}

//Pay Bill
export async function createBillPayment(req: Request, res: Response) {
	const bill_payment: BillPayment = req.body;
	await qbo.createBillPayment(bill_payment, function (
		e: Error,
		billPayment: any
	) {
		console.log(billPayment);
		res.json(billPayment);
	});
}
