import React, {useContext} from 'react';
import {CartContext} from '../../CartContext/CartContext'
import {Link} from 'react-router-dom';

const ItemCart = ({juego}) =>{
    const {removeItem} = useContext(CartContext);
    
    const eliminar = ()=>{
        removeItem(juego.juego.id);
    }

    const comprar= ()=>{
        return false;
    }

    return (
        <div className="item-cart-container">
            <img src={juego.juego.urlImagen} ></img>
            <div className="item-cart-description-container">
                <section>
                    <h1>{juego.juego.nombre}</h1>
                </section>
                <section>
                    <p>Total: {juego.cantidad * juego.juego.precio}</p>
                    <hr></hr>
                </section>
                <section>
                    <div className="cart-btn" onClick={eliminar}>Eliminar</div>
                </section>        
            </div>
        </div>
    );
}

export default ItemCart;