const selectedProductReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SELECTED_PRODUCT':
            console.log('this is the SET_SELECTED_PRODUCT reducer action.payload', action.payload);
            return action.payload

        default:
            return state;
    }
}; // selectedProductReducer

export default selectedProductReducer;