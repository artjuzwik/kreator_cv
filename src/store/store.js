import { createStore } from 'redux';
import initState from './initState.js'
import allReducers from '../reducers/index.js';

export const store = createStore(allReducers, initState);