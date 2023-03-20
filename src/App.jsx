import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import ItemCount from "./components/ItemCount";
import CartProvider from "./Context/CartContex"


const App = () => {
  return (
    <div>

<CartProvider>
      <BrowserRouter>
        <NavBar/>

          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route
              exact
              path="/producto/:idParams"
              element={<ItemDetailContainer />}
            />
            <Route exact path="/cart" element={<Cart />} />
            <Route
              exact
              path="lanzamiento/:lanzamiento"
              element={<ItemListContainer />}
            ></Route>
          </Routes>
          
      </BrowserRouter>
      </CartProvider>
    </div>
  );
};

export default App;
