/*
    Aqui estan definidas las funciones para el crud de la tabla assigns
*/
import { Request, Response } from 'express';
import { Assign, AssignView } from '../models/assign.model';

//Esta funcion busca un campo de la tabla assigns por ID
export async function findById(req: Request, res: Response) {
	const assign = req.body;
	let { ID } = assign;
	await Assign.findOne({ where: { ID: ID } })
		.then((assign: any) => res.json(assign))
		.catch((err: Error) => console.log('Assign error: ' + err));
}

//Esta funcion busca todos los campos de la tabla assigns
export async function find(req: Request, res: Response) {
	await Assign.findAll()
		.then((assign: any) => res.json(assign))
		.catch((err: Error) => console.log('Assign error: ' + err));
}

//Esta funcion busca todos los campos de la tabla assigns
export async function findView(req: Request, res: Response) {
	await AssignView.findAll()
		.then((assign: any) => res.json(assign))
		.catch((err: Error) => console.log('Assign error: ' + err));
}

//Esta funcion crea un campo de la tabla assigns
export async function saveAssign(req: Request, res: Response) {
	const new_Assign = req.body;
	let { ID_Customer, ID_Employee, DescriptionTask } = new_Assign;
	await Assign.create({
		ID_Customer,
		ID_Employee,
		DescriptionTask,
	})
		.then(() => res.json({ message: 'Assign Created' }))
		.catch((err: Error) => console.log('Assign Error: ' + err));
}

//Esta funcion actualiza un campo de la tabla assigns
export async function updateAssign(req: Request, res: Response) {
	const new_assign = req.body;
	let { ID_Customer } = new_assign;
	await Assign.update(new_assign, { where: { ID_Customer: ID_Customer } })
		.then(() => res.json({ message: 'Assign Updated' }))
		.catch((err: Error) => console.log('Assign Error: ' + err));
}

//Esta funcion elimina un campo de la tabla assigns
export async function deleteAssign(req: Request, res: Response) {
	const new_assign = req.body;
	let { ID } = new_assign;
	await Assign.destroy({ where: { ID: ID } })
		.then(() => res.json({ message: 'Assign Deleted' }))
		.catch((err: Error) => console.log('Assign Error: ' + err));
}
