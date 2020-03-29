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

export default class Consultas extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			consultas: [],
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

	clickModal(id) {
		console.log(id);
		this.setState({ modalValue: id });
	}

	async componentDidMount() {
		let { consultas } = this.state;
		await axios
			.get('http://localhost:4000/orden/findConsulta')
			.then((consul) => (consultas = consul.data))
			.catch((err) => console.log('Error: ' + err));
		this.setState({ consultas });
	}

	render() {
		return (
			<div className='container p-4 rounded'>
				<h1>Consultas</h1>
				<Table bordered hover primary className='table'>
					<thead className='thead-dark'>
						<tr>
							<th>#</th>
							<th>Nombre Cliente</th>
							<th>Nombre Empleado</th>
							<th>Rol del empleado</th>
							<th>Confirmado</th>
							<th>Método de pago</th>
							<th>Acción</th>
						</tr>
					</thead>
					<tbody>
						{this.state.consultas.map((consul) => (
							<tr key={consul.ID}>
								<th scope='row'>{consul.ID}</th>
								<td>{`${consul.CustName} ${consul.CustLastName}`}</td>
								<td>{`${consul.EmplName} ${consul.EmplLastName}`}</td>
								<td>{consul.Role}</td>
								<td>{consul.Confirmed === 0 ? 'No recibido' : 'Recibido'}</td>
								<td>{consul.PaymentMethod}</td>
								<td onClick={this.clickModal.bind(this, consul.ID)}>
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
											<th>Artículo</th>
											<th>Cantidad</th>
											<th>Monto Bruto</th>
											<th>Tax</th>
											<th>Monto Neto</th>
										</tr>
									</thead>
									<tbody>
										{this.state.consultas.map((consultas) => {
											return consultas.ID === this.state.modalValue ? (
												<tr key={consultas.ID}>
													<th scope='row'>{consultas.ID}</th>
													<td>{consultas.ItemName}</td>
													<td>{consultas.Quantity}</td>
													<td>{consultas.MontoBruto.toFixed(2)}</td>
													<td>{consultas.Valor.toFixed(2)}</td>
													<td>{consultas.MontoNeto.toFixed(2)}</td>
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
		);
	}
}
