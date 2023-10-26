const nextMeetingDayReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_NEXT_MEETING_DAY':
            let date = new Date();
            let dateCopy = new Date(date.getTime());
            const nextMeeting = new Date(dateCopy.setDate(dateCopy.getDate() + ((7 - dateCopy.getDay() + 2) % 7 || 7)));
            return nextMeeting.toLocaleDateString();

        default:
            return state;
    }
}; // nextMeetingDayReducer

export default nextMeetingDayReducer;
