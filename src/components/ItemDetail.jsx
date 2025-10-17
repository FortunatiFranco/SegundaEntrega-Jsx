import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount"
import { CarritoContext } from "../context/CarritoContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ItemDetail = ({detalle})=>{
    const {addItem}=useContext(CarritoContext)

    const [Purchase, setPurchase]=useState(false)

    const onAdd = (cantidad)=>{
        setPurchase(true)
        addItem(detalle,cantidad)
        Swal.fire({
            position:'top-end',
            icon:'success',
            title:`Agregaste ${detalle.name} al carrito`,
            showCancelButton:false,
            showConfirmButton:false,
            timer:2000
        })
    }


    return (
        <div className='d-flex flex-column align-items-center'>
            <h2>{detalle.name}</h2>
            <img src={detalle.img} alt={detalle.name} style={{width:'600px'}}/>
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