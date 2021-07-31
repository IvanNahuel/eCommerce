import React, {useContext} from 'react';
import {CartContext} from '../../CartContext/CartContext'


const ItemCart = ({juego}) =>{
    console.log(juego);
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
                    <div onClick={eliminar}>Eliminar</div>
                    <div onClick={()=>alert("Comprar")}>Comprar</div>
                </section>        
            </div>
        </div>
    );
}

export default ItemCart;