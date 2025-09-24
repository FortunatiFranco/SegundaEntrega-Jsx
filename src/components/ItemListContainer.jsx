import { useEffect, useState } from 'react'
import '../css/ItemListContainer.css'
import { getProducts } from '../mock/AsyncService'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = (props)=>{
    const [data, setData]=useState([])
    const {type}=useParams()
    useEffect(()=>{
        getProducts()
        .then((res)=> {
            if(type){
                setData(res.filter((prod)=> prod.category === type))
            }else{
                setData(res)
            }
        })
        .catch((error)=> console.error('Ocurrio un error', error))
    },[type])

    return(
        <div>
            <h1>{props.mensaje} {type && <span style={{textTransform:'capitalize'}}>{type}</span>}</h1>
            <ItemList data={data}/>
        </div>
    )
}

export default ItemListContainer