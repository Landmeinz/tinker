const messagesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MESSAGES':
            console.log('this is the SET_MESSAGES reducer action.payload', action.payload);
            return action.payload

        default:
            return state;
    }
}; // messagesReducer

export default messagesReducer;