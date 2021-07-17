import React, { useState } from 'react';
import Contador from '../Contador/Contador';

const ItemContainer = (juego) =>{
    return(
        <div className="item-container">
            <div className="img-container">
                <img src={juego.juego.urlImagen} alt={juego.juego.nombre}/> 
            </div>  
            <Contador juego={juego}/>
        </div>
    );
}
export default ItemContainer;
