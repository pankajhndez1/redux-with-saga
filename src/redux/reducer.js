import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from "./constant";

const initialState = []

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            if (state.length === 0) {
                state = [action.payload]
                return state;
            }
            else {
                console.log("hiiii");
                const idExists =
                    state.length && state.some(item => item.id === action?.payload?.id);
                state = !idExists && state.length && [...state, action.payload] || [...state]
                return state;
            }
        case REMOVE_TO_CART:
            state = state.filter((ele) => ele?.id !== action.payload)
            return state;

        case EMPTY_CART:
            state = []
            return state;

        default:
            return state
    }
}

export default cartReducer