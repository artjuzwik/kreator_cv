const initState2 = {
    employment:{
        company: '',
        position:'',
        www:'',
        timeFrom:'',
        timeTo:'',
        description:'',
    },
    employmentArr: []
};
const EmploymentReducer = (state = initState2, action) => {
    switch(action.type) {
        case 'ADD_COMPANY':
            return { ...state, employment: {...state.employment, company: action.payload } };
        case 'ADD_POSITION':
            return { ...state, employment: {...state.employment, position: action.payload } };
        case 'ADD_WWW':
            return { ...state, employment: {...state.employment, www: action.payload} };
        case 'ADD_TIME_FROM':
            return { ...state, employment: {...state.employment, timeFrom: action.payload} };
        case 'ADD_TIME_TO':
            return { ...state, employment: {...state.employment, timeTo: action.payload} };
        case 'ADD_DESCRIPTION':
            return { ...state, employment: {...state.employment, description: action.payload}};
        case 'ADD_COMPANY_OBJ':
            return { ...state, employmentArr: [...state.employmentArr,action.payload] };
        case 'REMOVE_COMPANY_OBJ':
            delete state.employmentArr[action.payload];
            return { ...state, employmentArr: [...state.employmentArr ]};
        default:
            return state;
    }
}

export default EmploymentReducer;