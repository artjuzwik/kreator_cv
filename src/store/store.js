import { createStore } from 'redux';
import allReducers from '../reducers/index.js';
import {getFromStorage} from '../saveMethods/saveMethods.js';

let savedData = JSON.parse(getFromStorage('cv-data'));

export const store = createStore(allReducers, savedData || {} );