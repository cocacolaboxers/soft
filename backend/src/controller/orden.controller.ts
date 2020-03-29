/*
    Aqui estan definidas las funciones para el crud de mi tabla orden_masters y orden_details
*/
import { Request, Response } from 'express';
import { Orden_Mater, Orden_Detail, Consultas } from '../models/orden.model';

//Esta funcion busca un campo de la tabla orden_masters por ID
export async function findOrdenMasterById(req: Request, res: Response) {
	const orden = req.body;
	let { ID } = orden;
	await Orden_Mater.findOne({ where: { ID: ID } })
		.then((orden: any) => res.json(orden))
		.catch((err: Error) => console.log('Orden error: ' + err));
}

//Esta funcion busca todos los campos de la tabla orden_masters
export async function findOrdenMaster(req: Request, res: Response) {
	await Orden_Mater.findAll()
		.then((orden: any) => res.json(orden))
		.catch((err: Error) => console.log('Orden error: ' + err));
}

//Esta funcion crea un campo de la tabla orden_masters
export async function saveOrdenMaster(req: Request, res: Response) {
	const new_orden = req.body;
	let {
		ID_Status,
		ID_Customer,
		ID_Employee,
		Confirmed,
		CancelationDate,
		PaymentMethod,
	} = new_orden;
	await Orden_Mater.create({
		ID_Status,
		ID_Customer,
		ID_Employee,
		Confirmed,
		CancelationDate,
		PaymentMethod,
	})
		.then(() => res.json({ message: 'Orden Created' }))
		.catch((err: Error) => console.log('Orden Error: ' + err));
}

//Esta funcion actualiza un campo de la tabla orden_masters
export async function updateOrdenMaster(req: Request, res: Response) {
	const new_orden = req.body;
	let { ID } = new_orden;
	await Orden_Mater.update(new_orden, { where: { ID: ID } })
		.then(() => res.json({ message: 'Orden Updated' }))
		.catch((err: Error) => console.log('Orden Error: ' + err));
}

//Esta funcion elimina un campo de la tabla orden_masters
export async function deleteOrdenMaster(req: Request, res: Response) {
	const new_orden = req.body;
	let { ID } = new_orden;
	await Orden_Mater.destroy({ where: { ID: ID } })
		.then(() => res.json({ message: 'Orden Deleted' }))
		.catch((err: Error) => console.log('Orden Error: ' + err));
}

/*************************************** orden_details ***************************************/

//Esta funcion busca un campo de la tabla orden_masters por ID
export async function findOrdenDetailById(req: Request, res: Response) {
	const orden = req.body;
	let { ID } = orden;
	await Orden_Detail.findOne({ where: { ID: ID } })
		.then((orden: any) => res.json(orden))
		.catch((err: Error) => console.log('Orden error: ' + err));
}

//Esta funcion busca todos los campos de la tabla orden_masters
export async function findOrdenDetail(req: Request, res: Response) {
	await Orden_Detail.findAll()
		.then((orden: any) => res.json(orden))
		.catch((err: Error) => console.log('Orden error: ' + err));
}

//Esta funcion crea un campo de la tabla orden_masters
export async function saveOrdenDetail(req: Request, res: Response) {
	const new_orden = req.body;
	let {
		ID_OrdenM,
		MontoBruto,
		MontoNeto,
		Quantity,
		ID_Item,
		ID_Tax,
	} = new_orden;
	await Orden_Detail.create({
		ID_OrdenM,
		MontoBruto,
		MontoNeto,
		Quantity,
		ID_Item,
		ID_Tax,
	})
		.then(() => res.json({ message: 'Orden Created' }))
		.catch((err: Error) => console.log('Orden Error: ' + err));
}

//Esta funcion actualiza un campo de la tabla orden_masters
export async function updateOrdenDetail(req: Request, res: Response) {
	const new_orden = req.body;
	let { ID } = new_orden;
	await Orden_Detail.update(new_orden, { where: { ID: ID } })
		.then(() => res.json({ message: 'Orden Updated' }))
		.catch((err: Error) => console.log('Orden Error: ' + err));
}

//Esta funcion elimina un campo de la tabla orden_masters
export async function deleteOrdenDetail(req: Request, res: Response) {
	const new_orden = req.body;
	let { ID } = new_orden;
	await Orden_Detail.destroy({ where: { ID: ID } })
		.then(() => res.json({ message: 'Orden Deleted' }))
		.catch((err: Error) => console.log('Orden Error: ' + err));
}

/*************************************** consultas ***************************************/

//Esta funcion busca todos los campos de la vista consultas
export async function findConsultas(req: Request, res: Response) {
	await Consultas.findAll()
		.then((orden: any) => res.json(orden))
		.catch((err: Error) => console.log('Orden error: ' + err));
}
