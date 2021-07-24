import React, {useState} from 'react';
import Contador from '../Contador/Contador'
import ConfirmarCompra from '../ConfirmarCompra/ConfirmarCompra';

const ItemDetail = ({juego}) =>{
    console.log(juego);

    const [contador, SetTotal] = useState(0);
    const [flagCompra, SetFlagCompra] = useState(false);

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

    const Comprar =()=>{
        if (contador > 0 ){
                SetFlagCompra(true);
        }
    }

    return (
        <div className="item-details-container">
            <div className="img-item-details">
                <img src={"."+juego.urlImagen} alt={juego.nombre}/> 
            </div>  
            <h2>{juego.nombre}</h2>
            <h4>{juego.descripcion}</h4>
            {flagCompra? <ConfirmarCompra SetFlagCompra={SetFlagCompra}/> :<Contador contador={contador} Aumentar={Aumentar} Decrementar={Decrementar} Comprar={Comprar}/>}
        </div>
    );
};

export default ItemDetail;
