import React, { useState } from 'react';

const ItemContainer = (juego) =>{
    const [contador, SetTotal] = useState(0);

    const Aumentar = () =>{
        if (juego.juego.stock > contador){
            SetTotal(contador+1);
        }
    };

    const Decrementar = () => {
        if (contador > 0){
            SetTotal(contador-1);
        }
    }

    return(
        <div className="item-container">
            <div className="img-container">
                <img src={juego.juego.urlImagen} alt={juego.juego.nombre}/> 
            </div>  
            <div className="footer-item-juego">
                <button className="add-preview-out"onClick={ Decrementar }>-</button>
                <div className="add-preview-out">{contador}</div> 
                <button className="add-preview-out" onClick={ Aumentar}>+</button>
                <button className="add-carrito">Agregar al carrito</button>
            </div>      
        </div>
    );
}
export default ItemContainer;
