import React from 'react';
import ItemContainer from '../itemListContainer/itemListContainer';
import haloImg from '../images/halo-infinite.jpg';

const OfertasBlock = () =>{

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
    
    let listaJuegos = [juego1, juego2, juego3, juego4, juego5];

    //const [st_lista_juego, set]

    console.log(listaJuegos);

    return (
        <>
            <h1>Ofertas de la semana</h1>
            <section className="ofertas-block">
                {listaJuegos.map(element => <ItemContainer juego={element}/>)}
            </section>
        </>
    );
}

export default OfertasBlock;



