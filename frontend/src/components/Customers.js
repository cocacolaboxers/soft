import React, { Component } from 'react';
import {
	Table,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from 'reactstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class showBooks extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			customer: [],
			redirectP: false,
			isOpen: false,
			modal: false,
			modalValue: 1,
		};
	}

	toggle() {
		this.setState({
			modal: !this.state.modal,
			isOpen: !this.state.isOpen,
		});
	}

	componentDidMount() {
		this.getCustomer();
	}

	getCustomer = async () => {
		const res = await axios.get('http://localhost:4000/customer/findView');
		this.setState({ customer: res.data });
	};

	cajaClick(id) {
		this.setState({ redirectP: true });
		sessionStorage.setItem('idCustomer', id);
	}

	clickModal(id) {
		console.log(id);
		this.setState({ modalValue: id });
	}

	render() {
		if (this.state.redirectP) {
			return <Redirect to={'/customer'} />;
		}

		return (
			<div>
				<h1>Clientes asignados</h1>
				<div>
					<div className='container p-4 rounded'>
						<Table bordered hover className='table'>
							<thead className='thead-dark'>
								<tr>
									<th>#</th>
									<th>Cliente</th>
									<th>Telefono</th>
									<th>Correo</th>
									<th>Vendedor</th>
									<th>Ubicación</th>
									<th>Acción</th>
								</tr>
							</thead>
							<tbody>
								{this.state.customer.map((cust) => (
									<tr key={cust.ID}>
										<th scope='row'>{cust.ID}</th>
										<td>{`${cust.FirstName} ${cust.LastName}`}</td>
										<td>{cust.Phone}</td>
										<td>{cust.Email}</td>
										<td>{`${cust.NameEmployee} ${cust.LastNameEmployee}`}</td>
										<td>{cust.City}</td>
										<td onClick={this.clickModal.bind(this, cust.ID)}>
											<Button outline color='info' onClick={this.toggle}>
												Ver detalle
											</Button>
										</td>
									</tr>
								))}
								<Modal isOpen={this.state.modal} toggle={this.toggle}>
									<ModalHeader toggle={this.toggle}>
										Detalle de la orden
									</ModalHeader>
									<ModalBody>
										<Table>
											<thead>
												<tr>
													<th>#</th>
													<th>Tarea asignada</th>
												</tr>
											</thead>
											<tbody>
												{this.state.customer.map((cust) => {
													return cust.ID === this.state.modalValue ? (
														<tr key={cust.ID}>
															<th scope='row'>{cust.ID}</th>
															<th scope='row'>{cust.DescriptionTask}</th>
														</tr>
													) : null;
												})}
											</tbody>
										</Table>
									</ModalBody>
									<ModalFooter>
										<Button color='info' onClick={this.toggle}>
											Cancel
										</Button>
									</ModalFooter>
								</Modal>
							</tbody>
						</Table>
					</div>
				</div>
			</div>
		);
	}
}
