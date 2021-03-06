import {ACTION, IAction, IState} from "../types";

const initialState:IState = {
    url: '',
    likeDel: {},
    loading: false,
    errors: false
}

export const ImgReducer = (state = initialState, action:IAction) => {
    switch (action.type) {
        case ACTION.LOAD_IMG:
            return {
                url: '',
                loading: true,
                errors: false
            }
        case ACTION.LOAD_IMG_SUCCESS:
            return {
                url: action.url,
                loading: false,
                errors: false
            }
        case ACTION.LOAD_IMG_FAILED:
            return {
                url: '',
                loading: false,
                errors: true
            }
        case ACTION.LOAD_LIKE_DEL:
            return {
                likeDel: {},
                loading: true,
                errors: false,
            }
        case ACTION.LOAD_LIKE_DEL_SUCCESS:
            return {
                likeDel: action.likeDel,
                loading: false,
                errors: true,
            }
        case ACTION.LOAD_LIKE_DEL_FAILED:
            return {
                likeDel: {},
                loading: false,
                errors: true,
            }
        default: return state
    }
}


