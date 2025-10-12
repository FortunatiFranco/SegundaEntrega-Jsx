import React, { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'
import EmptyCart from './EmptyCart'
import CartView from './CartView'

const CartContainer = () => {
    const {Carrito}=useContext(CarritoContext)
    return (
    <>
    {
        !Carrito.length ? <EmptyCart/> : <CartView/>
    }
    </>
    )
}

export default CartContainer