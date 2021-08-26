import React, {useContext, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {CartContext} from '../CartContext/CartContext';
import { database } from '../../firebase/firebase';

const FormularioOc = () =>{
    const {juegosCart, clear} = useContext(CartContext);
    let history = useHistory();

    const getTotal = ()=>{
        let retorno = 0;

        juegosCart.forEach((element)=>{
            retorno = (element.cantidad * element.juego.precio) + retorno;
        });

        return retorno;
    }

    const añadirJuego=(nombre, telefono,email)=>{
        let total = getTotal();
        let auxOc = {
            comprador:{
                nombre: nombre,
                telefono: telefono,
                email:email,
                date: new Date().toString()
            },
            compras: juegosCart,
            total: total
        }

        let juegoRemoto = database.collection("ordenes");

        juegoRemoto.add(auxOc)
            .then((element)=>{
                alert("Orden de compra generada, Id de compra: " + element.id.toString());
                clear();
                history.push("/");
            })
            .catch(()=>{
                alert("Error al subir el juego");
            })
    }

    const comprarJuego =()=>{
        let nombre = document.getElementById("nombre").value;
        let telefono = document.getElementById("telefono").value;
        let email = document.getElementById("email").value;

        if (nombre != "" && telefono != "" && email != ""){
            añadirJuego(nombre,telefono,email);
        }
    }

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
                        juegosCart&&
                            (
                            <>
                                <p>Total: {getTotal()}</p>
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