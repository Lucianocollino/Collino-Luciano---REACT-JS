import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListConteiner/ItemListContainer";

import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className="App">
      
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Todos los productos"} />} />
          <Route path="category/:categoryId" element={<ItemListContainer greeting={"Productos por categoría"} />} />
          <Route path="/item/:itemId" element={ <ItemDetailContainer />} />
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
        </CartProvider>
      
    </div>
  );
}

export default App;
