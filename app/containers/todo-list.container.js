import React from 'react';
import {connect} from 'react-redux';
import {TodoActions} from '../actions';
import {TodoList} from '../components';
import {bindActionCreators} from 'redux';

const mapStateToProps = (store) => ({
    todos: store.todos,
    firebase: store.firebase
});

const mapDispatchToProps = (dispatch) => ({
   actions: bindActionCreators(TodoActions, dispatch)
});

const TodoListContainer = ({todos, actions, firebase}) => (
	<TodoList todos={todos} actions={actions} firebase={firebase}/>
);

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);