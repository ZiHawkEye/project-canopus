import React from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Blog from './Blog';
import Notes from './Notes';
import Signup from './Signup';
import Login from './Login';

export default () => (
	<BrowserRouter>
	<Switch>
		<Route exact={true} path='/' component={Home} />
		<Route path='/about' component={About} />
		<Route path='/blog' component={Blog} />
		<Route path='/notes' component={Notes} />
		<Route path='/signup' component={Signup} />
		<Route path='/login' component={Login} />
	</Switch>
	</BrowserRouter>
);