import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class Navegation extends Component {
	state = {
		eRead: '',
		eAd: '',
		redirect: false,
		ae: 'false',
		dnv: 'collapse navbar-collapse',
	};

	componentDidMount() {
		if (sessionStorage.getItem('token')) {
			console.log('User logged in');
		} else {
			this.setState({ redirect: true });
		}
	}
	//logout user
	logout = (e) => {
		e.preventDefault();
		sessionStorage.setItem('token', '');
		sessionStorage.clear();
		this.setState({ redirect: true });
		console.log('User logged out');
	};
	//navegation bar
	navbarT = (e) => {
		e.preventDefault();
		if (this.state.ae === 'false') {
			this.setState({
				ae: 'true',
				dnv: 'collapse navbar-collapse show',
			});
		} else {
			this.setState({
				ae: 'false',
				dnv: 'collapse navbar-collapse',
			});
		}
	};

	render() {
		if (this.state.redirect) {
			return <Redirect to={'/login'} />;
		}

		return (
			<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
				<Link className='navbar-brand' to='/'>
					SunSoft
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded={this.state.ae}
					aria-label='Toggle navigation'
					onClick={this.navbarT}
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className={this.state.dnv} id='navbarNav'>
					<ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
						<li>
							<Link className='nav-link' to='/'>
								Administracion
							</Link>
						</li>
						<li>
							<Link className='nav-link' to='/'>
								Procesos
							</Link>
						</li>
						<li>
							<Link className='nav-link' to='/'>
								Consultas
							</Link>
						</li>
					</ul>
					<form className='form-inline my-2 my-lg-0'>
						<button
							className='btn btn-outline-success my-2 my-sm-0'
							color='success'
							type='submit'
							onClick={this.logout}
						>
							Logout
						</button>
					</form>
				</div>
			</nav>
		);
	}
}
