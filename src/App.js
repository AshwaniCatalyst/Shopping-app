import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CartPage from './Pages/CartPage';
import Home from './Pages/Home'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<CartPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
