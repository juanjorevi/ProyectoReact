import React from "react";
import   './ItemDetail.css';
function ItemDetail({data}) {
    return(
        <>
        <div className="continer">
            <div className="detail">
                <img  className="detail_image" src={data.Imagen} alt="" />
                <div className="content">
                    <h1>{data.titulo}</h1>
                </div>
            </div>
        
        </div>     
        </>
    )
}

export default ItemDetail;