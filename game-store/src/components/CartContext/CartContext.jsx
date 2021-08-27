import React, {createContext , useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children})=>{

    const [juegosCart,setJuegosCart] =  useState([]);

    const isInCar = (juego) =>{
        return juegosCart.length>0? juegosCart.find(element => element.juego.id === juego.id) :false    //si existe es true, y si no es false
    }

    const clear = () =>{
        setJuegosCart([]);  //borrar todos
    }

    const removeItem = (itemId) =>{
        //le pasamos el id del juego y este buscara en toda la lista cual sera el que eliminara
        const filtro = juegosCart.filter(element=> element.juego.id !== itemId);
        setJuegosCart(filtro);
    }

    const settearObjeto = (juego,quantity) =>{
        setJuegosCart([...juegosCart, {juego, cantidad:quantity}]);
    }

    const addItem = (juego, quantity) =>{
        if(!isInCar(juego)){   //si es false, añadime este objeto a la lista
            settearObjeto(juego,quantity)   
        }else{
            alert("Ya tienes este objeto en tu carrito");
        }
    }

    return(
        <CartContext.Provider value={{juegosCart,addItem,removeItem,clear}}>
            {children}
        </CartContext.Provider>
    );
}
