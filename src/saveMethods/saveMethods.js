export function saveToStorage(name, data){
    var dataToSave = Object.assign({}, data);
    delete dataToSave.EducationReducer.education;
    delete dataToSave.EmploymentReducers.employment;
    delete dataToSave.SkillsReducer.skill;
    return localStorage.setItem(name,JSON.stringify(dataToSave));
}
export function getFromStorage(name){
    return localStorage.getItem(name);
}