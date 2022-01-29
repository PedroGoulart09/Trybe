const initialState = {
    min: 1,
    max: 10,
}


export const numberReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW_NUMBER_MIN':
            return {
                ...state,
                min: action.payload
            }
        case 'NEW_NUMBER_MAX':
            return {
                ...state,
                max: action.payload
            }
        default:
            return state          
    }
}

