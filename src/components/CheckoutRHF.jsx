import React from 'react'
import { CarritoContext } from '../context/CarritoContext'
import { useState, useContext } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../services/firebase'
import EmptyCart from './EmptyCart'
import { useForm } from 'react-hook-form'



const CheckoutRHF = () => {
    const [orderId, setOrderId] = useState(null)
    const {Carrito, totalCarrito, clear}= useContext(CarritoContext)
    const {register, handleSubmit, formState:{errors}, getValues}= useForm()

    const finalizarCompra = (dataForm)=> {
        let order ={
            comprador: {
            name: dataForm.name,
            lastname:dataForm.lastname,
            address:dataForm.address,
            email: dataForm.email
        },
        compras: Carrito,
        total: totalCarrito(), 
        fecha: serverTimestamp()
    }
    const ventas = collection(db, "orders")
    addDoc(ventas, order)
    .then((res)=> {
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
?<div>
    <h2>Realizate tu compra correctamente! 🥳🙌</h2>
    <h3>El id de la compra: {orderId}</h3>
    </div>
    : <div>
        <h1>Complete el formulario con sus datos</h1>
        <form onSubmit={handleSubmit(finalizarCompra)}>
            <input name='name' className='form-control' placeholder='Ingrese su nombre' type="text" {...register("name", {required:true, minLength:3})}/>
            {errors?.name?.type === "required" && <span  style={{color:'red'}}>Por favor complete el campo.</span>}
            {errors?.name?.type === "minLength" && <span  style={{color:'red'}}>El nombre debe contener mínimo 3 caracteres.</span>}
            <input name='lastname' className='form-control' placeholder='Ingrese su apellido' type="text" {...register("lastname", {required:true, minLength:2})}/>
            {errors?.lastname?.type === "required" && <span  style={{color:'red'}}>Por favor complete el campo.</span>}
            {errors?.lastname?.type === "minLength" && <span  style={{color:'red'}}>El apellido debe contener mínimo 2 caracteres.</span>}
            <input name='address' className='form-control' placeholder='Ingrese su direccion de envío' type="text" {...register("address", {required:true, minLength:10, maxLength:25})}/>
            {errors?.address?.type === "required" && <span  style={{color:'red'}}>Por favor complete el campo.</span>}
            {errors?.address?.type === "minLength" && <span  style={{color:'red'}}>La dirección debe contener mínimo 10 caracteres.</span>}
            {errors?.address?.type === "maxLength" && <span  style={{color:'red'}}>La dirección es demasiado larga.</span>}
            <input name='email' className='form-control' placeholder='Ingrese su correo' type="email" {...register("email", {required:true})}/>
            {errors?.email?.type === "required" && <span  style={{color:'red'}}>Por favor complete el campo.</span>}
            <input name='second-email' className='form-control' placeholder='Repita su correo' type="email" {...register("secondemail", {required:true, validate:{equalsMails: mail2 => mail2 === getValues().email}})}/>
            {errors?.secondemail?.type === "required" && <span  style={{color:'red'}}>Por favor complete el campo.</span>}
            {errors?.secondemail?.type === "equalsMails" && <span  style={{color:'red'}}>Los mails deben ser iguales.</span>}
            <button type='submit' className='btn btn-success'>Completar Compra</button>
        </form>
    </div>
}
</>
)
}



export default CheckoutRHF