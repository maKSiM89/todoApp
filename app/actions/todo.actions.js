import * as types from '../constants';

export const addTodoItem = (text) => ({
    type: types.ADD_TODO_ITEM,
    text: text
});

export const removeTodoItem = (index) => ({
    type: types.REMOVE_TODO_ITEM,
    index
});

export const toggleTodoItem = (index) => ({
    type: types.TOGGLE_TODO_ITEM,
    index
});