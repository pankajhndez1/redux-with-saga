import cartReducer from './reducer';
import { combineReducers } from 'redux';
import cartReducerProduct from './ProductReducer'

export default combineReducers({
    cartReducer,
    cartReducerProduct
})
