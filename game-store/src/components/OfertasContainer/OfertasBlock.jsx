import React, {useEffect, useState} from 'react';
import ItemContainer from '../itemListContainer/ItemListContainer';

const OfertasBlock = () =>{

    let juego = {
        juegos:[
            { 
                nombre: "Halo Infinite",
                urlImagen: "../images/halo-infinite.jpg",
                precio: 500,
                stock: 5,
            },
            { 
                nombre: "Call of duty Black Ops II",
                urlImagen: "",
                precio: 1600,
                stock: 3,
            },
            { 
                nombre: "Sea of Thieves",
                urlImagen: "",
                precio: 1400,
                stock: 0,
            },
            { 
                nombre: "Portal II",
                urlImagen: "",
                precio: 600,
                stock: 2,
            },
            { 
                nombre: "Red Dead Redemption II",
                urlImagen: "",
                precio: 1900,
                stock: 10,
            }
        ]
    };

    const [listaJuegos,setListaJuegos] = useState(juego);

    //simulando una carga de datos del servidor
    /*
    const obtenerJuegosDelServidor = () =>{
        setTimeout(()=>{
            setListaJuegos();
            console.log(listaJuegos.length)
        },2000);
    }
    */

    return (
        <>
            <h1>Ofertas de la semana</h1>
            <section className="ofertas-block">
                {console.log(listaJuegos.juegos)}
                {listaJuegos.juegos.length >0 ? listaJuegos.juegos.map(elemento =>{
                    console.log(elemento);
                    <ItemContainer juego={elemento}/>
                }): console.log("falso")
                }
                {/*
                <ItemContainer juego={juego.juegos[0]}/>
                <ItemContainer juego={juego.juegos[0]}/>
                <ItemContainer juego={juego.juegos[0]}/>
                <ItemContainer juego={juego.juegos[0]}/>
                <ItemContainer juego={juego.juegos[0]}/>
                */}
                
            </section>
        </>
    );
}

export default OfertasBlock;



