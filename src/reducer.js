const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'RND':
            return state + action.payload;
        case 'INC':
            return ++state;
        case 'DEC':
            return --state;
        default:
            return state;
    }
};

export default reducer; 