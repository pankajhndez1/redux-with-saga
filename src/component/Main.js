import React from 'react'
import { add_to_cart, empty_cart, get_products, remove_to_cart } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import CartIcon from './CartIcon';
import { Link } from 'react-router-dom';

const Main = () => {
    const dispatch = useDispatch();
    const stateData = useSelector((state) => state.cartReducerProduct)
    console.log(stateData, "<===in component");
    return (
        <div><h1>Redux with saga for the async opertions</h1>
            <CartIcon />
            <Link to="/cart">
                go to cart
            </Link>
            <button onClick={() => dispatch(empty_cart())}>clear cart</button>
            <button onClick={() => dispatch(get_products())}>fetch products</button>

            {stateData.map((ele, index) => {
                return (
                    <div className='card button-class'>
                        <div className='button-class'>
                            <p>{ele?.id}</p>
                            <p>{ele?.title}</p>
                        </div>
                        <div className='button-class'>
                            <button onClick={() => dispatch(add_to_cart(ele))}>Add to cart</button>
                            <button onClick={() => dispatch(remove_to_cart(ele.id))}>remove from cart</button>
                        </div>
                    </div>
                )
            })}</div>
    )
}

export default Main