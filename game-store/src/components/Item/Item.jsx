import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const ItemContainer = ({juego}) =>{
    return(
        <Link to={'/juego/'+juego.id} className="item-container">        
            <div className="img-container">
                <img src={juego.urlImagen} alt={juego.nombre}/> 
            </div>  
        </Link>
    );
}
export default ItemContainer;
