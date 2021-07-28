import React, { createContext, useContext } from 'react';
import {Link} from 'react-router-dom';
import {CartContext} from '../CartContext/CartContext';

const ConfirmarCompra = ({juego,quantity,SetFlagCompra}) =>{

    const {juegosCart,addItem,removeItem,clear} = useContext(CartContext);

    const modificar = () =>{
        SetFlagCompra(false);
    }

    const añadirCarrito =()=>{
        addItem(juego,quantity);
    }

    return(
        <div className="confirmar-compra">
            <div className="confirmar-compra-btn modificar-compra" onClick={modificar}>Modificar</div>
            <Link to="/cart">
                <div onClick={añadirCarrito} className="confirmar-compra-btn añadir-carrito">Añadir al carrito</div>
            </Link>
        </div>
    );
}

export default ConfirmarCompra;

