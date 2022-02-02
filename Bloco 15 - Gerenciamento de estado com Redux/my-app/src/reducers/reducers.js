const initialState = { description: '', list: [] }


const Reducers = (state = initialState, action) => {

    switch (action.type) {
        case 'TODO_LIST':
            return {
                ...state,
                list: [...state.list, state.description]
            }
        case 'CHANGE_INPUT_LIST':
            return {
                ...state,
                description: action.payload
            }
        default:
            return state
    }
}

export default Reducers