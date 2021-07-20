import React, {useEffect, useState} from 'react';
import Item from '../Item/Item';

const OfertasBlock = () =>{

    let juego = {
        juegos:[
            { 
                nombre: "Halo Infinite",
                urlImagen: "./images/halo-infinite.jpg",
                precio: 500,
                stock: 5,
            },
            { 
                nombre: "Call of duty Black Ops II",
                urlImagen: "./images/cod-Black-ops-ii.jpg",
                precio: 1600,
                stock: 3,
            },
            { 
                nombre: "Sea of Thieves",
                urlImagen: "./images/sea-of-thieves.jpg",
                precio: 1400,
                stock: 0,
            },
            { 
                nombre: "Portal II",
                urlImagen: "./images/portal-II.jpg",
                precio: 600,
                stock: 2,
            },
            { 
                nombre: "Red Dead Redemption II",
                urlImagen: "./images/red-dead-redemption-II.jpg",
                precio: 1900,
                stock: 10,
            }
        ]
    };

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
                    listaJuegos&&listaJuegos.juegos.length >0 ? listaJuegos.juegos.map(elemento => <Item juego={elemento}/>): false
                }                
            </section>
        </>
    );
}

export default OfertasBlock;



