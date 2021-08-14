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
                    <div>Mundo Abierto</div>
                    <div>Disparos</div>
                    <div>Estrategia</div>
                    <CartWidgets/>
            </section>
        </nav>
    );
};

export default NavBar


