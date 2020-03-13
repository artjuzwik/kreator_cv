export const handleNameInput = event => ({
    type: 'ADD_NAME', payload: event.target.value
});
export const handleSecondNameInput = event => ({
    type: 'ADD_SECONDNAME', payload: event.target.value
});
