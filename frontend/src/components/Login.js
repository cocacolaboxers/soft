import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import '../styles/Login.css';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				UserName: '',
				Password: '',
			},
			username: '',
			password: '',
			redirec: false,
			redirectS: false,
		};
	}
	//event of targets
	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	//this prove if the user is admin or comun user
	login = async (e) => {
		e.preventDefault();
		let { user } = this.state;
		user.UserName = this.state.username;
		user.Password = this.state.password;
		this.setState({ user });
		await axios
			.post('http://localhost:4000/login', this.state.user)
			.then((res) => {
				if (res.data.accessToken != null) {
					sessionStorage.setItem('token', res.data.accessToken);
					this.setState({ redirec: true });
				}
			})
			.catch((err) => console.log('Error: ' + err));
	};

	//render components
	render() {
		if (this.state.redirec && sessionStorage.getItem('token')) {
			return <Redirect to={'/'} />;
		}

		return (
			<div className='container h-100 d-flex justify-content-center align-items-center login'>
				<form className='form-signin'>
					<h1>Login</h1>
					<div className='form-group'>
						<label htmlFor='username'>Username</label>
						<input
							type='text'
							id='username'
							placeholder='username'
							name='username'
							className='form-control'
							onChange={this.onChange}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							id='password'
							placeholder='password'
							name='password'
							className='form-control'
							onChange={this.onChange}
						/>
					</div>
					<div className='row'>
						<div className='col-xs-12 col-sm-12 col-md-12'>
							<input
								type='submit'
								name='login'
								value='login'
								className='btn btn-primary btn-block'
								onClick={this.login}
							/>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
