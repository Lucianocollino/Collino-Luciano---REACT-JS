import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListConteiner/ItemListContainer";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";

import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Todos los productos"} />} />
          <Route path="category/:categoryId" element={<ItemListContainer greeting={"Productos por categoría"} />} />
          <Route path="/item/:itemId" element={ <ItemDetailContainer />} />
          <Route path="/cart" element ={<Cart />}/>
          <Route path='/checkout' element={<Cart/>}/>
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
        </CartProvider>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
