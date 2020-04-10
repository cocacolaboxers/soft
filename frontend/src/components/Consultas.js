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
			ordenes: [],
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
		this.setState({ modalValue: id });
	}

	async componentDidMount() {
		let { ordenes } = this.state;
		await axios
			.get('http://localhost:4000/quickbook/findPurchaseOrder')
			.then((order) => (ordenes = order.data))
			.catch((err) => console.log('Error: ' + err));
		this.setState({ ordenes });
	}

	render() {
		return (
			<div className='container p-4 rounded'>
				<h1>Ordenes</h1>
				<Table bordered hover primary className='table'>
					<thead className='thead-dark'>
						<tr>
							<th>#</th>
							<th>Nombre Cliente</th>
							<th>Nombre Empleado</th>
							<th>Dirección</th>
							<th>Total</th>
							<th>Acción</th>
						</tr>
					</thead>
					<tbody>
						{this.state.ordenes.map((order) => {
							return order.ShipAddr != null ? (
								<tr key={order.Id}>
									<th scope='row'>{order.Id}</th>
									<td>{order.ShipAddr.Line2}</td>
									<td>{order.VendorRef.name}</td>
									<td>{order.ShipAddr.Line3}</td>
									<td>{order.TotalAmt}</td>
									<td onClick={this.clickModal.bind(this, order.Id)}>
										<Button outline color='info' onClick={this.toggle}>
											Ver detalle
										</Button>
									</td>
								</tr>
							) : null;
						})}
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
											{/* <th>Tax</th> */}
											<th>Monto Neto</th>
										</tr>
									</thead>
									<tbody>
										{this.state.ordenes.map((order) => {
											return order.Id === this.state.modalValue ? (
												<React.Fragment key={order.Id}>
													{order.Line.map((line) => (
														<tr key={line.Id}>
															<th scope='row'>{line.Id}</th>
															<td>
																{line.ItemBasedExpenseLineDetail.ItemRef.name}
															</td>
															<td>{line.ItemBasedExpenseLineDetail.Qty}</td>
															<td>
																{line.ItemBasedExpenseLineDetail.UnitPrice.toFixed(
																	2
																)}
															</td>
															{/* <td>
																{line.ItemBasedExpenseLineDetail.TaxCodeRef
																	.value === 'NON'
																	? Number('0').toFixed(2)
																	: null}
															</td> */}
															<td>{line.Amount.toFixed(2)}</td>
														</tr>
													))}
												</React.Fragment>
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
