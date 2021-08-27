import {React, useState, useEffect} from 'react';
import { database } from '../../firebase/firebase';
import {useParams} from 'react-router'
import ItemCategoria from '../ItemCategoria/ItemCategoria';

const Categoria =()=>{
    const [auxListCat,setAuxListCat] = useState([]);
    const {categoria} = useParams();    

    useEffect(()=>{
        const getJuegos = () =>{
            const juegos = database.collection('games');
            juegos.get().then((requests)=>{
                let auxListaJuego = [];                
                requests.docs.forEach((element) =>{
                    auxListaJuego.push({ ...element.data(), id: element.id});
                });

                const filtro = auxListaJuego.filter(element=> element.categoria === categoria);  
                setAuxListCat(filtro);
            });
        }
        getJuegos();
        // eslint-disable-next-line
    },[]);

    return(
        <>
        {
        auxListCat.length > 0 && <ItemCategoria listJuegos={auxListCat}/>
        }
        </>
    )
}

export default Categoria;