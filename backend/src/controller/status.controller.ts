/*
    Aqui estan definidas las funciones para el crud de mi tabla Status
*/
import { Request, Response } from 'express';
const Status = require('../models/status.model');

//Esta funcion busca un Status por ID
export async function findById(req: Request, res: Response) {
	const status = req.body;
	let { ID } = status;
	await Status.findOne({ where: { ID: ID } })
		.then((status: any) => res.json(status))
		.catch((err: Error) => console.log('Status error: ' + err));
}

//Esta funcion busca todos los Status
export async function find(req: Request, res: Response) {
	await Status.findAll()
		.then((Status: any) => res.json(Status))
		.catch((err: Error) => console.log('Status error: ' + err));
}

//Esta funcion crea un Status
export async function saveStatus(req: Request, res: Response) {
	const new_status = req.body;
	let { Description, Value } = new_status;
	await Status.create({
		Description,
		Value,
	})
		.then(() => res.json({ message: 'Status Created' }))
		.catch((err: Error) => console.log('Status Error: ' + err));
}

//Esta funcion actualiza un Status
export async function updateStatus(req: Request, res: Response) {
	const new_status = req.body;
	let { ID } = new_status;
	await Status.update(new_status, { where: { ID: ID } })
		.then(() => res.json({ message: 'Status Updated' }))
		.catch((err: Error) => console.log('Status Error: ' + err));
}

//Esta funcion elimina un Status
export async function deleteStatus(req: Request, res: Response) {
	const new_status = req.body;
	let { ID } = new_status;
	await Status.destroy({ where: { ID: ID } })
		.then(() => res.json({ message: 'Status Deleted' }))
		.catch((err: Error) => console.log('Status Error: ' + err));
}
