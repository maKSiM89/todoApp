import * as actions from '../constants';

const todos = (state = [], action) => {
    let nextState;

    switch (action.type) {
        case actions.ADD_TODO_ITEM:
            nextState = [
                ...state, {
                    text: action.text,
                    completed: false
                }
            ];
            break;
        case actions.REMOVE_TODO_ITEM:
            nextState = [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
            break;
        case actions.TOGGLE_TODO_ITEM:
            nextState = state.map((todo, index) => {
                console.log( index );
                if (action.index === index) {
                    return Object.assign({}, todo, {completed: !todo.completed})
                }

                return todo;
            });
            break;
        default:
            nextState = state;
    }

    return nextState;
}

export default todos;