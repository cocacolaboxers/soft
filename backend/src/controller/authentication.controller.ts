/*
    Aqui se define el login del usuario
*/
require('dotenv').config();
import { Request, Response } from 'express';
const Employee = require('../models/employee.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

//Esta funcion busca si el usuario es valido y retorna un token
export async function authentication(req: Request, res: Response) {
	const user = req.body;
	let { UserName, Password } = user;
	let isLogged = false;
	if (user.Password != null) {
		await Employee.findOne({
			where: { UserName: UserName },
		})
			.then(async (user: any) => {
				console.log(req.body.Password + ' user: ' + user.Password);
				if (await bcrypt.compare(req.body.Password.toString(), user.Password)) {
					isLogged = true;
				}
			})
			.catch((err: Error) => console.log('User error: ' + err));
		const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
		if (isLogged) {
			res.json({ accessToken: accessToken, user: user.UserName });
		} else {
			res.json({ accessToken: null });
		}
	} else {
		res.status(500).send();
	}
}
