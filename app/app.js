import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import {AppContainer} from './containers';
import firebase from 'firebase';
import {FIREBASE_INIT_CONFIG} from './config';

//firebase.initializeApp(FIREBASE_INIT_CONFIG);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('app')
);

store.subscribe(function () {
    console.log( store.getState() );
});