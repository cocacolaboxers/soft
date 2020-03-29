import React, { Component } from 'react';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class showBooks extends Component {
	constructor(props) {
		super(props);
		this.state = {
			customer: [],
			redirectP: false,
		};
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

	render() {
		if (this.state.redirectP) {
			return <Redirect to={'/customer'} />;
		}

		return (
			<div>
				<h1>Clientes</h1>
				<div>
					<div className='container p-4 rounded'>
						{this.state.customer.map((customer) => (
							<Row
								onClick={this.cajaClick.bind(this, customer.ID)}
								key={customer.ID}
							>
								<Card body className='rounded'>
									<Row>
										<Col md={4}>
											<CardTitle className='center font-weight-bold'>
												Cliente:
												<div>
													{`${customer.FirstName} ${customer.LastName}`}
												</div>
											</CardTitle>
										</Col>
										<Col md={4}>
											<CardText className='right'>
												<b>Telefono:</b> {customer.Phone}
											</CardText>
											<CardText className='right'>
												<b>Correo:</b> {customer.Email}
											</CardText>
										</Col>
										<Col md={4}>
											<CardText className='right'>
												<b>Vendedor:</b>{' '}
												{`${customer.NameEmployee} ${customer.LastNameEmployee}`}
											</CardText>
											<CardText className='right'>
												<b>Ubicacion:</b> {customer.City}
											</CardText>
										</Col>
									</Row>
								</Card>
							</Row>
						))}
					</div>
				</div>
			</div>
		);
	}
}
