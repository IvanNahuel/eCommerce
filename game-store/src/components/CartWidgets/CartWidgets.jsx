import React, { useContext } from "react";
import {CartContext} from '../CartContext/CartContext';
import IconCart from "./IconCart/IconCart";

const CartWidgets = () =>{

    const {juegosCart} = useContext(CartContext);

    return(
        <div>
            <img src="../images/shopping-cart.png" alt="carrito-compras" />
            {juegosCart.length >0 && <IconCart cantidad={juegosCart.length}/>} 
        </div>
    )
}

export default CartWidgets