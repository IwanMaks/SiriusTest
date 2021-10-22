import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
    getLikeDelImg,
    getLikeDelImgError,
    getLikeDelImgSuccess,
    loadImg,
    loadImgError,
    loadImgSuccess
} from "../actions/imgs";
import {createClient, Photos} from 'pexels';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ACTION} from "../types";
import {API_KEY} from '@env'

const client = createClient(API_KEY);
const query = 'Nature';

export function* watchFetchImg() {
    yield all([
        takeEvery(ACTION.FETCH_IMG, fetchImgAsync),
        takeEvery(ACTION.FETCH_LIKE_DEL, fetchLikeDelAsync)
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
