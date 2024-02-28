import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import fetchProductSaga from './fetchProductSaga';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware:()=>[sagaMiddleware]
})

sagaMiddleware.run(fetchProductSaga);

export default store;