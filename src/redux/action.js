import { ADD_TO_CART, REMOVE_TO_CART, GET_PRODUCT_LIST, EMPTY_CART } from "./constant"

export const add_to_cart = (data) => {
    return (
        {
            type: ADD_TO_CART,
            payload: data
        }
    )
}

export const remove_to_cart = (id) => {
    return (
        {
            type: REMOVE_TO_CART,
            payload: id
        }
    )
}

export const empty_cart = () => {
    return (
        {
            type: EMPTY_CART,
        }
    )
}



export const get_products = () => {
    return (
        {
            type: GET_PRODUCT_LIST,
        }
    )
}
