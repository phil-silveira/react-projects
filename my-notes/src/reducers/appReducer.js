const initialState = {
    text: 'digite sua anotação'
}

export default (state = initialState, action) => {
    switch(action.type){
    case 'CHANGE_TEXT':
        return action.payload
    default:
        return state
    }
}