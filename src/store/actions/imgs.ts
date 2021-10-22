//Запрос картинок с api
import {ACTION} from "../types";

export const loadImg = () => {
    return {type: ACTION.LOAD_IMG}
}

export const loadImgSuccess = (data: any) => {
    return {type: ACTION.LOAD_IMG_SUCCESS, url: data.map((item:any) => (
        {
            id: item.id,
            smallImg: item.src.tiny,
            fullImg: item.src.large2x,
        }
        ))}
}

export const loadImgError = () => {
    return {type: ACTION.LOAD_IMG_FAILED}
}

export const fetchImg = () => {
    return {type: ACTION.FETCH_IMG}
}

//Запрос объекта о удалённых и лайкнутых фото
export const getLikeDelImg = () => {
    return {type: ACTION.LOAD_LIKE_DEL}
}

export const getLikeDelImgSuccess = (data: any) => {
    return {type: ACTION.LOAD_LIKE_DEL_SUCCESS, likeDel: data}
}

export const getLikeDelImgError = () => {
    return {type: ACTION.LOAD_LIKE_DEL_FAILED}
}

export const fetchLikeDel = () => {
    return {type: ACTION.FETCH_LIKE_DEL}
}

//Установка новых значение для удаления и лайков
export const setLikeDel = () => {
    return {type: ACTION.SET_LIKE_DEL}
}

export const setLikeDelSuccess = (data:any) => {
    return {type: ACTION.SET_LIKE_DEL_SUCCESS, likeDel: data}
}

export const setLikeDelError = () => {
    return {type: ACTION.SET_LIKE_DEL_FAILED}
}

export const fetchSetLikeDel = ({id, typeSet}:any) => {
    return {type: ACTION.FETCH_SET_LIKE_DEL, id, typeSet}
}
