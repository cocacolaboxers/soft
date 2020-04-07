import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/* Components */
import Navigation from './components/Navigation';
import Login from './components/Login';
import Register from './components/Register';
import RoleAssign from './components/RoleAssign';
import Customer from './components/Customers';
import CustomerView from './components/CustomerDetails';
import CustomerAssign from './components/CustomerAssign';
import Consultas from './components/Consultas';
import Facturas from './components/Facturas';

function App() {
	return (
		<Router>
			<Route path='/' component={Navigation} />
			<Route path='/login' exact component={Login} />
			<Route path='/signup' exact component={Register} />
			<Route path='/role' exact component={RoleAssign} />
			<Route path='/' exact component={Customer} />
			<Route path='/customer' exact component={CustomerView} />
			<Route path='/assign' exact component={CustomerAssign} />
			<Route path='/consultas' exact component={Consultas} />
			<Route path='/facturas' exact component={Facturas} />
		</Router>
	);
}

export default App;
