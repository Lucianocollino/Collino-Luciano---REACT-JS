import "./App.css"

import NavBar from "./components/NavBar";
import ItemListConteiner from "./Components/ItemListConteiner/ItemListContainer";
import ItemDetailConteiner from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemDetail from "./Components/ItemDetail/ItemDetail" ;

function App () {

  return(
    <>
      <NavBar/>
      <ItemListConteiner greeting={"Bienvenidos"}/>
      <ItemDetailContainer/>
      <ItemDetail/>
    </>
  );
}

 
export default App;