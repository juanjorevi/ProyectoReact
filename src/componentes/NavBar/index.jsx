import React,{useState} from "react";
import "./nabBar.css";
import logo from "../imagenes/aguila.jpg"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';






export const NavBar =()=>{
   const [contador,setContador]= useState(0);
   const [user,setUser]= useState([{name:'felipe'},{name:'pablo'}]);

   const handlerClick= () => {
      setContador(contador + 1);
   }
   const handlerClickquitar= () => {
    setContador(contador - 1);
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
            <a href="">categoria 1 </a>
            <a href="">categoria 2</a>
            <a href="">categoria 3</a>
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
          <button onClick={handlerClick}>click</button>
          <button onClick={handlerClickquitar}>click para quitar</button>
          <button onClick={reset}>reset</button>
          <button onClick={addValentin}>agregar vale</button>
         </div>
      </div>

    </>
    )
   
}
export default NavBar;