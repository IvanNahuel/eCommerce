import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import OtrosJuegosList from '../OtrosJuegos/OtrosJuegos';
import { database } from '../../firebase/firebase';

const Body = () =>{
    //aca deberia estar la logica de lista
    const [listJuegos,setListJuegos] = useState([]);   
    
    const getJuegos = () =>{
        const juegos = database.collection('games');
        juegos.get().then((requests)=>{
            let auxListaJuego = [];
            
            requests.docs.forEach((element) =>{
                auxListaJuego.push(element.data());
            });
            setListJuegos(auxListaJuego);            
        });
    }

    useEffect(()=>{
        getJuegos();
    },[]);

    let juego = {
        juegos:[
            { 
                id: 0,
                nombre: "Halo Infinite",
                descripcion:"Halo: Infinite es un videojuego de disparos en primera persona próximo a estrenarse de la franquicia de videojuegos de ciencia ficción creada por Bungie Studios y continuada por 343 Industries y Sperasoft. Será exclusivo para las plataformas Xbox One, Microsoft Windows y Xbox Series X|S",
                urlImagen: "./images/halo-infinite.jpg",
                categoria:"Mundo Abierto",
                precio: 500,
                stock: 5,
                oferta: true,
            },
            { 
                id: 1,
                nombre: "Call of duty Black Ops II",
                descripcion:"Call of Duty: Black Ops II es un videojuego de disparos en primera persona desarrollado por Treyarch y distribuido por Activision en 2012. Fue lanzado el 13 de noviembre de 2012 para PlayStation 3, Xbox 360 y Microsoft Windows, el 18 de noviembre de 2012 en América del Norte, y finalmente el 30 de noviembre de 2012 en Europa y Australia para la Wii U.1​2​3​ Square Enix lanzó el juego para el mercado japonés el 22 de noviembre de 2012 como una versión subtitulada. Una versión de voz doblada al idioma japonés fue lanzado por separado el 20 de diciembre de 2012. El guion de esta versión fue traducido del inglés por Zenigame Nakamoto.",
                urlImagen: "./images/cod-Black-ops-ii.jpg",
                categoria:"Disparos",
                precio: 1600,
                stock: 3,
                oferta: true,
            },
            { 
                id: 2,
                nombre: "Sea of Thieves",
                descripcion:"Sea of Thieves es un videojuego de acción-aventura en primera persona desarrollado por Rare y distribuido por Xbox Game Studios, para las plataformas Xbox One y Microsoft Windows.1​2​3​ El videojuego fue lanzado a la venta el 20 de marzo de 2018.4",
                urlImagen: "./images/sea-of-thieves.jpg",
                categoria:"Mundo Abierto",
                precio: 1400,
                stock: 0,
                oferta: true,
            },
            { 
                id: 3,
                nombre: "Portal II",
                descripcion:"Portal 2 es el segundo videojuego mezcla de videojuego de lógica y de disparos en primera persona, de la saga Portal. Fue desarrollado por Valve Corporation. El 19 de abril de 2011, Portal 2 fue lanzado a través de Steam. En el número de abril de la revista Game Infomer se reveló que Portal 2 incluirá un modo cooperativo para dos personas aparte del argumento principal y salió a un coste de 37,99€ en su versión de PC y de 59,95€ en las versiones para consola.",
                urlImagen: "./images/portal-II.jpg",
                categoria:"Disparos",
                precio: 600,
                stock: 2,
                oferta: true,
            },
            { 
                id: 4,
                nombre: "Red Dead Redemption II",
                descripcion:"Red Dead Redemption 2, estilizado Red Dead Redemption II es un videojuego de acción-aventura western, en un mundo abierto y en perspectiva de primera y tercera persona,1​ con componentes para un jugador y multijugador.2​ Fue desarrollado por Rockstar Games. Es la precuela de Red Dead Redemption y el tercer juego de la saga Red Dead.",
                urlImagen: "./images/red-dead-redemption-II.jpg",
                categoria:"Mundo Abierto",
                precio: 1900,
                stock: 10,
                oferta: true,
            }
        ],
        otrosJuegos:[
            {
                id: 5,
                nombre: "Age of the empires III",
                descripcion:"Age of Empires III es un videojuego de estrategia en tiempo real para computadoras personales desarrollado por Ensemble Studios publicado por Microsoft Games para los sistemas operativos Windows y Mac.",
                urlImagen: "./images/aoeIII.jpg",
                categoria:"Estrategia",
                precio: 1500,
                stock: 1,
                oferta: false,
            },
            {
                id: 6,
                nombre: "Battlefield V",
                descripcion:"Battlefield V es un videojuego de disparos y acción bélica en primera persona​ desarrollado por DICE y distribuido por Electronic Arts. El videojuego fue lanzado el 20 de noviembre de 2018 en las plataformas PlayStation 4, Xbox One y Microsoft Windows.",
                urlImagen: "./images/bfv.jpg",
                categoria:"Disparos",
                precio: 1250,
                stock: 20,
                oferta: false,
            },
            {
                id: 7,
                nombre: "Skyrim",
                descripcion:"The Elder Scrolls V: Skyrim es un videojuego de rol de acción del tipo mundo abierto desarrollado por Bethesda Game Studios y publicado por Bethesda Softworks.",
                urlImagen: "./images/sky.jpg",
                categoria:"Estrategia",
                precio: 2700,
                stock: 7,
                oferta: false,
            },
            {
                id: 8,
                nombre: "Assasins Creed Rogue",
                descripcion:"Assassin's Creed: Rogue es un videojuego de acción-aventura y sigilo de ficción histórica, desarrollado por Ubisoft Sofia y publicado por Ubisoft. Fue lanzado en Norteamérica el 11 de noviembre de 2014, en Australia el 13 de noviembre y para Europa el 14 de noviembre, para las consolas PlayStation 3, Xbox 360.",
                urlImagen: "./images/acr.jpg",
                categoria:"Mundo Abierto",
                precio: 250,
                stock: 9,
                oferta: false,
            },
            {
                id: 9,
                nombre: "Tetris",
                descripcion:"Tetris es un videojuego de lógica originalmente diseñado y programado por Alekséi Pázhitnov en la Unión Soviética. Fue lanzado el 6 de junio de 1984, ​ mientras trabajaba para el Centro de Computación Dorodnitsyn de la Academia de Ciencias de la Unión Soviética en Moscú, RSFS de Rusia.​",
                urlImagen: "./images/tet.jpg",
                categoria:"Estrategia",
                precio: 100,
                stock: 4,
                oferta: false,
            },

            {
                id: 10,
                nombre: "Halo Reach",
                descripcion:"Halo Reach es un videojuego de disparos en primera persona desarrollado por Bungie y publicado por Microsoft Game Studios para la consola Xbox 360 y posteriormente retrocompatible con Xbox One. Es el sexto videojuego de la saga Halo, así como su tercer videojuego Publicado.​",
                urlImagen: "./images/hr.jpg",
                categoria:"Disparos",
                precio: 1100,
                stock: 5,
                oferta: false,
            },
            {
                id: 11,
                nombre: "Killzone Shadow Fall",
                descripcion:"Killzone: Shadow Fall es un videojuego de acción en primera persona, desarrollado por Guerrilla Games y publicado por Sony Computer Entertainment, es un título exclusivo de PlayStation 4. Es el sexto partido en toda la serie Killzone y el cuarto para consolas domésticas.",
                urlImagen: "./images/kz.jpg",
                categoria:"Disparos",
                precio: 2900,
                stock: 15,
                oferta: false,
            },
            {
                id: 12,
                nombre: "Zelda Breath of the Wild",
                descripcion:"The Legend of Zelda: Breath of the Wild es un videojuego de acción-aventura de 2017 de la serie The Legend of Zelda, desarrollado por la filial Nintendo EPD en colaboración con Monolith Soft y publicado por Nintendo para las consolas Wii U y Nintendo Switch",
                urlImagen: "./images/z.jpg",
                categoria:"Mundo Abierto",
                precio: 5200,
                stock: 15,
                oferta: false,
            },
            {
                id: 13,
                nombre: "Goat Simulator",
                descripcion:"Goat Simulator es un videojuego de acción en tercera persona, desarrollado y publicado por Coffee Stain Studios. Fue lanzado para Microsoft Windows vía Steam el 1 de abril de 2014, y para Mac OS X y Linux fueron lanzados el 27 de junio de 2014.",
                urlImagen: "./images/gs.jpg",
                categoria:"Estrategia",
                precio: 750,
                stock: 15,
                oferta: false,
            },
            {
                id: 14,
                nombre: "Assassin's Creed II",
                descripcion:"Assassin's Creed II es un videojuego de acción-aventura de ficción histórica, desarrollado por Ubisoft Montreal. El juego llegó mundialmente a las tiendas el 17 de noviembre de 2009, y para el formato PAL Europeo el 19 del mismo mes, todo ello para consolas Xbox 360 y PlayStation 3.",
                urlImagen: "./images/acII.jpg",
                categoria:"Estrategia",
                precio: 1370,
                stock: 15,
                oferta: false,
            }
        ]
    };


    return (  
        <>      
            <section className="body-container">
                <ItemList juego={juego}></ItemList>
            </section>
            <section className="otros-juegos-container">
                <OtrosJuegosList otrosJuegos={juego.otrosJuegos}/>
            </section>
        </>
    );
}

export default Body;

