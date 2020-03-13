import { combineReducers } from 'redux';
import  BasicsReducer  from './basics/basics-reducers.js';
import  EmploymentReducers  from './employment/employment-reducers.js';
import  EducationReducer  from './education/education-reducers.jsx';
import  SkillsReducer  from './skills/skills-reducers.js';

const allReducers = combineReducers({
    BasicsReducer,
    EmploymentReducers,
    EducationReducer,
    SkillsReducer
})

export default allReducers