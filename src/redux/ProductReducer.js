import { SET_PRODUCT_LIST } from "./constant";

const initialState = []

const cartReducerProduct = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT_LIST:
            return state = [...action.data];
        default:
            return state
    }
}

export default cartReducerProduct