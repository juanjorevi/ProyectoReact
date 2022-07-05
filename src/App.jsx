import React from "react";
import  NavBar  from './componentes/NavBar/index';
//import  ItemListContainer  from "./componentes/itemListContainer";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";

const App = () =>{
  return(
    <BrowserRouter>
      < NavBar /> 
      <ItemDetailContainer/>
    </BrowserRouter>
  );
}

export default App;


//import logo from './logo.svg';
//import './App.css';
//
//function App() {
//  return (
//    <header>contenido header</header>
//  );
//}
//}

//< ItemListContainer />