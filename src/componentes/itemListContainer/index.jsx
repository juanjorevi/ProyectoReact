import ItemContador from "../ItemListContador";
import React,{useEffect, useState} from "react";
import Title from "../Title";
import Data from "../Data/Data";
import ItemList from "../ItemList/ItemList";


function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Data)
    }, 2000);
  });
  
}

export const ItemListContainer=()=>{
  
  const[Data,SetData]=useState([]);

  useEffect (()=>{
    getData().then(respuestaPromise=>{
      SetData(respuestaPromise);
    })
  },[]);


    const onAdd =(valor)=>{
      console.log(`compraste ${valor} unidades`);  
    }
    return(
        <>
       <Title saludo="juanjo"/>
       <ItemContador inicial={1} stock={6} onAdd={onAdd}/>
       <ItemList Data={Data}/>
       </>
    );
}



export default ItemListContainer;