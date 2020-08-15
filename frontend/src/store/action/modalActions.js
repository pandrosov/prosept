import { 
    SHOW_MODAL, 
    HIDE_MODAL 
} from './actionsTypes';


const showModal = (option) => (dispatch) => {
    dispatch({type: SHOW_MODAL, payload: option})
}

const hideModal = () => (dispatch) => {
    dispatch({type: HIDE_MODAL})
}

export {
    showModal,
    hideModal
}