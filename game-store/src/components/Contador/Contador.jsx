import React, {useState} from 'react';

const Contador = ({juego}) =>{
    const [contador, SetTotal] = useState(0);

    const Aumentar = () =>{
        if (juego.stock > contador){
            SetTotal(contador+1);
        }
    };

    const Decrementar = () => {
        if (contador > 0){
            SetTotal(contador-1);
        }
    }

    return (
        <div className="footer-item-juego">
            <div className="add-preview-out align-end"onClick={ Decrementar }>-</div>
            <div>{contador}</div> 
            <div className="add-preview-out align-start" onClick={ Aumentar}>+</div>
            <div className="add-carrito">Agregar al carrito</div>
        </div>   
    );
}


export default Contador;

