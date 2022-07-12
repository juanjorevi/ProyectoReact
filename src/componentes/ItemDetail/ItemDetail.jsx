import React,{useState} from "react";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import ItemContador from "../ItemListContador";

const ItemDetail =({Data})=>{
    const [gotoCart,setGoToCart]=useState(false)

    const onAdd =(valor)=>{
        setGoToCart(true)
        console.log(`compraste ${valor} unidades`);  
      }
    return(
        <div className="container">
            <div className=" row detail">
                <div className="  detail_image ">
                 <img src={Data.imgUrl} className="image col-xs-12 col-sm-6 col-lg-4" alt={Data.nombre} />
                 <p className="descripcion col-xs-12 col-sm-6 col-lg-4">descripcion:{Data.descripcion}</p>
                 {
                    gotoCart
                    ?<Link to="/cart">terminar seleccion de pokemon</Link>
                    : <ItemContador inicial={1} stock={6} onAdd={onAdd}/>

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