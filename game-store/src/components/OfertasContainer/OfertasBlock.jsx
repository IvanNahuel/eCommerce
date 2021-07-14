import { element, func } from 'prop-types';
import React, {useEffect, useState} from 'react';
import ItemContainer from '../itemListContainer/ItemListContainer';

const OfertasBlock = () =>{

    const [listaJuegos,setListaJuegos] = useState([]);
    const [flagCargaSv, setFlagCargaSV] = useState(0);

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

    //simulando una carga de datos del servidor
    const obtenerJuegosDelServidor = () =>{
        setTimeout(()=>{
            setListaJuegos(juego);
            console.log(listaJuegos.length)
        },2000);
    }

    useEffect(()=>{
            if (flagCargaSv==0){
                obtenerJuegosDelServidor();
                setFlagCargaSV(1);
            }        
        } 
    );

    return (
        <>
            <h1>Ofertas de la semana</h1>
            <section className="ofertas-block">
                {
                console.log(listaJuegos.length)
                }
                {
                    listaJuegos.length > 0 ? ()=>{
                        //console.log("verdadero")
                        listaJuegos.map(element =>{
                            <ItemContainer juego={element}/>
                        })
                    }:console.log("false")
                }
                {/*
                <ItemContainer juego={juego1}/>
                <ItemContainer juego={juego2}/>
                <ItemContainer juego={juego3}/>
                <ItemContainer juego={juego4}/>
                <ItemContainer juego={juego5}/>
                */}
                
            </section>
        </>
    );
}

export default OfertasBlock;



