import React  from "react"
import useCartContex from "../../contex/CartContext";
import Item from "../Item/Item";

function CartView(){
    const {cart,removeFromCart,cleanCart}=useCartContex();
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
            </div>
        })}
        <button onClick={cleanCart}>vaciar carro</button>
        </>
       

        
    }
}

export default CartView;