import { combineReducers } from 'redux';
import  BasicsReducer  from './basics/basics-reducers.js';
import  EmploymentReducers  from './employment/employment-reducers.js';

const allReducers = combineReducers({
    BasicsReducer,
    EmploymentReducers
})

export default allReducers