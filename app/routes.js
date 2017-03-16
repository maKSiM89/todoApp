import React from 'react';

import {AppContainer, TodoListContainer} from './containers';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';

export default (
	<Route path="/" component={AppContainer}>
		<IndexRoute component={TodoListContainer}/>
		<Route path="todos" component={TodoListContainer} />
	</Route>
);