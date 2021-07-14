import { element, func } from 'prop-types';
import React, {useEffect, useState} from 'react';
import ItemContainer from '../itemListContainer/ItemListContainer';

const OfertasBlock = () =>{

    const [listaJuegos,setListaJuegos] = useState([]);
    const [flagCargaSv, setFlagCargaSV] = useState(0);

    class Juego{
        constructor(nombre, urlImagen, precio, stock){
            this.nombre = nombre;
            this.urlImagen = urlImagen;
            this.precio = precio;
            this.stock = stock;
        }
    }
    let juego1 = new Juego("Halo Infinite","../images/halo-infinite.jpg",500,5);
    let juego2 = new Juego("Call of duty Black Ops II", "" ,1600,3);
    let juego3 = new Juego("Sea of Thieves", "" ,1400,0);
    let juego4 = new Juego("Portal II", "" ,600,2);
    let juego5 = new Juego("Red Dead Redemption II", "" ,1900,10);

    const setearObjetoJuegoOfertas =(juego1, juego2, juego3, juego4, juego5)=>{
        return [{"juego":juego1},{"juego":juego2},{"juego":juego3},{"juego":juego4},{"juego":juego5}]
    }
    //simulando una carga de datos del servidor
    const obtenerJuegosDelServidor = () =>{
        setTimeout(()=>{
            setListaJuegos(setearObjetoJuegoOfertas(juego1,juego2,juego3,juego4,juego5));
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
                {listaJuegos.length >0 ? listaJuegos.map(function(element){
                        <ItemContainer juego={element.juego}/>
                    }): false
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



