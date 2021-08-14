import React, {useEffect, useState} from 'react';
import Item from '../Item/Item';

const OfertasBlock = ({juegos}) =>{
    return (
        <>
            <h1>Ofertas de la semana</h1>
            <section className="ofertas-block">            
                {
                    juegos&&juegos.length >0 ? juegos.map(elemento => elemento.oferta&&<Item juego={elemento} key={elemento.id}/>): false
                }                
            </section>
        </>
    );
}

export default OfertasBlock;



