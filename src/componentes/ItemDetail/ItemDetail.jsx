import React,{useState} from "react";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import ItemContador from "../ItemListContador";
import useCartContex from "../../contex/CartContext";


const ItemDetail =({Data})=>{
    const [isInCart,setIsInCart]=useState(false);
    const {addToCart}=useCartContex();
  
   

    const onAdd =(valor)=>{
          isInCart(true);
          addToCart(Data,valor);
          console.log("agregado al cart,",Data,valor);
             
          if (Data){
            return <h4>cargando...</h4>
          }
          else{
            
          }
        }
    return(
        <div className="container">
            <div className=" row detail">
                <div className="  detail_image ">
                 <img src={Data.imgUrl} className="image col-xs-12 col-sm-6 col-lg-4" alt={Data.nombre} />
                 <p className="descripcion col-xs-12 col-sm-6 col-lg-4">descripcion:{Data.descripcion}</p>
                 {
                      isInCart
                      ?<Link to="/cart">terminar seleccion de pokemon</Link>
                     : <ItemContador inicial={1} stock={Data.stock} onAdd={onAdd}/>
                 }
                 
                 
                 

                 
                </div>
                <h3 className="name">{Data.nombre}</h3>
                <p className="caracteristica">TIPO:{Data.tipo}</p>
                <Link to={`/Data/${Data.id}`}>
                    <button>
                        ver mas sobre este interesante pokemon
                    </button>
                </Link>
               
            </div>
        </div>
    );
};

export default ItemDetail;
//
//
//
//
//