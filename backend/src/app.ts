import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import TaxRoutes from './routes/tax.route';
import StatusRoutes from './routes/status.route';
import OrdenRoutes from './routes/orden.route';
import ItemRoutes from './routes/item.route';
import EmployeeRoutes from './routes/employee.route';
import CustomerRoutes from './routes/customer.route';
import AuthenticationRoutes from './routes/authentication.route';
const db = require('./database');

export class App {
	private app: Application;

	constructor(private port?: number | string) {
		this.app = express();
		this.settings();
		this.middlewares();
		this.DB();
		this.routes();
	}

	settings() {
		this.app.set('port', this.port || process.env.PORT || 4000);
	}

	middlewares() {
		this.app.use(morgan('dev'));
		this.app.use(express.json());
		this.app.use(cors());
	}

	routes() {
		this.app.use('/tax', TaxRoutes);
		this.app.use('/status', StatusRoutes);
		this.app.use('/orden', OrdenRoutes);
		this.app.use('/item', ItemRoutes);
		this.app.use('/employee', EmployeeRoutes);
		this.app.use('/customer', CustomerRoutes);
		this.app.use('/login', AuthenticationRoutes);
	}

	async DB() {
		await db
			.authenticate()
			.then(() => console.log('Database connected...'))
			.catch((err: Error) => console.log('Error: ' + err));
	}

	async listen() {
		await this.app.listen(this.app.get('port'));
		console.log('Server on port', this.app.get('port'));
	}
}
