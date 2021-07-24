import React from 'react';
import {Link} from 'react-router-dom';

const ConfirmarCompra = ({SetFlagCompra}) =>{

    const modificar = () =>{
        SetFlagCompra(false);
    }

    return (
        <div className="confirmar-compra">
            <div className="confirmar-compra-btn modificar-compra" onClick={modificar}>Modificar</div>
            <Link to="/cart">
                <div className="confirmar-compra-btn añadir-carrito">Añadir al carrito</div>
            </Link>
        </div>
    );
}

export default ConfirmarCompra;

