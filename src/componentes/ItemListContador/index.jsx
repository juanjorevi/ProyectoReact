import React,{useState} from "react";

export const ItemContador=({inicial,stock,onAdd})=>{
 const[count,setCount]=useState(inicial);
   const sumar=()=>{
        setCount(count+1);
   }
   const sacar=()=>{
      setCount(count-1);
   } 
    return(
       <div className="contador">
         <button disabled={count>=stock} onClick={sumar}>agregar</button>
         <span>{count}</span>
         <button disabled={count<=1} onClick={sacar}>quitar</button>
         <div>
            <button disabled={stock<= 0} onClick={()=>onAdd(count)}>agregar al carro</button>
         </div>
       </div>
    );
}



export default ItemContador;