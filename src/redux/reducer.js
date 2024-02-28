import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART, SET_PRODUCT_LIST } from "./constant";

const initialState = []

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            state = action.payload
            return state;

        case REMOVE_TO_CART:
            state = action.payload
            return state;


        case SET_PRODUCT_LIST:
            return state;


        case EMPTY_CART:
            state = []
            return state;

        default:
            return state
    }
}

export default cartReducer