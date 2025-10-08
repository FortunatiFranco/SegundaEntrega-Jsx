import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getItem } from "../mock/AsyncService";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const ItemDetailContainer = ()=>{
    const [detalle, setDetalle]=useState({})
    const {id}=useParams()
    const [cargando, setCargando]=useState(false)

    useEffect(()=>{
        setCargando(true)
        getItem(id)
        .then((res)=> setDetalle(res))
        .catch((error)=> console.error('error al cargar api', error))
        .finally(()=> setCargando(false))
    },[id])

    return (
        <>
        {
            cargando ? <Loader/>
            :
            <ItemDetail detalle={detalle}/>
        }
        </>
    )
}

export default ItemDetailContainer