import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const ItemContainer = (juego) =>{

    console.log(juego);
    return(
        <Link to={'/juego/'+juego.juego.id.toString()} className="item-container">        
            <div className="img-container">
                <img src={juego.juego.urlImagen} alt={juego.juego.nombre}/> 
            </div>  
        </Link>
    );
}
export default ItemContainer;
