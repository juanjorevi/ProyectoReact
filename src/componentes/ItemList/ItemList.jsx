import React from "react";

function ItemList({Data}) {
    return(
        <>
        {Data.map(esteDato=>{
           return(
            <div>
            <h1>{esteDato.nombre}</h1>
            <p>{esteDato.email}</p>
            <h4>{esteDato.color}</h4>
           
            <hr />
            </div>
           ) 
        })}
        </>
    )
}

export default ItemList;