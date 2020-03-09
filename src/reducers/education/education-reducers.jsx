const EducationReducer = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_SCHOOL':
            return { ...state, education: {...state.education, school: action.payload } };
        case 'ADD_DIRECTION':
            return { ...state, education: {...state.education, direction: action.payload } };
        case 'ADD_LEVEL':
            return { ...state, education: {...state.education, level: action.payload} };
        case 'ADD_TIME_FROM':
            return { ...state, education: {...state.education, timeFrom: action.payload} };
        case 'ADD_TIME_TO':
            return { ...state, education: {...state.education, timeTo: action.payload} };
        default:
            return state;
    }
}

export default EducationReducer;