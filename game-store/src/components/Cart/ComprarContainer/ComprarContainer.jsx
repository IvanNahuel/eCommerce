import React from 'react';
import {Link} from 'react-router-dom';

const ComprarJuegosContainer = ()=>{

    return (
        <div className="item-cart-container-btn-comprar">
            <Link to="/formularioOc">
                <div className="comprar cart-btn comprar">
                    Comprar  
                </div>
            </Link>
        </div>
    );
}
export default ComprarJuegosContainer;