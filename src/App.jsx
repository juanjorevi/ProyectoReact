import React from "react";
 
import  NavBar  from './componentes/NavBar/index';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./componentes/itemListContainer";
import {CartContextProvider} from "../src/contex/CartContext"
import CartView from "./componentes/CartView/cartView";


const App = () =>{
  return(
    <CartContextProvider >
      <BrowserRouter>
     
       < NavBar /> 
        <Routes>
          <Route path="/" element={<ItemListContainer titulo="holaaa"/>}/>
          <Route path="/category/:categoriaid" element={<ItemListContainer titulo="tipo"/>}/>
          <Route path="/Data/:itemid" element={<ItemDetailContainer titulo="holaaa"/>}/>
          <Route path="/cart" element={< CartView />} />
        </Routes>
        <ItemDetailContainer />
      </BrowserRouter>
    </CartContextProvider>
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
// <ItemDetailContainer/>