import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/* Components */
import Navigation from './components/Navigation';
import Login from './components/Login';

function App() {
	return (
		<Router>
			<Route path='/' exact component={Navigation} />
			<Route path='/login' exact component={Login} />
		</Router>
	);
}

export default App;
