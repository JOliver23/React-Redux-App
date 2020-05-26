const intitialState = {
    quote: '',
    isFetching: false,
    error: ''
}

export const quoteReducer = (state = intitialState, action) => {
    switch(action.type) {
        
        case 'FETCH_QUOTE-START':
            return {
                ...state,
                isFetching: true
            };
        case 'FETCH_QUOTE_SUCCESS':
            console.log('success', action.payload);
            return {
                ...state,
                isFetching: false,
                quote: action.payload,
                error: ''
            };
        default:
            return state;
    }
};