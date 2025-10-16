import { createContext, useState } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({children})=>{
    const [Carrito, setCarrito]=useState([]);

    const addItem = (item,qty)=>{
        if(isInCart(item.id)){
            setCarrito(
                Carrito.map((prod)=>{
                    if(item.id === prod.id){
                        return {...prod, quantity: prod.quantity + qty}
                    }else{
                        return prod
                    }
                })
            )
        }else{
        setCarrito([...Carrito, {...item, quantity:qty}])
    }
}

    const clear = ()=>{
        setCarrito([])
    }

    const removeItem = (id)=>{
        setCarrito(Carrito.filter((prod)=> prod.id !== id))
    }

    const isInCart =(id)=>{
        return Carrito.some((prod)=> prod.id === id)
    }

    const totalCarrito = ()=>{
        return Carrito.reduce((acumulador, prod)=> acumulador += (prod.price * prod.quantity),0)
    }


    const carritoQuantity = ()=>{
        return Carrito.reduce((acumulador, prod)=> acumulador += (prod.quantity),0)
    }


    return (
        <CarritoContext.Provider value={{Carrito,addItem,clear,removeItem,totalCarrito,carritoQuantity}}>
            {children}
        </CarritoContext.Provider>
    )
}