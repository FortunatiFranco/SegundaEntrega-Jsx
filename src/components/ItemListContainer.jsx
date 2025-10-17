import { useEffect, useState } from 'react'
import '../css/ItemListContainer.css'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../services/firebase'
import { productos } from '../mock/AsyncService'


const ItemListContainer = (props)=>{
    const [data, setData]=useState([])
    const {type}=useParams()
    const [loader, setLoader]=useState(false)

    useEffect(()=>{
        setLoader(true)
        const prodColecction = type 
        ? query(collection(db, "productos"), where("category", "==", type))
        : collection(db, "productos")
        getDocs(prodColecction)
        .then((res)=>{
            const listApp = res.docs.map((doc)=>{
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            setData(listApp)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoader(false))
    },[type])

    return(
        <>
        {
        loader ? <Loader/>
        : <>
            <h1>{props.mensaje} {type && <span style={{textTransform:'capitalize'}}>{type}</span>}</h1>
            <ItemList data={data}/>
        </>
        }
        </>
    )
}

export default ItemListContainer