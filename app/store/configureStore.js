import {createStore} from 'redux';
import rootReducer from '../reducers'

const configureStore = () => {
    const store = createStore(rootReducer, {
        todos: []
    });

    /*store.subscribe(function () {
        console.log( store.getState() );
    });*/
    
    return store;
};


export default configureStore;