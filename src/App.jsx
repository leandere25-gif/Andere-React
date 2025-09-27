import './App.css'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart/Cart'
import { CarritoProvider } from './Context/CarritoContext'
import { ToastContainer } from 'react-toastify';
import Checkout from './components/Checkout/Checkout';

function App() {

  return (
  
    <BrowserRouter>
        <CarritoProvider>
      <NavBar/>
          <Routes>
                  <Route path='/' element={<ItemListContainer/>}/>
                  <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
                  <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
                  <Route path="/Cart" element={<Cart/>}/>
                  <Route path='/Checkout' element={<Checkout/>}/>
          </Routes>
        </CarritoProvider>
        <ToastContainer/>
    </BrowserRouter>

  )
}

export default App
