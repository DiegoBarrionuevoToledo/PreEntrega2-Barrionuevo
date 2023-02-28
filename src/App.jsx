import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import ItemCount from './components/ItemCount';

const App = () => {

  
return (
    <div>
      <BrowserRouter>
<NavBar/>


<Routes>
<Route exact path="/" element={<ItemListContainer/>} />
<Route exact path='/producto/:idParams' element={<ItemDetailContainer/>} />
<Route exact path='/cart' element={<Cart/>} />
<Route exact path='lanzamiento/:lanzamiento' element={<ItemListContainer/>}></Route>
</Routes>

</BrowserRouter>
    </div>
  )
}

export default App
