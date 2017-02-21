import {combineReducers} from 'redux';
import todos from './todos.reducer';
import {firebaseStateReducer as firebase} from 'redux-react-firebase';

const rootReducer = combineReducers({
    todos,
    firebase
});

export default rootReducer;