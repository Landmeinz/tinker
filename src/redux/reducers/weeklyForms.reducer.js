const weeklyFormReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_WEEKLY_FORMS':
            // console.log('this is the SET_WEEKLY_FORMS reducer action.payload', action.payload);
            return action.payload

        default:
            return state;
    }
}; // messagesReducer

export default weeklyFormReducer;