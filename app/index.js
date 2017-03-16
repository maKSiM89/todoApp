import React from 'react';
import {render} from 'react-dom';
import configureStore from './store';
import Root from './components/app';
import 'babel-polyfill';

import '../assets/scss/structure.scss';
import '../assets/css/vendor/mui.min.css';

const store = configureStore();

render(
    <Root store={store} />,
    document.getElementById('app')
);