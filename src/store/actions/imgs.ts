//Запрос картинок с api
export const loadImg = () => {
    return {type: 'LOAD_IMG'}
}

export const loadImgSuccess = (data: any) => {
    return {type: 'LOAD_IMG_SUCCESS', url: data.map((item:any) => (
        {
            id: item.id,
            smallImg: item.src.tiny,
            fullImg: item.src.large2x,
        }
        ))}
}

export const loadImgError = () => {
    return {type: 'LOAD_IMG_FAILED'}
}

export const fetchImg = () => {
    return {type: 'FETCH_IMG'}
}

//Запрос объекта о удалённых и лайкнутых фото
export const getLikeDelImg = () => {
    return {type: 'LOAD_LIKE_DEL'}
}

export const getLikeDelImgSuccess = (data: any) => {
    return {type: 'LOAD_LIKE_DEL_SUCCESS', likeDel: data}
}

export const getLikeDelImgError = () => {
    return {type: 'LOAD_LIKE_DEL_FAILED'}
}

export const fetchLikeDel = () => {
    return {type: 'FETCH_LIKE_DEL'}
}

//Установка новых значение для удаления и лайков
export const setLikeDel = () => {
    return {type: 'SET_LIKE_DEL'}
}

export const setLikeDelSuccess = () => {
    return {type: 'SET_LIKE_DEL_SUCCESS'}
}

export const setLikeDelError = () => {
    return {type: 'SET_LIKE_DEL_FAILED'}
}

export const fetchSetLikeDel = () => {
    return {type: 'FETCH_SET_LIKE_DEL'}
}
