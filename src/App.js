import './App.css';
import CartIcon from './component/CartIcon';
import { Link, Route, Routes } from 'react-router-dom';
import Main from './component/Main';
import WorkingWithUseReducer from './component/WorkingWithUseReducer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/working-with-use-reducer' element={<WorkingWithUseReducer />} />
        <Route path='/cart' element={<CartIcon />} />
      </Routes>
    </div>
  );
}

export default App;
