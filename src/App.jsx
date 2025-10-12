import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';
import { carritoProvider } from './context/carritoContext';
import CartContainer from './components/CartContainer';

function App() {
  return (
    <BrowserRouter>
    <carritoProvider>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer mensaje="Bienvenidos a Codigo de Vestimenta!"/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path='/category/:type' element={<ItemListContainer mensaje="Estas en la categoria:"/>}/>
      <Route path='/cart' element={<CartContainer/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </carritoProvider>
    </BrowserRouter>
  )
}

export default App
