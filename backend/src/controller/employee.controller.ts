/*
    Aqui estan definidas las funciones para el crud de mi tabla Employee
*/
import { Request, Response } from 'express';
const Employee = require('../models/employee.model');
const bcrypt = require('bcrypt');

//Esta funcion busca un Employee por ID
export async function findById(req: Request, res: Response) {
	const employee = req.body;
	let { ID } = employee;
	await Employee.findOne({ where: { ID: ID } })
		.then((employee: any) => res.json(employee))
		.catch((err: Error) => console.log('Employee error: ' + err));
}

//Esta funcion busca todos los Employee
export async function find(req: Request, res: Response) {
	await Employee.findAll()
		.then((employee: any) => res.json(employee))
		.catch((err: Error) => console.log('Employee error: ' + err));
}

//Esta funcion crea un Employee
export async function saveEmployee(req: Request, res: Response) {
	const new_employee = req.body;
	const salt = await bcrypt.genSalt();
	const hashPassword = await bcrypt.hash(req.body.Password, salt);
	let {
		FirstName,
		LastName,
		Email,
		Address,
		City,
		UserName,
		Password,
		Language,
		Role,
		Phone,
	} = new_employee;
	Password = hashPassword;
	await Employee.create({
		FirstName,
		LastName,
		Email,
		Address,
		City,
		UserName,
		Password,
		Language,
		Role,
		Phone,
	})
		.then(() => res.json({ message: 'Employee Created' }))
		.catch((err: Error) => console.log('Employee Error: ' + err));
}

//Esta funcion actualiza un Employee
export async function updateEmployee(req: Request, res: Response) {
	const new_employee = req.body;
	let { ID } = new_employee;
	if (new_employee.Password != null) {
		const salt = await bcrypt.genSalt();
		const hashPassword = await bcrypt.hash(req.body.Password, salt);
		new_employee.Password = hashPassword;
	}
	await Employee.update(new_employee, { where: { ID: ID } })
		.then(() => res.json({ message: 'Employee Updated' }))
		.catch((err: Error) => console.log('Employee Error: ' + err));
}

//Esta funcion elimina un Employee
export async function deleteEmployee(req: Request, res: Response) {
	const new_employee = req.body;
	let { ID } = new_employee;
	await Employee.destroy({ where: { ID: ID } })
		.then(() => res.json({ message: 'Employee Deleted' }))
		.catch((err: Error) => console.log('Employee Error: ' + err));
}
