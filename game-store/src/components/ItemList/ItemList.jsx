import React, {useEffect, useState} from 'react';
import Item from '../Item/Item';

const OfertasBlock = () =>{

    let juego = {
        juegos:[
            { 
                id: 0,
                nombre: "Halo Infinite",
                descripcion:"Halo: Infinite es un videojuego de disparos en primera persona próximo a estrenarse de la franquicia de videojuegos de ciencia ficción creada por Bungie Studios y continuada por 343 Industries y Sperasoft. Será exclusivo para las plataformas Xbox One, Microsoft Windows y Xbox Series X|S",
                urlImagen: "./images/halo-infinite.jpg",
                precio: 500,
                stock: 5,
            },
            { 
                id: 1,
                nombre: "Call of duty Black Ops II",
                descripcion:"Call of Duty: Black Ops II es un videojuego de disparos en primera persona desarrollado por Treyarch y distribuido por Activision en 2012. Fue lanzado el 13 de noviembre de 2012 para PlayStation 3, Xbox 360 y Microsoft Windows, el 18 de noviembre de 2012 en América del Norte, y finalmente el 30 de noviembre de 2012 en Europa y Australia para la Wii U.1​2​3​ Square Enix lanzó el juego para el mercado japonés el 22 de noviembre de 2012 como una versión subtitulada. Una versión de voz doblada al idioma japonés fue lanzado por separado el 20 de diciembre de 2012. El guion de esta versión fue traducido del inglés por Zenigame Nakamoto.",
                urlImagen: "./images/cod-Black-ops-ii.jpg",
                precio: 1600,
                stock: 3,
            },
            { 
                id: 2,
                nombre: "Sea of Thieves",
                descripcion:"Sea of Thieves es un videojuego de acción-aventura en primera persona desarrollado por Rare y distribuido por Xbox Game Studios, para las plataformas Xbox One y Microsoft Windows.1​2​3​ El videojuego fue lanzado a la venta el 20 de marzo de 2018.4",
                urlImagen: "./images/sea-of-thieves.jpg",
                precio: 1400,
                stock: 0,
            },
            { 
                id: 3,
                nombre: "Portal II",
                descripcion:"Portal 2 es el segundo videojuego mezcla de videojuego de lógica y de disparos en primera persona, de la saga Portal. Fue desarrollado por Valve Corporation. El 19 de abril de 2011, Portal 2 fue lanzado a través de Steam. En el número de abril de la revista Game Infomer se reveló que Portal 2 incluirá un modo cooperativo para dos personas aparte del argumento principal y salió a un coste de 37,99€ en su versión de PC y de 59,95€ en las versiones para consola.",
                urlImagen: "./images/portal-II.jpg",
                precio: 600,
                stock: 2,
            },
            { 
                id: 4,
                nombre: "Red Dead Redemption II",
                descripcion:"Red Dead Redemption 2, estilizado Red Dead Redemption II es un videojuego de acción-aventura western, en un mundo abierto y en perspectiva de primera y tercera persona,1​ con componentes para un jugador y multijugador.2​ Fue desarrollado por Rockstar Games. Es la precuela de Red Dead Redemption y el tercer juego de la saga Red Dead.",
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
    });

    return (
        <>
            <h1>Ofertas de la semana</h1>
            <section className="ofertas-block">
                {
                    listaJuegos&&listaJuegos.juegos.length >0 ? listaJuegos.juegos.map(elemento => {
                        return(                        
                            <Item juego={elemento}/>                        
                        )
                    }
                    ): false
                }                
            </section>
        </>
    );
}

export default OfertasBlock;



