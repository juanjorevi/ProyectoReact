
import React  from "react"
import useCartContex from "../../contex/CartContext";
import Item from "../Item/Item";
import {createBuyOrder} from "../../firebase/firebase"

function CartView(){
    const {cart,removeFromCart,cleanCart}=useCartContex();

    function handleBuy(){
        const buyOrder ={
            buyer:{
                name: "juan",
                phone:"12123",
                email:"jua@gmail.com"
            },
           
            total:0
        }
        createBuyOrder(buyOrder);
    }

    if (cart.length===0){
       return
       <>
          <h4>no hay items en el carrito</h4>
          <a href="/">volver a catalogo</a>
       </> 
    }
    else{
        return<>
        {cart.map (ItemCart=>{
            return <div key={ItemCart.id}>
                <h2>{ItemCart.titulo}</h2>
                <button onClick={()=>{removeFromCart(ItemCart.id)}}>x</button>
                <button onClick={handleBuy}>comprar</button>
            </div>
        })}
        <button onClick={cleanCart}>vaciar carro</button>
        </>
       

        
    }
} 

export default CartView;