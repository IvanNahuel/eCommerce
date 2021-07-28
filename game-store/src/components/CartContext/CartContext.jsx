import React, {createContext , useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children})=>{

    const [juegosCart,setJuegosCart] =  useState([]);


    //al clickear en comprar se debe guardar en este cartContext el producto y su cantidad en forma de objeto

    //metodos
    //addItem(item, queantity)          //agregar cierta cantidad de un item al carrito
    //removeItem(itemId)                //Remover un item del cart usando el id
    //clear()                           //remover todos los items
    //isInCar()                         //true/false

    
    const isInCar = (juego) =>{
        console.log("asd");
        return juegosCart.length>0? juegosCart.find(element => element.juego.id == juego.id) :false    //si existe es true, y si no es false
    }

    const clear = () =>{
        setJuegosCart([]);  //borrar todos
    }

    const removeItem = (itemId) =>{

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

    console.log(juegosCart);

    return(
        <CartContext.Provider value={{juegosCart,addItem,removeItem,clear}}>
            {children}
        </CartContext.Provider>
    );
}
