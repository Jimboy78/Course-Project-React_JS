import React from "react"
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";


const App = () =>{
return (
  <div>
    <h1>App</h1>
    <NavBar/>
    <ItemListContainer saludo="Bienvenida"/>
  </div>
  );
};

export default App
