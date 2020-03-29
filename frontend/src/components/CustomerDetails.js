import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

export default class Libro extends Component {
	constructor(props) {
		super(props);
		this.state = {
			customer: [],
			CustomerModal: true,
			redirectP: false,
		};
	}

	componentDidMount() {
		this.getCustomer();
	}

	toggleCustomerModal = () => {
		this.setState({
			CustomerModal: !this.state.CustomerModal,
			redirectP: true,
		});
	};

	getCustomer = async () => {
		await axios
			.post('http://localhost:4000/customer/findView', {
				ID: sessionStorage.getItem('idCustomer'),
			})
			.then((res) => {
				console.log(res.data);
				this.setState({ customer: res.data });
			});
	};

	render() {
		if (this.state.redirectP) {
			return <Redirect to={'/'} />;
		}

		return <div>{this.state.customer.FirstName}</div>;
	}
}
