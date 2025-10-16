import React, { useState } from 'react'

const Checkout = () => {
    const [buyer, setBuyer]=useState({})
    const [checkMail, setCheckMail]=useState('')

    const buyerData = (evento)=>{
        setBuyer(
            {
                ...buyer,
                [evento.target.name]: evento.target.value
            }
        )
    }



    return (
    <div>
        <h1 className='text-center'>Complete el formulario con sus datos</h1>
        <form>
            <input name='name' placeholder='ingrese su nombre' className='form-control' type="text" onChange={buyerData}/>
            <input name='lastname' placeholder='ingrese su apellido' className='form-control' type="text" onChange={buyerData}/>
            <input name='address' placeholder='ingrese su dirección' className='form-control' type="text" onChange={buyerData}/>
            <input name='email' placeholder='ingrese su email' className='form-control' type="email" onChange={buyerData}/>
            <input name='second-email' placeholder='repita su email' className='form-control' type="email" onChange={(e)=> setCheckMail(e.target.value)}/>
            <button type='submit'>Completar compra</button>
        </form>
    </div>
)
}

export default Checkout