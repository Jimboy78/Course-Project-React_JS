import React from "react"
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome"
import Footer from "./components/Footer"
import AboutUs from "./components/AboutUs"
import CartWidget from "./components/CartWidget"
import ItemsListContainer from "./components/ItemsListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Divider } from "@chakra-ui/react";

const App = () =>{
return (
  <BrowserRouter>
    <NavBar />
    <Divider/>

    <Routes>
      <Route exact path="/" element= {<Welcome saludo="Bienvenida"/>}/>
      <Route exact path="/cart" element= {<CartWidget/>}/>
      <Route exact path="/about_us" element= {<AboutUs/>}/>
      <Route exact path="/catalogue" element= {<ItemsListContainer/>}/>
      <Route exact path="/category/:category" element= {<ItemsListContainer/>}/>
      <Route exact path="/item/:id" element= {<ItemDetailContainer/>}/>

    </Routes>

    <Footer/>
  </BrowserRouter>
  );
};

export default App
