import React, { useContext } from 'react'
import { carritoContext } from '../context/carritoContext'
import EmptyCart from './EmptyCart'
import CartView from './CartView'

const CartContainer = () => {
    const {carrito}=useContext(carritoContext)
    return (
    <>
    {
        !carrito.length ? <EmptyCart/> : <CartView/>
    }
    </>
    )
}

export default CartContainer