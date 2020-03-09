export const handleTimeFromInput = evt => ({
    type: 'ADD_TIME_FROM', payload: evt.target.value
});
export const handleTimeToInput = evt => ({
    type: 'ADD_TIME_TO', payload: evt.target.value
})
export const handleTimeToNowInput = value => ({
    type: 'ADD_TIME_TO', payload: value
})