/*
    Aqui estan definidas las funciones para el crud de mi tabla Item
*/
import { Request, Response } from 'express';
const Item = require('../models/item.model');

//Esta funcion busca un Item por ID
export async function findById(req: Request, res: Response) {
	const item = req.body;
	let { ID } = item;
	await Item.findOne({ where: { ID: ID } })
		.then((item: any) => res.json(item))
		.catch((err: Error) => console.log('Item error: ' + err));
}

//Esta funcion busca todos los Item
export async function find(req: Request, res: Response) {
	await Item.findAll()
		.then((item: any) => res.json(item))
		.catch((err: Error) => console.log('Item error: ' + err));
}

//Esta funcion crea un Item
export async function saveItem(req: Request, res: Response) {
	const new_item = req.body;
	let { ItemName, Quantity } = new_item;
	await Item.create({
		ItemName,
		Quantity,
	})
		.then(() => res.json({ message: 'Item Created' }))
		.catch((err: Error) => console.log('Item Error: ' + err));
}

//Esta funcion actualiza un Item
export async function updateItem(req: Request, res: Response) {
	const new_item = req.body;
	let { ID } = new_item;
	await Item.update(new_item, { where: { ID: ID } })
		.then(() => res.json({ message: 'Item Updated' }))
		.catch((err: Error) => console.log('Item Error: ' + err));
}

//Esta funcion elimina un Item
export async function deleteItem(req: Request, res: Response) {
	const new_item = req.body;
	let { ID } = new_item;
	await Item.destroy({ where: { ID: ID } })
		.then(() => res.json({ message: 'Item Deleted' }))
		.catch((err: Error) => console.log('Item Error: ' + err));
}
