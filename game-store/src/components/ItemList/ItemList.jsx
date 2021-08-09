import React, {useEffect, useState} from 'react';
import Item from '../Item/Item';

const OfertasBlock = ({juego}) =>{

    const [listaJuegos,setListaJuegos] = useState({juegos:[]});
    const [flagTimeOut, setFlagTimeOut] = useState(true);

    const CargarJuego = new Promise((resolve)=>{
        resolve();
    });

    useEffect(()=>{
        if(flagTimeOut){
            setTimeout(()=>{
                CargarJuego.then(()=>{
                    setListaJuegos(juego);
                });
            },2000)
            setFlagTimeOut(false);
        }
    },[]);


    return (
        <>
            <h1>Ofertas de la semana</h1>
            <section className="ofertas-block">            
                {
                    listaJuegos&&listaJuegos.juegos.length >0 ? listaJuegos.juegos.map(elemento => <Item juego={elemento} key={elemento.id}/>): false
                }                
            </section>
        </>
    );
}

export default OfertasBlock;



