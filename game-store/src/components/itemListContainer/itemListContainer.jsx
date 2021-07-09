import React from 'react';

const ItemContainer = (juego) =>{
    return(
        <div className="item-container">
            <div className="img-container">
                <img src={juego.juego.urlImagen} alt={juego.juego.nombre}/> 
            </div>  
            <div className="footer-item-juego">
                <button className="add-preview-out">-</button>
                <div className="add-preview-out">0</div> 
                <button className="add-preview-out">+</button>
                <button className="add-carrito">Agregar al carrito</button>
            </div>      
        </div>
    );
}
export default ItemContainer
