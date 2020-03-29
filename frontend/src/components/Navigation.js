import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	Button,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Input,
	FormGroup,
} from 'reactstrap';

export default class Navegation extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			dropdownOpen: false,
			redirect: false,
			isOpen: false,
		};
	}

	toggle() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen,
			isOpen: !this.state.isOpen,
		});
	}

	logout = (e) => {
		e.preventDefault();
		sessionStorage.setItem('token', '');
		sessionStorage.clear();
		this.setState({ redirect: true });
		console.log('User logged out');
	};

	search = (e) => {
		console.log('No disponible');
	};

	render() {
		if (sessionStorage.getItem('token')) {
			return (
				<div>
					<Navbar color='dark' dark expand='md'>
						<NavbarBrand href='/'>SunSoft</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className='mr-auto' navbar>
								<UncontrolledDropdown nav inNavbar>
									<DropdownToggle nav caret>
										Administracion
									</DropdownToggle>
									<DropdownMenu right>
										<DropdownItem tag={Link} to='/signup'>
											Registro de usuario
										</DropdownItem>
										<DropdownItem tag={Link} to='/role'>
											Asignar roles
										</DropdownItem>
									</DropdownMenu>
								</UncontrolledDropdown>
								<UncontrolledDropdown nav inNavbar>
									<DropdownToggle nav caret>
										Procesos
									</DropdownToggle>
									<DropdownMenu right>
										<DropdownItem tag={Link} to='/assign'>
											Asignar clientes
										</DropdownItem>
									</DropdownMenu>
								</UncontrolledDropdown>
								<UncontrolledDropdown nav inNavbar>
									<DropdownToggle nav caret>
										Consultas
									</DropdownToggle>
									<DropdownMenu right>
										<DropdownItem tag={Link} to='/consultas'>
											Comprobantes
										</DropdownItem>
									</DropdownMenu>
								</UncontrolledDropdown>
							</Nav>
							<FormGroup className='form-inline my-2 my-lg-0'>
								<Input
									className='form-control mr-sm-2'
									type='search'
									placeholder='Search'
									aria-label='Search'
									onChange={this.search}
								/>
								<Button outline color='success' onClick={this.logout}>
									Logout
								</Button>
							</FormGroup>
						</Collapse>
					</Navbar>
				</div>
			);
		} else {
			return <Redirect to={'/login'} />;
		}
	}
}
