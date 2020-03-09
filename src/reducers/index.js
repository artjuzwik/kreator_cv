import { combineReducers } from 'redux';
import  BasicsReducer  from './basics/basics-reducers.js';
import  EmploymentReducers  from './employment/employment-reducers.js';
import  EducationReducer  from './education/education-reducers.jsx';


const allReducers = combineReducers({
    BasicsReducer,
    EmploymentReducers,
    EducationReducer
})

export default allReducers