import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import OtrosJuegosList from '../OtrosJuegos/OtrosJuegos';
import { database } from '../../firebase/firebase';

const Body = () =>{
    const [listJuegos,setListJuegos] = useState([]);
       
    const getJuegos = () =>{
        const juegos = database.collection('games');
        juegos.get().then((requests)=>{
            let auxListaJuego = [];
            
            requests.docs.forEach((element) =>{
                auxListaJuego.push({ ...element.data(), id: element.id});
            });
            setListJuegos(auxListaJuego);            
        });
    }

    useEffect(()=>{
        getJuegos();
    },[]);

    return (  
        <>      
            <section className="body-container">
                {listJuegos.length > 0 && <ItemList juegos={listJuegos}></ItemList>}
            </section>
            <section className="otros-juegos-container">
                {listJuegos.length > 0 && <OtrosJuegosList otrosJuegos={listJuegos}/> }                
            </section>
        </>
    );
}

export default Body;

