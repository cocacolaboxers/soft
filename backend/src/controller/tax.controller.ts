/*
    Aqui estan definidas las funciones para el crud de mi tabla Tax
*/
import { Request, Response } from 'express';
const Tax = require('../models/tax.model');

//Esta funcion busca un Tax por ID
export async function findById(req: Request, res: Response) {
	const tax = req.body;
	let { ID } = tax;
	await Tax.findOne({ where: { ID: ID } })
		.then((tax: any) => res.json(tax))
		.catch((err: Error) => console.log('Tax error: ' + err));
}

//Esta funcion busca todos los Tax
export async function find(req: Request, res: Response) {
	await Tax.findAll()
		.then((tax: any) => res.json(tax))
		.catch((err: Error) => console.log('Tax error: ' + err));
}

//Esta funcion crea un Tax
export async function saveTax(req: Request, res: Response) {
	const new_tax = req.body;
	let { Name, Value } = new_tax;
	await Tax.create({
		Name,
		Value,
	})
		.then(() => res.json({ message: 'Tax Created' }))
		.catch((err: Error) => console.log('Tax Error: ' + err));
}

//Esta funcion actualiza un Tax
export async function updateTax(req: Request, res: Response) {
	const new_tax = req.body;
	let { ID } = new_tax;
	await Tax.update(new_tax, { where: { ID: ID } })
		.then(() => res.json({ message: 'Tax Updated' }))
		.catch((err: Error) => console.log('Tax Error: ' + err));
}

//Esta funcion elimina un Tax
export async function deleteTax(req: Request, res: Response) {
	const new_tax = req.body;
	let { ID } = new_tax;
	await Tax.destroy({ where: { ID: ID } })
		.then(() => res.json({ message: 'Tax Deleted' }))
		.catch((err: Error) => console.log('Tax Error: ' + err));
}
