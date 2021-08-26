import React, { useContext, useEffect } from 'react';
import {CartContext} from '../CartContext/CartContext';
import ListEmpty from '../ListEmpty/ListEmpty';
import ItemCart from './ItemCart/ItemCart';
import ComprarJuegosContainer from './ComprarContainer/ComprarContainer';

const Cart = () =>{
    const {juegosCart} = useContext(CartContext)

    useEffect(()=>{

    },[juegosCart]);

    return (
        <div className="cart-container">           
            {juegosCart.length >0 ? juegosCart.map((element) => {
                return(
                    <ItemCart juego={element} key={element.juego.id}/>
                )
            })
            :<ListEmpty/>}
            {juegosCart.length >0  &&  <ComprarJuegosContainer/> }
        </div>
    );
}

export default Cart;
