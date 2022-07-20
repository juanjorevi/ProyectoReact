import React,{useState,useContext}  from "react";
import { createContext } from "react";
import Item from "../componentes/Item/Item";
import { Link } from "react-router-dom";

const CartContext=createContext();
const useCartContex=()=>useContext(CartContext);
const {Provider}=CartContext;

export function CartContextProvider({children}) {
    const[Data,setData]=useState([]);

    const addCart=(Item,cantidad)=>{
        if (isInCart(Data.id)){
           const newCart =  Data.map(cartItem=>{
                if(cartItem.id===Data.id){
                    const copyItem={...cartItem};
                    copyItem.cantidad += cantidad;
                    return copyItem;
                }
                else return cartItem;
            })
            setData(newCart);
        }
        else{
              const newItem={...Item,cantidad};
              setData([...Item,newItem]);
        }
        
        
    }

    const removeFromCart=(id)=>{
        const newCart=[...Data]
        const cartFilter=newCart.filter(Data=>{
            return Data.id !== id;
        })
        setData(cartFilter);
    }

    const isInCart=(id)=>{
        return Data.some(itemCart=>itemCart.id===id)
          
    }
   
    const cleanCart=()=>{
        setData([]);
    }
    const contextFunction =()=>console.log("asdasdasd");
    return(
        <Provider value={{contextFunction,Data, addCart,removeFromCart,cleanCart}}>
            {children}
        </Provider>
    )
    
}
export default useCartContex;