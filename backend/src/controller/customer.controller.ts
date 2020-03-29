/*
    Aqui estan definidas las funciones para el crud de mi tabla Customer
*/
import { Request, Response } from 'express';
import { Customer, CustomerView } from '../models/customer.model';

//Esta funcion busca un Customer por ID
export async function findById(req: Request, res: Response) {
	const customer = req.body;
	let { ID } = customer;
	await Customer.findOne({ where: { ID: ID } })
		.then((customer: any) => res.json(customer))
		.catch((err: Error) => console.log('Customer error: ' + err));
}

//Esta funcion busca un Customer por ID de customerviews
export async function findViewById(req: Request, res: Response) {
	const customer = req.body;
	let { ID } = customer;
	await CustomerView.findOne({ where: { ID: ID } })
		.then((customer: any) => res.json(customer))
		.catch((err: Error) => console.log('Customer error: ' + err));
}

//Esta funcion busca todos los Customer
export async function find(req: Request, res: Response) {
	await Customer.findAll()
		.then((customer: any) => res.json(customer))
		.catch((err: Error) => console.log('Customer error: ' + err));
}

//Esta funcion busca todos los Customer de customerviews
export async function findView(req: Request, res: Response) {
	await CustomerView.findAll()
		.then((customer: any) => res.json(customer))
		.catch((err: Error) => console.log('Customer error: ' + err));
}

//Esta funcion crea un Customer
export async function saveCustomer(req: Request, res: Response) {
	const new_customer = req.body;
	let { FirstName, LastName, Email, Address, City, Phone } = new_customer;
	await Customer.create({
		FirstName,
		LastName,
		Email,
		Address,
		City,
		Phone,
	})
		.then(() => res.json({ message: 'Customer Created' }))
		.catch((err: Error) => console.log('Customer Error: ' + err));
}

//Esta funcion actualiza un Customer
export async function updateCustomer(req: Request, res: Response) {
	const new_customer = req.body;
	let { ID } = new_customer;
	await Customer.update(new_customer, { where: { ID: ID } })
		.then(() => res.json({ message: 'Customer Updated' }))
		.catch((err: Error) => console.log('Customer Error: ' + err));
}

//Esta funcion elimina un Customer
export async function deleteCustomer(req: Request, res: Response) {
	const new_customer = req.body;
	let { ID } = new_customer;
	await Customer.destroy({ where: { ID: ID } })
		.then(() => res.json({ message: 'Customer Deleted' }))
		.catch((err: Error) => console.log('Customer Error: ' + err));
}
