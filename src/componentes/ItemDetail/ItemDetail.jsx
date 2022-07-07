import React from "react";
import "./ItemDetail.css";
import { Link } from "react-router-dom";

const ItemDetail =({Data})=>{
    return(
        <div className="container">
            <div className=" row detail">
                <div className="  detail_image ">
                 <img src={Data.imgUrl} className="image col-xs-12 col-sm-6 col-lg-6" alt={Data.nombre} />
                 <p className="descripcion col-xs-12 col-sm-6 col-lg-6">descripcion:{Data.descripcion}</p>
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