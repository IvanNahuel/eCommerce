import React from 'react';
import Item from '../Item/Item';

const ItemCategoria =({listJuegos})=>{

    const divStyle ={        
        height: listJuegos.length > 5?'600px':'300px'
    }

    return(
        <div className="item-categoria-list" style={divStyle}>
            {
            listJuegos.map(elemento => <Item juego={elemento} key={elemento.id}/>)
            }
        </div>
    )
}

export default ItemCategoria;