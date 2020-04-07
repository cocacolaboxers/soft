import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import { Button } from 'reactstrap';
import '../styles/RoleAssign.css';

export default class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: [],
			customer: [],
			assign: [],
			assigns: [],
			cancel_redirec: false,
		};
	}

	async componentWillMount() {
		let { user, customer, assign, assigns } = this.state;
		const res = await axios.get('http://localhost:4000/employee/find');
		const res2 = await axios.get('http://localhost:4000/customer/find');
		const res3 = await axios.get('http://localhost:4000/customer/findView');
		user = res.data;
		customer = res2.data;
		assigns = res3.data;
		assign = {
			ID_Customer: customer[0].ID,
			ID_Employee: user[0].ID,
			DescriptionTask: 'Asignacion',
		};
		this.setState({ user, customer, assigns, assign });
	}

	assign = async (e) => {
		e.preventDefault();
		let isUpdate = false;
		this.state.assigns.map((customer) => {
			if (customer.ID_Customer == this.state.assign.ID_Customer) {
				return (isUpdate = true);
			}
		});
		console.log(isUpdate);
		if (isUpdate) {
			await axios
				.put('http://localhost:4000/assign/updateAssign', this.state.assign)
				.then((res) => {
					console.log(res.data);
					this.setState({ cancel_redirec: true });
				})
				.catch((err) => console.log('Error: ' + err));
		} else {
			await axios
				.post('http://localhost:4000/assign/saveAssign', this.state.assign)
				.then((res) => {
					console.log(res.data);
					this.setState({ cancel_redirec: true });
				})
				.catch((err) => console.log('Error: ' + err));
		}
	};

	cancel = (e) => {
		e.preventDefault();
		this.setState({ cancel_redirec: true });
	};

	handdleRoleChange = (e) => {
		let { assign } = this.state;
		assign.ID_Customer = parseInt(e.target.value);
		this.setState({ assign });
	};

	handdleIDChange = (e) => {
		let { assign } = this.state;
		assign.ID_Employee = parseInt(e.target.value);
		this.setState({ assign });
	};

	render() {
		if (this.state.cancel_redirec) {
			return <Redirect to='/' />;
		}

		return (
			<div className='container h-100 d-flex justify-content-center align-items-center'>
				<Form className='form-role'>
					<h1 className='pd-2'>Asignación de los clientes</h1>
					<Row form>
						<Col md={6}>
							<FormGroup>
								<Label for='User'>Empleado</Label>
								<Input
									type='select'
									name='select'
									id='User'
									onChange={this.handdleIDChange}
								>
									{this.state.user.map((user) => (
										<option key={user.ID} value={user.ID}>
											{`${user.FirstName} ${user.LastName}`}
										</option>
									))}
								</Input>
							</FormGroup>
						</Col>
						<Col md={6}>
							<FormGroup>
								<Label for='Role'>Cliente</Label>
								<Input
									type='select'
									name='select'
									id='Role'
									onChange={this.handdleRoleChange}
								>
									{this.state.customer.map((customer) => (
										<option key={customer.ID} value={customer.ID}>
											{`${customer.FirstName} ${customer.LastName}`}
										</option>
									))}
								</Input>
							</FormGroup>
						</Col>
					</Row>
					<Row form>
						<Col md={6}>
							<FormGroup>
								<Button
									className='Button btn-block'
									color='primary'
									onClick={this.assign}
								>
									Asignar
								</Button>
							</FormGroup>
						</Col>
						<Col md={6}>
							<FormGroup>
								<Button
									className='Button btn-block'
									color='secondary'
									onClick={this.cancel}
								>
									Cancel
								</Button>
							</FormGroup>
						</Col>
					</Row>
				</Form>
			</div>
		);
	}
}
