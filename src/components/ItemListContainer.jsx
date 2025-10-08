import { useEffect, useState } from 'react'
import '../css/ItemListContainer.css'
import { getProducts } from '../mock/AsyncService'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import Loader from './Loader'


const ItemListContainer = (props)=>{
    const [data, setData]=useState([])
    const {type}=useParams()
    const [loader, setLoader]=useState(false)
    useEffect(()=>{
        setLoader(true)
        getProducts()
        .then((res)=> {
            if(type){
                setData(res.filter((prod)=> prod.category === type))
            }else{
                setData(res)
            }
        })
        .catch((error)=> console.error('Ocurrio un error', error))
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