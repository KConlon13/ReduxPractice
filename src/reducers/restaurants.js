const restaurantsReducer = (state = [], action) => {

    switch (action.type) {
        case 'RESTAURANT':
            return state
        default: 
            return state;
    }
}

export default restaurantsReducer;