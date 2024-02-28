import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { add_to_cart, empty_cart, get_products, remove_to_cart } from './redux/action';

function App() {
  const dispatch = useDispatch();
  const stateData = useSelector((state) => state)
  return (
    <div className="App">
      <h1>Redux with saga for the async opertions</h1>
      <button onClick={() => dispatch(add_to_cart())}>Add to cart</button>
      <button onClick={() => dispatch(empty_cart())}>clear cart</button>
      <button onClick={() => dispatch(remove_to_cart())}>remove from cart</button>
      <button onClick={() => dispatch(get_products())}>fetch products</button>

    </div>
  );
}

export default App;
