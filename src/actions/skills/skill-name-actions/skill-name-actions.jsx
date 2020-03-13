export const handleSkillInput = evt => ({
    type: 'ADD_SKILL', payload: evt.target.value
});
export const handleMarkInput = value => ({
    type: 'ADD_MARK', payload: value
});