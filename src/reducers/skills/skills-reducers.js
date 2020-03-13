const basicSkillState = {
    skillArr:[],
    skill:{
        mark:1
    }
}

const SkillsReducer = (state = basicSkillState, action) => {
    switch(action.type) {
        case 'ADD_SKILL':
            return { ...state, skill: {...state.skill, name: action.payload } };
        case 'ADD_MARK':
            return { ...state, skill: {...state.skill, mark: action.payload } };
        case 'ADD_SKILL_OBJ':
            return { ...state, skillArr: [...state.skillArr,action.payload] };
        case 'REMOVE_SKILL_OBJ':
            delete state.skillArr[action.payload];
            return { ...state, skillArr: [...state.skillArr ]};
        default:
            return state;
    }
}

export default SkillsReducer;