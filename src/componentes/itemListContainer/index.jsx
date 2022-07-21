import React,{useEffect, useState} from "react";
import Data from "../Data/Data";
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {db} from "../../firebase/firebase";
import {getDocs, collection,query} from "firebase/firestore";

function getData(categoriaid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (categoriaid !==undefined){
       const arrayFiltro= Data.filter((Data)=>{
          return Data.tipo === categoriaid;
        })
        resolve(arrayFiltro);
        console.log(arrayFiltro);
      }
      //else{
      //  resolve(Data)
      //}
     
    }, 700);
  });
  
}

function ItemListContainer({nombre}){
  

  const[Data,SetData]=useState([]);
  const {categoriaid}=useParams();
  console.log("Id:"+ categoriaid);
  
  useEffect (()=>{
    const productsCollection = collection(db,'productos');
    getDocs(productsCollection)
    .then(result=>{
      const lista=result.docs.map(product=>{
        return{
          id: product.id,
          ...product.data(),
        } 
      })
      console.log(lista);
    })


     getData(categoriaid).then(respuestaPromise=>{
      SetData(respuestaPromise);
    })
  },[categoriaid]);

    return(
        <section className="">
         <ItemList Data={Data}/>
       </section>
    );
}



export default ItemListContainer;
//{<Title saludo="juanjo"/>}
//
//const onAdd =(valor)=>{
//  console.log(`compraste ${valor} unidades`); 
//}