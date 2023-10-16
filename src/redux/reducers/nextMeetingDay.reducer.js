const nextMeetingDayReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_NEXT_MEETING_DAY':
            // console.log('this is the SET_NEXT_MEETING_DAY reducer action.payload', action.payload);
            return action.payload

        default:
            return state;
    }
}; // nextMeetingDayReducer

export default nextMeetingDayReducer;
