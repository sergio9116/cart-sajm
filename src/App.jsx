
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ProdId from './pages/ProdId';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Purchases from './pages/Purchases';
import ProtectedRoutes from './pages/ProtectedRoutes';
import NavBar from './components/share/NavBar';

function App() {

  return (
   <div>
    <NavBar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/product/:id' element={<ProdId/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route element={<ProtectedRoutes/>  }>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/purchases' element={<Purchases/>}/>
      </Route>
    </Routes>
   </div>

  )
}

export default App;
