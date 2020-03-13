const initState = {
    education:{
        school:'',
        direction:'',
        level:'',
        timeFrom:'',
        timeTo:''
    },
    educationArr:[]
}
const EducationReducer = (state = initState, action) => {
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
        case 'ADD_EDUCATION_OBJ':
            return { ...state, educationArr: [...state.educationArr,action.payload] };
        case 'REMOVE_EDUCATION_OBJ':
            delete state.educationArr[action.payload];
            return { ...state, educationArr: [...state.educationArr ]};
        default:
            return state;
    }
}

export default EducationReducer;