import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import { Button } from 'reactstrap';
import '../styles/Register.css';

export default class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			new_user: {
				FirstName: '',
				LastName: '',
				Email: '',
				Address: '',
				City: '',
				UserName: '',
				Password: '',
				Language: '',
				Phone: '',
			},
			cancel_redirec: false,
			redirect: false,
		};
	}

	componentDidMount() {
		if (sessionStorage.getItem('token')) {
			console.log('User logged in');
		} else {
			this.setState({ redirect: true });
		}
	}

	//register user
	signin = async (e) => {
		e.preventDefault();
		let { new_user } = this.state;
		new_user.Language = 'ES';
		this.setState({ new_user });
		await axios
			.post('http://localhost:4000/employee/saveEmployee', this.state.new_user)
			.then((response) => {
				console.log(response.data);
				this.setState({
					cancel_redirec: true,
					new_user: {
						FirstName: '',
						LastName: '',
						Email: '',
						Address: '',
						City: '',
						UserName: '',
						Password: '',
						Language: '',
						Phone: '',
					},
				});
			});
	};

	cancel = (e) => {
		e.preventDefault();
		this.setState({ cancel_redirec: true });
	};
	//user type
	handdleChange = (e) => {
		let { new_user } = this.state;
		new_user.tipo_usuario = e.target.value;
		this.setState({ value: e.target.value, new_user });
	};
	//render
	render() {
		if (this.state.cancel_redirec) {
			return <Redirect to='/' />;
		}

		if (this.state.redirect) {
			return <Redirect to={'/login'} />;
		}

		return (
			<div className='container h-100 d-flex justify-content-center align-items-center'>
				<Form className='form-signup'>
					<h1 className='pd-2'>Sign Up</h1>
					<Row form>
						<Col md={4}>
							<FormGroup>
								<Label for='UserName'>Usuario</Label>
								<Input
									type='text'
									name='UserName'
									id='UserName'
									placeholder='User Name'
									onChange={(e) => {
										let { new_user } = this.state;
										new_user.UserName = e.target.value;
										this.setState({ new_user });
									}}
								/>
							</FormGroup>
						</Col>
						<Col md={4}>
							<FormGroup>
								<Label for='Password'>Password</Label>
								<Input
									type='password'
									name='Password'
									id='Password'
									placeholder='Your Password'
									onChange={(e) => {
										let { new_user } = this.state;
										new_user.Password = e.target.value;
										this.setState({ new_user });
									}}
								/>
							</FormGroup>
						</Col>
						<Col md={4}>
							<FormGroup>
								<Label for='FirstName'>Nombre</Label>
								<Input
									type='text'
									name='FirstName'
									id='FirstName'
									placeholder='Your First Name'
									onChange={(e) => {
										let { new_user } = this.state;
										new_user.FirstName = e.target.value;
										this.setState({ new_user });
									}}
								/>
							</FormGroup>
						</Col>
					</Row>
					<Row form>
						<Col md={4}>
							<FormGroup>
								<Label for='LastName'>Apellido</Label>
								<Input
									type='text'
									name='LastName'
									id='LastName'
									placeholder='Your Last Name'
									onChange={(e) => {
										let { new_user } = this.state;
										new_user.LastName = e.target.value;
										this.setState({ new_user });
									}}
								/>
							</FormGroup>
						</Col>
						<Col md={4}>
							<FormGroup>
								<Label for='Address'>Direccion</Label>
								<Input
									type='text'
									name='Address'
									id='Address'
									placeholder='Your Address'
									onChange={(e) => {
										let { new_user } = this.state;
										new_user.Address = e.target.value;
										this.setState({ new_user });
									}}
								/>
							</FormGroup>
						</Col>
						<Col md={4}>
							<FormGroup>
								<Label for='City'>Ciudad</Label>
								<Input
									type='text'
									name='City'
									id='City'
									placeholder='Your Last Name'
									onChange={(e) => {
										let { new_user } = this.state;
										new_user.City = e.target.value;
										this.setState({ new_user });
									}}
								/>
							</FormGroup>
						</Col>
					</Row>
					<FormGroup>
						<Label for='Phone'>Numero telefónico</Label>
						<Input
							type='text'
							name='Phone'
							id='Phone'
							placeholder='(809)888-8888'
							maxlength='13'
							onChange={(e) => {
								let { new_user } = this.state;
								new_user.Phone = e.target.value;
								this.setState({ new_user });
							}}
							onKeyUp={(e) => {
								e.target.value = e.target.value.replace(
									/^(\d{3})(\d{3})(\d{4})+$/,
									'($1)$2-$3'
								);
							}}
						/>
					</FormGroup>
					<FormGroup>
						<Label for='Email'>Email</Label>
						<Input
							type='email'
							name='Email'
							id='Email'
							placeholder='Example@example.com'
							onChange={(e) => {
								let { new_user } = this.state;
								new_user.Email = e.target.value;
								this.setState({ new_user });
							}}
						/>
					</FormGroup>
					<Row form>
						<Col md={6}>
							<FormGroup>
								<Button
									className='Button btn-block'
									color='primary'
									onClick={this.signin}
								>
									Sign In
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
