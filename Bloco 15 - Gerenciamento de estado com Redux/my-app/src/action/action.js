export const InputList = () => ({
    type: 'TODO_LIST'
})

export const ChangeInputList = (event) => ({
    type: 'CHANGE_INPUT_LIST',
    payload: event.target.value
})