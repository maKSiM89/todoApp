import React from 'react';
import {connect} from 'react-redux';
import {TodoActions} from '../actions';
import {TodoList} from '../components';
import {bindActionCreators} from 'redux';

const mapStateToProps = (state) => ({
    todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
   actions: bindActionCreators(TodoActions, dispatch)
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default AppContainer;