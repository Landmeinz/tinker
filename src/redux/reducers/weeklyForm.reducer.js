const weeklyFormReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_WEEKLY_FORM':
            console.log('this is the SET_WEEKLY_FORM reducer action.payload', action.payload);
            return action.payload

        default:
            return state;
    }
}; // messagesReducer

export default weeklyFormReducer;