import React from "react";

const ItemDetail = ({detalle})=>{
    return (
        <div>
            <h2>{detalle.name}</h2>
            <img src={detalle.img} alt={detalle.name}/>
            <p>{detalle.description}</p>
            <p>${detalle.price},00</p>
            <p>Stock Disponible:{detalle.stock} unidades</p>
        </div>
    )
}

export default ItemDetail