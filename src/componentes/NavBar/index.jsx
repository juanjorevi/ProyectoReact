import React,{useState,useEffect} from "react";

import "./nabBar.css";
import logo from "../imagenes/aguila.jpg";
import CardWidget from "../CardWidget";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom";
import useCartContext from "../../contex/CartContext";



export const NavBar =()=>{
   const {contextFunction}=useCartContext();
   contextFunction();
   const [contador,setContador]= useState(0);
   const [user,setUser]= useState([{name:'felipe'},{name:'pablo'}]);
   const [Numero,setNumero]= useState(0);

   useEffect(()=>{
    setTimeout(()=>{
      setNumero(Numero+1);
    },2000);
    console.log("se ejecuto");
    
   },[contador]);
  
   const handlerClick= () => {
      setContador(contador + 1);
  }

 const reset=()=>{
   setContador(0);
 }
 const addValentin=()=>{
   const Valentin={name:'Valentin'};
   setUser([...user,Valentin]);
   console.log(addValentin);
}
    return(  
    <>
      <div className="navBar">
          <img src={logo} alt="" />
          <h1>MI PROYECTO</h1>
          <nav>
            <Link className="nav_link" to="/category/planta"> TIPO PLANTA</Link>
            <Link className="nav_link" to="/category/fuego"> TIPO FUEGO</Link>
            <Link to="/category/agua">TIPO AGUA </Link>
            <Link className="nav_link" to="/category/bicho">TIPO BICHO</Link>
            <Link className="nav_link" to="/category/bicho"> <CardWidget/></Link>
            <link rel="stylesheet" href="" />
            
          </nav>
          <div className="carrito">
            <p>CARRITO</p>
              <ShoppingCartIcon color="success" />
         </div>
         <div>
              <FacebookIcon color="success" /> 
              <InstagramIcon color="success" /> 
         </div>  
         <div>
          <h1>{contador}</h1>
          <h1>{Numero}</h1>
          <button onClick={handlerClick}>click</button>
          <button onClick={reset}>reset</button>
          <button onClick={addValentin}>agregar vale</button>
         </div>
      </div>

    </>
    )
   
}
export default NavBar;