const currentDateReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CURRENT_DATE':
            console.log('this is the SET_CURRENT_DATE reducer action.payload', action.payload);
            return action.payload[0]

        default:
            return state;
    }
}; // currentDateReducer

export default currentDateReducer;