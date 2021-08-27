import {React, useState, useEffect} from 'react';
import { database } from '../../firebase/firebase';
import {useParams} from 'react-router'
import ItemCategoria from '../ItemCategoria/ItemCategoria';

const Categoria =()=>{
    const [auxListCat,setAuxListCat] = useState([]);
    //aca capturamos la categoria pasado por parametro y filtramos
    const {categoria} = useParams();
       
    const getJuegos = () =>{
        const juegos = database.collection('games');
        juegos.get().then((requests)=>{
            let auxListaJuego = [];
            
            requests.docs.forEach((element) =>{
                auxListaJuego.push({ ...element.data(), id: element.id});
            });
            //aca podemos filtrar y se lo pasamos a auxListCat
            const filtro = auxListaJuego.filter(element=> element.categoria == categoria);  
            setAuxListCat(filtro);
        });
    }

    useEffect(()=>{
        getJuegos();
    },[]);


    return(
        <>
        {/* aca podemos reenderizar la card de otros juegos y pasarle un array aux que representa las caterorias */}
        {
        auxListCat.length > 0 && <ItemCategoria listJuegos={auxListCat}/>
        }
        </>
    )
}

export default Categoria;