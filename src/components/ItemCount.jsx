import { useState } from 'react'

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount]=useState(1)

    const sumar = ()=>{
        if(count < stock){
        setCount(count + 1);
    }
}

    const restar = ()=>{
        if(count > 0){
        setCount(count - 1);
    }
}

const comprar = ()=>{
    onAdd(count)
}



    return (
    <div style={{width:'10%'}} className=' d-flex justify-content-between align-items-center'>
    <div>
        <button className='btn btn-danger' onClick={restar}>-</button>
        <span>{count}</span>
        <button className='btn btn-success' onClick={sumar}>+</button>
    </div>
    <button onClick={comprar} disabled={stock === 0 || count === 0} className='btn btn-primary'>Comprar</button>
    </div>
)
}

export default ItemCount