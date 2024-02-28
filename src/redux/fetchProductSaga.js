import { GET_PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";
import { takeEvery,put } from 'redux-saga/effects';


function* getProductList() {
    const data = yield fetch("https://jsonplaceholder.typicode.com/posts")
    const json_data = yield data.json();
    console.log(json_data,'<===json_data');
    yield put({ type: SET_PRODUCT_LIST, data: json_data })
}

function* fetchProductSaga() {
    yield takeEvery(GET_PRODUCT_LIST, getProductList)

}


export default fetchProductSaga;