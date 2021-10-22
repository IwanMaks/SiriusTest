import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import createSagaMiddleware from 'redux-saga';

import {ImgReducer} from "./reducers/imgs";
import {watchFetchImg} from "./sagas/imgs";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
    imgs: ImgReducer
})
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watchFetchImg)

export default store
export type RootState = ReturnType<typeof store.getState>
