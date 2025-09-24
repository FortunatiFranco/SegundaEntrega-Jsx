import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getItem } from "../mock/AsyncService";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ()=>{
    const [detalle, setDetalle]=useState({})

    const {id}=useParams()

    useEffect(()=>{
        getItem(id)
        .then((res)=> setDetalle(res))
        .catch((error)=> console.error('error al cargar api', error))
    },[id])

    return (
        <div>
            <ItemDetail detalle={detalle}/>
        </div>
    )
}

export default ItemDetailContainer