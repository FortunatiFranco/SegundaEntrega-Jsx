import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getItem } from "../mock/AsyncService";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../services/firebase";

const ItemDetailContainer = ()=>{
    const [detalle, setDetalle]=useState({})
    const {id}=useParams()
    const [cargando, setCargando]=useState(false)
    const [Invalid, setInvalid]=useState(null)

    useEffect(()=>{
        setCargando(true)
        const docRef = doc(db, "productos", id)
        getDoc(docRef)
        .then((res)=>{
            if(res.data()){
                setDetalle({id: res.id, ...res.data()})
            }else{
                setInvalid(true)
            }
        })
        .catch((error)=> console.log(error))
        .finally(()=> setCargando(false))
    }, [id])

    if(Invalid){
        return (
        <div className="text-center">
            <h3>El producto no existe man </h3>
            <Link className="btn btn-dark" to='/'>Volver al home</Link>
        </div>
    )
    }

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