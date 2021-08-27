import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router'
import ItemDetail from '../ItemDetail/ItemDetail'
import { database } from '../../firebase/firebase';

const ItemDetailContainer = () =>{
    //encargada de obtener el item seleccionado
    //aca recibe el useParams, y en base a ese useParams, nosotros trateremos de buscar en el array de objetos
    //nuestro objeto
    const {id} = useParams();
    const [itemJuego,setItemJuego] = useState();

    useEffect(()=>{
        const getJuegos = () =>{
            const juegos = database.collection('games');
            juegos.get().then((requests)=>{
                let auxListaJuego = [];
                
                requests.docs.forEach((element) =>{
                    auxListaJuego.push({ ...element.data(), id: element.id});
                });  
                var aux = auxListaJuego.find(element => element.id === id)
                setItemJuego(aux);        
            });
        }
        getJuegos();
        // eslint-disable-next-line
    },[]);

    return itemJuego?<ItemDetail juego={itemJuego}/>:false;
};

export default ItemDetailContainer;