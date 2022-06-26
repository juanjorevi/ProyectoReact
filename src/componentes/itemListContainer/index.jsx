import ItemContador from "../ItemListContador";
import React from "react";
import Title from "../Title";

export const ItemListContainer=()=>{
    const onAdd =(valor)=>{
      console.log(`compraste ${valor} unidades`);  
    }
    return(
        <>
       <Title saludo="juanjo"/>
       <ItemContador inicial={1} stock={6} onAdd={onAdd}/>
       </>
    );
}



export default ItemListContainer;