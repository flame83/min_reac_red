import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import allReducers from './Reducers';

const store = createStore(allReducers);

ReactDom.render(<h1>xxx222444x</h1>, document.getElementById('app'));