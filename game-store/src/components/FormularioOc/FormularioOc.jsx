import React, {useContext, useState} from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import {CartContext} from '../CartContext/CartContext';
import { database } from '../../firebase/firebase';

const FormularioOc = () =>{
    const {juegosCart} = useContext(CartContext);
    const {id} = useParams();
    const [juegoOc, setJuegoOc] = useState(false);
    let history = useHistory();

    const buscarJuego =() =>{
        const filtro = juegosCart.filter(element=> element.juego.id == id);
        setJuegoOc(filtro);
    }

    const añadirJuego=(nombre, telefono,email)=>{
        let auxOc = {
            nombre: nombre,
            telefono: telefono,
            email:email,
            id: juegoOc[0].juego.id,
            title: juegoOc[0].juego.nombre,
            price: juegoOc[0].juego.precio,
            date: new Date().toString(),
            total: juegoOc[0].juego.precio * juegoOc[0].cantidad,
        }

        let juegoRemoto = database.collection("ordenes");

        juegoRemoto.add(auxOc)
            .then(()=>{
                history.push("/");
            })
            .catch(()=>{
                alert("Error al subir el juego");
            })
    }

    const comprarJuego =()=>{
        console.log("entro al metdo comprarjuego");
        let nombre = document.getElementById("nombre").value;
        let telefono = document.getElementById("telefono").value;
        let email = document.getElementById("email").value;

        if (nombre != "" && telefono != "" && email != ""){
            añadirJuego(nombre,telefono,email);
        }
    }

    useState(()=>{
        console.log("use estateeeee");
        buscarJuego();
    },[]);

    return (
        <div className="formulario-oc">
            <h2>
                ¡Rellena tus datos para la compra!
            </h2>
            <form id="formulario" className="formulario-flex-container">
                <label>Nombre</label>
                <input id="nombre" type="text"></input>
                <label>Telefono</label>
                <input id="telefono" type="number"></input>
                <label>Email</label>
                <input id="email" type="email"></input>
            </form>
            <div>
                <div className="resumen-oc">
                    <div>
                        <h3>Resumen de compra</h3>
                        {
                        juegoOc&&
                            (
                            <>
                                <p>Titulo: {juegoOc[0].juego.nombre}</p>
                                <p>Total: {juegoOc[0].juego.precio * juegoOc[0].cantidad}</p>
                            </>
                            )                        
                        }
                    </div>
                    <div className="btn-acciones">
                        <Link to="/cart">
                            <div className="confirmar-compra-btn cancelar">Cancelar</div>
                        </Link>
                        <div onClick={comprarJuego} className="confirmar-compra-btn comprar">Comprar</div>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default FormularioOc;