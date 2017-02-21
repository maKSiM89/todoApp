import React from 'react';
import {Provider} from 'react-redux';
import Router from 'react-router/lib/Router';
import hashHistory from 'react-router/lib/hashHistory';
import routes from '../../routes';

const Root = ({ store }) => (
	<Provider store={store}>
		<Router history={hashHistory}>
			{routes}
		</Router>
	</Provider>
);

export default Root;