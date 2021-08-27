import React from "react"; 
import CartWidgets from '../CartWidgets/CartWidgets';
import {Link} from 'react-router-dom';

const NavBar = (props) =>{
    return (
        <nav className="nav-bar">
            <Link to={'../'}>        
                <h1>{props.nombreDeLaTienda}</h1>
            </Link>
            <section>
                <Link to={'/categoria/Mundo Abierto'} className="anchor-container">    
                    <div>Mundo Abierto</div>
                </Link>
                <Link to={'/categoria/Disparos'} className="anchor-container"> 
                    <div>Disparos</div>
                </Link>
                <Link to={'/categoria/Estrategia'} className="anchor-container"> 
                    <div>Estrategia</div>
                </Link>
                <Link to={'/cart'} className="anchor-container">        
                    <CartWidgets/>
                </Link>
            </section>
        </nav>
    );
};

export default NavBar


