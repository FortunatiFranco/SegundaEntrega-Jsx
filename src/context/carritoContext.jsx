import { createContext, useState } from "react";

export const carritoContext = createContext();

export const carritoProvider = ({children})=>{
    const [carrito, setCarrito]=useState([]);

    const addItem = (item,qty)=>{
        if(isInCart(item.id)){
            setCarrito(
                carrito.map((prod)=>{
                    if(item.id === prod.id){
                        return {...prod, quantity: prod.quantity + qty}
                    }else{
                        return prod
                    }
                })
            )
        }else{
        setCarrito([...carrito, {...item, quantity:qty}])
    }
}

    const clear = ()=>{
        setCarrito([])
    }

    const removeItem = (id)=>{
        setCarrito(carrito.filter((prod)=> prod.id !== id))
    }

    const isInCart =(id)=>{
        return carrito.some((prod)=> prod.id === id)
    }


    return (
        <carritoContext.Provider value={{carrito,addItem,clear,removeItem}}>
            {children}
        </carritoContext.Provider>
    )
}