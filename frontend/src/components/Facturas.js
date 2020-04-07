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
			facturas: [],
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
		this.state.modalValue = id;
		console.log(this.state.modalValue);
	}

	async componentDidMount() {
		let { facturas } = this.state;
		await axios
			.get('http://localhost:4000/quickbook/findInvoice')
			.then((fact) => (facturas = fact.data))
			.catch((err) => console.log('Error: ' + err));
		this.setState({ facturas });
	}

	render() {
		return (
			<div className='container p-4 rounded'>
				<h1>Facturas</h1>
				<Table bordered hover primary className='table'>
					<thead className='thead-dark'>
						<tr>
							<th>Número del Documento</th>
							<th>Cliente</th>
							<th>Dirección</th>
							<th>Total</th>
							<th>Acción</th>
						</tr>
					</thead>
					<tbody>
						{this.state.facturas.map((fact) => {
							return fact.ShipAddr != null ? (
								<tr key={fact.Id}>
									<th scope='row'>{fact.DocNumber}</th>
									<td>{fact.CustomerRef.name}</td>
									<td>{fact.ShipAddr.Line1}</td>
									<td>{fact.TotalAmt}</td>
									<td onClick={this.clickModal.bind(this, fact.Id)}>
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
											<th>Tax</th>
											<th>Monto Neto</th>
										</tr>
									</thead>
									<tbody>
										{this.state.facturas.map((fact) => {
											return fact.Id === this.state.modalValue ? (
												<React.Fragment key={fact.Id}>
													{fact.Line.map((line) => {
														return line.SalesItemLineDetail != null ? (
															<tr key={line.Id}>
																<th scope='row'>{line.Id}</th>
																<td>{line.SalesItemLineDetail.ItemRef.name}</td>
																<td>{line.SalesItemLineDetail.Qty}</td>
																<td>
																	{line.SalesItemLineDetail.UnitPrice.toFixed(
																		2
																	)}
																</td>
																<td>
																	{line.SalesItemLineDetail.TaxCodeRef.value ===
																	'NON'
																		? Number('0').toFixed(2)
																		: Number('18').toFixed(2)}
																</td>
																<td>{line.Amount.toFixed(2)}</td>
															</tr>
														) : null;
													})}
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
