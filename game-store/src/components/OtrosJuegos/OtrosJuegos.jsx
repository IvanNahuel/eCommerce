import React from 'react';
import Item from '../Item/Item'

const OtrosJuegos = ({otrosJuegos}) =>{
    //console.log({juego: otrosJuegos});    
    return(
        <>
            <h1>Los mas populares</h1>
            {/*aca va el mapeo */}
            <section className="otros-juegos-grid">
                {otrosJuegos.map(element => {    
                return (<Item juego={element} key={element.id}/>)
            }) }
            </section>

        </>
    );
}

export default OtrosJuegos;
