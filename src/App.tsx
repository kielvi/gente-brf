import './assets/scss/App.scss'
import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/navbar/';

import Home from './modules/home';
import IdBRF from './modules/id-brf/';
import Profile from './modules/profile/';
import Password from './modules/password/';
import ServiceNow from './modules/service-now/';
import StateCall from './modules/service-now/states';

export default () => (

	<Router>
		<Navbar />

		<Route exact path='/' component={Home} />
		<Route path='/id-brf' component={IdBRF} />
		<Route path='/seus-dados' component={Profile} />
		<Route path='/registrar-senha' component={Password} />
		<Route path="/aguarde" component={ServiceNow} />
		<Route path="/sucesso" component={StateCall} />
		<Route path="/erro" component={StateCall} />
	</Router>
)