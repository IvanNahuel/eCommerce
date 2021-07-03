import React from "react";  //esto nos permite que funcione nuestra app

//definimos nuestro componente, como una funcion
const NavBar = (props) =>{
    console.log(props);

    return (
        <nav className="nav-bar">
            <h1>{props.nombreDeLaTienda}</h1>
            <section>
                    <div>Productos</div>
                    <div>Contactos</div>
                    <div>Mi Carrito</div>
            </section>
        </nav>
    );
};

export default NavBar


