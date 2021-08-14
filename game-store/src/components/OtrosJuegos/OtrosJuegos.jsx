import React from 'react';
import Item from '../Item/Item'

const OtrosJuegos = ({otrosJuegos}) =>{ 
    return(
        <>
            <h1>Los mas populares</h1>
            <section className="otros-juegos-grid">
                {
                otrosJuegos.map(element => !element.oferta&&<Item juego={element} key={element.id}/>) 
                }
            </section>

        </>
    );
}

export default OtrosJuegos;
