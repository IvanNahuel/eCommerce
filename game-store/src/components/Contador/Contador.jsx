import React from 'react';

const Contador = ({contador,Aumentar,Decrementar,Comprar}) =>{
    return (
        <div className="footer-item-juego">
            <div className="add-preview-out align-end"onClick={ Decrementar }>-</div>
            <div>{contador}</div> 
            <div className="add-preview-out align-start" onClick={ Aumentar}>+</div>
            <div className="add-carrito" onClick={Comprar}>Agregar al carrito</div>
        </div>   
    );
}


export default Contador;

