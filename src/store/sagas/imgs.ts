import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
    getLikeDelImg,
    getLikeDelImgError,
    getLikeDelImgSuccess,
    loadImg,
    loadImgError,
    loadImgSuccess
} from "../actions/imgs";
import { createClient } from 'pexels';
import AsyncStorage from '@react-native-async-storage/async-storage';

const client = createClient('563492ad6f917000010000018bb17ad50e45485d98affbb3d760d67b');
const query = 'Nature';

export function* watchFetchImg() {
    yield all([
        takeEvery('FETCH_IMG', fetchImgAsync),
        takeEvery('FETCH_LIKE_DEL', fetchLikeDelAsync)
    ])
}

function* fetchImgAsync(): Generator {
    try {
        yield put(loadImg())
        const data = yield call(() => {
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
