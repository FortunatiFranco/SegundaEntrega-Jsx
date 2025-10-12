import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount"
import { carritoContext } from "../context/carritoContext";

const ItemDetail = ({detalle})=>{
    const {addItem}=useContext(carritoContext)

    const [Purchase, setPurchase]=useState(false)

    const onAdd = (cantidad)=>{
        console.log(`compraste ${cantidad} unidades de ${detalle.name}`)
        setPurchase(true)
        addItem(detalle,cantidad)
    }


    return (
        <div>
            <h2>{detalle.name}</h2>
            <img src={detalle.img} alt={detalle.name}/>
            <p>{detalle.description}</p>
            <p>${detalle.price},00</p>
            <p>Stock Disponible:{detalle.stock} unidades</p>
            { 
            Purchase ? <Link className="btn btn-dark" to='/cart'>ir al carrito</Link>
            : <ItemCount stock={detalle.stock} onAdd={onAdd}/>}
        </div>
    )
}

export default ItemDetail