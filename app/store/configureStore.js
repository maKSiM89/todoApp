import {createStore, compose} from 'redux';
import rootReducer from '../reducers'
import {reduxReactFirebase} from 'redux-react-firebase';
import {FIREBASE_INIT_CONFIG} from '../config';

const configureStore = () => {
    const createStoreWithMiddleware = compose(
        reduxReactFirebase(FIREBASE_INIT_CONFIG)
    )(createStore);
    
    const store = createStoreWithMiddleware(rootReducer, {
        todos: []
    });

    store.subscribe(function () {
        console.log( store.getState() );
    });
    
    return store;
};


export default configureStore;