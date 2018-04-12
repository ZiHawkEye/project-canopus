import React from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Blog from './Blog';

export default () => (
	<BrowserRouter>
	<Switch>
		<Route exact={true} path='/' component={Home} />
		<Route path='/about' component={About} />
		<Route path='/blog' component={Blog} />
	</Switch>
	</BrowserRouter>
);