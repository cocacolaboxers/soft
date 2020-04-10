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
			updateUser: {
				ID: '',
				Role: 'Conductor',
			},
			cancel_redirec: false,
		};
	}

	async componentWillMount() {
		const res = await axios.get('http://localhost:4000/Employee/find');
		this.setState({ user: res.data });
		let { updateUser } = this.state;
		updateUser.ID = this.state.user[0].ID;
		this.setState({ updateUser });
	}

	signin = async (e) => {
		e.preventDefault();
		console.log(this.state.updateUser);
		await axios
			.put(
				'http://localhost:4000/Employee/updateEmployee',
				this.state.updateUser
			)
			.then((res) => {
				console.log(res.data);
				this.setState({ cancel_redirec: true });
			})
			.catch((err) => console.log('Error: ' + err));
	};

	cancel = (e) => {
		e.preventDefault();
		this.setState({ cancel_redirec: true });
	};

	handdleRoleChange = (e) => {
		let { updateUser } = this.state;
		updateUser.Role = e.target.value;
		this.setState({ updateUser });
	};

	handdleIDChange = (e) => {
		let { updateUser } = this.state;
		updateUser.ID = Number(e.target.value);
		this.setState({ updateUser });
	};

	render() {
		if (this.state.cancel_redirec) {
			return <Redirect to='/' />;
		}

		return (
			<div className='container h-100 d-flex justify-content-center align-items-center'>
				<Form className='form-role'>
					<h1 className='pd-2'>Asignación de rol</h1>
					<Row form>
						<Col md={6}>
							<FormGroup>
								<Label for='User'>Usuario</Label>
								<Input
									type='select'
									name='select'
									id='User'
									onChange={this.handdleIDChange}
								>
									{this.state.user.map((user) => {
										return user.Role == null ? (
											<option key={user.ID} value={user.ID}>
												{user.UserName}
											</option>
										) : null;
									})}
								</Input>
							</FormGroup>
						</Col>
						<Col md={6}>
							<FormGroup>
								<Label for='Role'>Role</Label>
								<Input
									type='select'
									name='select'
									id='Role'
									onChange={this.handdleRoleChange}
								>
									<option value='Conductor'>Conductor</option>
									<option value='Vendedor'>Vendedor</option>
									<option value='Supervisor'>Supervisor</option>
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
									onClick={this.signin}
								>
									Asignar role
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
