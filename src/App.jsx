import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    
    <BrowserRouter>
      <NavBar/>
    <Routes>
    <Route path='/' element={<ItemListContainer/>}/>
    <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
    <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
    </Routes>
    
    </BrowserRouter>

  )
}

export default App
