import { 
    SHOW_MODAL,
    HIDE_MODAL 
} from './../action/actionsTypes';


function modalReducer(state = null, action) {
    switch (action.type) {
        case SHOW_MODAL: 
            return action.payload
        case HIDE_MODAL:
            return null
        default:
            return state
    }
}

export { modalReducer }
