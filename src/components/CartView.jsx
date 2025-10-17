import React, { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const CartView = () => {
    const {clear,removeItem,Carrito,totalCarrito}=useContext(CarritoContext)

    const preConfirm = ()=> {
        Swal.fire({
            title:'¿Estas seguro de borrar todo el carrito?',
            icon:'question',
            showDenyButton:true,
            denyButtonText:'No',
            confirmButtonText:'Si'
        }).then((result)=>{
            if(result.isConfirmed){
                clear()
            }else if(result.isDenied){
                //poner algo si declinan
            }
        })
    }

    return (
    <div>
        <h1>Tu Carrito 🛒</h1>
    <div>
    {
    Carrito.map((prod)=>(
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
    <span>Total a pagar: ${totalCarrito()},00</span>
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', padding:'2rem'}}>
        <button className='btn btn-danger' onClick={preConfirm}>Limpiar Carrito</button>
        <Link to='/checkout' className='btn btn-success'>Terminar Compra</Link>
    </div>
    </div>
    )
}

export default CartView