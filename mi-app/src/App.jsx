import "./App.css"

import NavBar from "./components/NavBar";
import ItemListConteiner from "./Components/ItemListConteiner/ItemListContainer";

function App () {

  return(
    <>
      <NavBar/>
      <ItemListConteiner greeting={"Bienvenidos"}/>
    </>
  );
}

 
export default App;