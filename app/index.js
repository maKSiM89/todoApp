import React from 'react';
import {render} from 'react-dom';
import configureStore from './store';
import Root from './components/App/app';

import '../assets/scss/structure.scss';

const store = configureStore();

render(
    <Root store={store} />,
    document.getElementById('app')
);