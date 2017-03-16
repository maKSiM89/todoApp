import React from 'react';
import {connect} from 'react-redux';
import {TodoActions} from './../../actions';
import {TodoList} from '../../components';
import {bindActionCreators} from 'redux';

const mapStateToProps = (store) => ({
    todos: store.todos
});

const mapDispatchToProps = (dispatch) => ({
   actions: bindActionCreators(TodoActions, dispatch)
});

const TodoListContainer = ({todos, actions}) => (
	<TodoList todos={todos} actions={actions}/>
);

export default connect(
    mapStateToProps, mapDispatchToProps
)(TodoListContainer);