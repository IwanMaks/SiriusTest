import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
    getLikeDelImg,
    getLikeDelImgError,
    getLikeDelImgSuccess,
    loadImg,
    loadImgError,
    loadImgSuccess, setLikeDel, setLikeDelError, setLikeDelSuccess
} from "../actions/imgs";
import {createClient, Photos} from 'pexels';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ACTION} from "../types";
import {API_KEY} from '@env'
import {unstable_enableLogBox} from "react-native";

const client = createClient(API_KEY);
const query = 'Nature';

export function* watchFetchImg() {
    yield all([
        takeEvery(ACTION.FETCH_IMG, fetchImgAsync),
        takeEvery(ACTION.FETCH_LIKE_DEL, fetchLikeDelAsync),
        takeEvery(ACTION.FETCH_SET_LIKE_DEL, fetchSetLikeDelAsync)
    ])
}

function* fetchImgAsync(): Generator {
    try {
        yield put(loadImg())
        const data = yield call(() => {
            //Если подставить тип Photos из pexels, то выдаёт ошибку
            return client.photos.search({ query, per_page: 50 }).then((photos:any) => photos.photos);
        })
        yield put(loadImgSuccess(data))
    } catch (e) {
        yield put(loadImgError())
    }
}

function* fetchLikeDelAsync(): Generator {
    try {
        yield put(getLikeDelImg())
        const data = yield call(() => {
            return AsyncStorage.getItem('likeDel').then((likeDel) => likeDel ? JSON.parse(likeDel) : {})
        })
        yield put(getLikeDelImgSuccess(data))
    } catch (e) {
        yield put(getLikeDelImgError())
    }
}

function* fetchSetLikeDelAsync({id, typeSet}:any): Generator {
    try {
        yield put(setLikeDel())
        const data = yield call(() => {
            setItemFromStorage(id, typeSet)
            return AsyncStorage.getItem('likeDel').then((likeDel) => likeDel ? JSON.parse(likeDel) : {})
        })
        yield put(setLikeDelSuccess(data))
    } catch (e) {
        yield put(setLikeDelError())
    }
}

async function getItemFromStorage(){
    return await AsyncStorage.getItem('likeDel')
}

async function setItemFromStorage(id: string | number, typeSet: string){
    let data = await getItemFromStorage()
    if (data !== null) {
        data = JSON.parse(data)
        // @ts-ignore
        if (typeSet === 'like' && data[id+''] === 'like') delete data[id+'']
        // @ts-ignore
        if (data[id+''] !== 'like') data[id+''] = typeSet
        await AsyncStorage.setItem('likeDel', JSON.stringify(data))
    } else {
        // @ts-ignore
        data = {}
        // @ts-ignore
        data[id] = typeSet
        await AsyncStorage.setItem('likeDel', JSON.stringify(data))
    }

}
