// const BasicsReducer = (state = {}, action) => {
//     switch (action.type) {
//         case 'ADD_NAME':
//             return { ...state, basic: {...state.basic, name: action.payload} };
//         case 'ADD_SECONDNAME':
//             return { ...state, basic: {...state.basic, secondName: action.payload} };
//         case 'ADD_IMAGE':
//             return { ...state, basic: { ...state.basic, photoUrl: action.payload } }
//         case 'ADD_EMAIL':
//             return { ...state, basic: {...state.basic, email: action.payload} };
//         case 'ADD_PHONENUMBER':
//             return { ...state, basic: {...state.basic, phoneNumber: action.payload}};
//         default:
//             return state;
//     }
// };

// export default BasicsReducer

const EmploymentReducer = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_COMPANY':
            return { ...state, employment: {...state.employment, company: action.payload } };
        case 'ADD_POSITION':
            return { ...state, employment: {...state.employment, position: action.payload } };
        case 'ADD_WWW':
            return { ...state, employment: {...state.employment, www: action.payload} };
        case 'ADD_TIME':
            return { ...state, employment: {...state.employment, time: action.payload} };
        case 'ADD_DESCRIPTION':
            return { ...state, employment: {...state.employment, description: action.payload}};
        default:
            return state;
    }
}

export default EmploymentReducer;