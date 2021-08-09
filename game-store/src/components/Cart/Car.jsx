import React, { useContext, useEffect } from 'react';
import {CartContext} from '../CartContext/CartContext';
import ItemCart from './ItemCart/ItemCart';

const Cart = () =>{
    const {juegosCart} = useContext(CartContext)

    useEffect(()=>{

    },[juegosCart]);

    return (
        <div className="cart-container">
            {/*aca tenemos que mapear los items carts*/}            
            {juegosCart.length >0 ? juegosCart.map((element) => {
                return(
                    <ItemCart juego={element} key={element.juego.id}/>
                )
            })  : <h1>No hay juegos en la lista</h1>}

        </div>
    );
}

export default Cart;
