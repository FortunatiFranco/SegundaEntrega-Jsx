import React, { useContext, useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { CarritoContext} from '../context/CarritoContext'
import { db } from '../services/firebase'
import EmptyCart from './EmptyCart'


const Checkout = () => {
    const [buyer, setBuyer]=useState({})
    const [checkMail, setCheckMail]=useState('')
    const {Carrito,totalCarrito,clear}=useContext(CarritoContext)
    const [orderId, setOrderId]=useState(null)

    const buyerData = (evento)=>{
        setBuyer(
            {
                ...buyer,
                [evento.target.name]: evento.target.value
            }
        )
    }

    const finalizarCompra = (evento)=>{
        evento.preventDefault()

        let order ={
            comprador: buyer,
            compras: Carrito,
            total: totalCarrito(),
            fecha: serverTimestamp()
        }
    const ventas = collection(db, "orders")
    addDoc(ventas, order)
    .then((res)=>{
        setOrderId(res.id)
        clear()
    })
    .catch((error)=> console.log(error))
    }

    if(!Carrito.length && !orderId){
        return <EmptyCart/>
    }


    return (
    <>
    {
        orderId 
        ?
        <div>
            <h2>Gracias, Realizaste tu compra !</h2>
            <h3>El id de tu compra: {orderId}</h3>
        </div>
        : 
        <div>
        <h1 className='text-center'>Complete el formulario con sus datos</h1>
        <form onSubmit={finalizarCompra}>
            <input name='name' placeholder='ingrese su nombre' className='form-control' type="text" onChange={buyerData}/>
            <input name='lastname' placeholder='ingrese su apellido' className='form-control' type="text" onChange={buyerData}/>
            <input name='address' placeholder='ingrese su dirección' className='form-control' type="text" onChange={buyerData}/>
            <input name='email' placeholder='ingrese su email' className='form-control' type="email" onChange={buyerData}/>
            <input name='second-email' placeholder='repita su email' className='form-control' type="email" onChange={(e)=> setCheckMail(e.target.value)}/>
            <button type='submit'>Completar compra</button>
        </form>
    </div>
    }
    </>
)
}

export default Checkout