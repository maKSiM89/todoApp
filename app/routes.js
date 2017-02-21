import React from 'react';

import {AppContainer, TodoListContainer} from './containers';
import {Admin, TodoList} from './components';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';

export default (
	<Route path="/" component={AppContainer}>
		<IndexRoute component={TodoListContainer}/>
		<Route path="admin" component={Admin} />
		<Route path="todos" component={TodoListContainer} />
	</Route>
);