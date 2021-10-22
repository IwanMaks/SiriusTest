export type IState = {
    url: string,
    likeDel: Object | undefined,
    loading: boolean,
    errors: boolean
}

export type IAction = {
    type: string,
    url: string | undefined,
    likeDel: Object | undefined
}

export type AppImageType = {
    fullImg: string,
    smallImg: string,
    id: string | number
}

export const ACTION = {
    LOAD_IMG: 'LOAD_IMG',
    LOAD_IMG_SUCCESS: 'LOAD_IMG_SUCCESS',
    LOAD_IMG_FAILED: 'LOAD_IMG_FAILED',
    FETCH_IMG: 'FETCH_IMG',

    LOAD_LIKE_DEL: 'LOAD_LIKE_DEL',
    LOAD_LIKE_DEL_SUCCESS: 'LOAD_LIKE_DEL_SUCCESS',
    LOAD_LIKE_DEL_FAILED: 'LOAD_LIKE_DEL_FAILED',
    FETCH_LIKE_DEL: 'FETCH_LIKE_DEL',

    SET_LIKE_DEL: 'SET_LIKE_DEL',
    SET_LIKE_DEL_SUCCESS: 'SET_LIKE_DEL_SUCCESS',
    SET_LIKE_DEL_FAILED: 'SET_LIKE_DEL_FAILED',
    FETCH_SET_LIKE_DEL: 'FETCH_SET_LIKE_DEL'
}
