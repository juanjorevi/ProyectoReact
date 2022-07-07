import React,{useEffect, useState} from "react";
import Data from "../Data/Data";
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Data)
    }, 700);
  });
  
}

function ItemDetailContainer(){
  
  const[Data,SetData]=useState([]);
  const {categoriaid}= useParams(); 
  useEffect (()=>{
     getData(categoriaid).then(respuestaPromise=>{
      SetData(respuestaPromise);
    })
  },[categoriaid]);

    return(
        <section className="text-gra-600 body-font">
          <ItemList Data={Data}/>
       </section>
    );
}



export default ItemDetailContainer;

//const onAdd =(valor)=>{
//    console.log(`compraste ${valor} unidades`);  
//  }
//<Title saludo="juanjo"/>
//<ItemContador inicial={1} stock={6} onAdd={onAdd}/>