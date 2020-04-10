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
			user: [],
			temp_user: [],
			new_user: {
				ID: '',
				FirstName: '',
				LastName: '',
				Email: '',
				Address: '',
				City: '',
				UserName: '',
				Password: '',
				Language: 'ES',
				Phone: '',
			},
			cancel_redirec: false,
			redirect: false,
		};
	}

	async componentDidMount() {
		if (sessionStorage.getItem('token')) {
			console.log('User logged in');
			let { user, new_user, temp_user } = this.state;
			await axios.get('http://localhost:4000/employee/find').then((res) => {
				temp_user = res.data;
			});
			await axios
				.get('http://localhost:4000/quickbook/findEmployee')
				.then((res) => {
					user = res.data;
				});

			let isRegister = false;
			user = user.filter((user) => {
				temp_user.map((temp_user1) => {
					if (temp_user1.FirstName == user.GivenName) isRegister = true;
				});
				if (!isRegister) {
					return user;
				} else {
					isRegister = false;
					return null;
				}
			});

			if (user.length > 0) {
				new_user.ID = parseInt(user[0].Id);
				new_user.FirstName = user[0].GivenName;
				new_user.LastName = user[0].FamilyName;
				new_user.Email = user[0].PrimaryEmailAddr.Address;
				new_user.Address = user[0].PrimaryAddr.Line1;
				new_user.City = user[0].PrimaryAddr.City;
				new_user.Phone = user[0].PrimaryPhone.FreeFormNumber;
			}

			this.setState({ user, new_user, temp_user });
		} else {
			this.setState({ redirect: true });
		}
	}

	//register user
	signin = async (e) => {
		e.preventDefault();
		let { new_user } = this.state;
		this.setState({ new_user });
		await axios
			.post('http://localhost:4000/employee/saveEmployee', this.state.new_user)
			.then((response) => {
				console.log(response.data);
				this.setState({
					cancel_redirec: true,
					new_user: {
						ID: '',
						FirstName: '',
						LastName: '',
						Email: '',
						Address: '',
						City: '',
						UserName: '',
						Password: '',
						Language: 'ES',
						Phone: '',
					},
				});
			});
	};

	cancel = (e) => {
		e.preventDefault();
		this.setState({ cancel_redirec: true });
	};

	handdleIDChange = (e) => {
		let { new_user, user } = this.state;
		user.map((users) => {
			if (users.Id == parseInt(e.target.value)) {
				new_user.ID = parseInt(users.Id);
				new_user.FirstName = users.GivenName;
				new_user.LastName = users.FamilyName;
				new_user.Email = users.PrimaryEmailAddr.Address;
				new_user.Address = users.PrimaryAddr.Line1;
				new_user.City = users.PrimaryAddr.City;
				new_user.Phone = users.PrimaryPhone.FreeFormNumber;
			}
		});
		this.setState({ new_user });
	};

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
								<Label for='User'>Nombre</Label>
								<Input
									type='select'
									name='select'
									id='User'
									onChange={this.handdleIDChange}
								>
									{this.state.user.map((user) => (
										<option key={user.Id} value={user.Id}>
											{user.DisplayName}
										</option>
									))}
								</Input>
							</FormGroup>
						</Col>
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
					</Row>
					<Row form>
						<Col md={6}>
							<FormGroup>
								<Label for='Address'>Direccion</Label>
								<Input
									disabled
									type='text'
									name='Address'
									id='Address'
									placeholder='Your Address'
									value={this.state.new_user.Address}
								/>
							</FormGroup>
						</Col>
						<Col md={6}>
							<FormGroup>
								<Label for='City'>Ciudad</Label>
								<Input
									disabled
									type='text'
									name='City'
									id='City'
									placeholder='Your Last Name'
									value={this.state.new_user.City}
								/>
							</FormGroup>
						</Col>
					</Row>
					<FormGroup>
						<Label for='Phone'>Numero telefónico</Label>
						<Input
							disabled
							type='text'
							name='Phone'
							id='Phone'
							placeholder='(809)888-8888'
							maxlength='13'
							value={this.state.new_user.Phone}
						/>
					</FormGroup>
					<FormGroup>
						<Label for='Email'>Email</Label>
						<Input
							disabled
							type='email'
							name='Email'
							id='Email'
							placeholder='Example@example.com'
							value={this.state.new_user.Email}
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
