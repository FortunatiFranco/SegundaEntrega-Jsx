import React, { useContext } from 'react'
import { carritoContext } from '../context/carritoContext'

const CartView = () => {
    const {clear,removeItem,carrito}=useContext(carritoContext)
    return (
    <div>
        <h1>Tu Carrito 🛒</h1>
    <div>
    {
    carrito.map((prod)=>(
        <div key={prod.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', padding:'2rem'}}>
            <img src={prod.img} alt={prod.name} style={{width:'9rem' }}/>
            <span>{prod.name}</span>
            <span>Cantidad:{prod.quantity}</span>
            <span>${prod.price},00</span>
            <span>Total: ${prod.quantity * prod.price},00</span>
            <button className='btn btn-danger' onClick={()=> removeItem(prod.id)}>X</button>
        </div>
    ))
    }
    </div>
    </div>
    )
}

export default CartView