import { IoCartOutline } from "react-icons/io5";
import "../css/carrito.css"
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";


const CartWidget = ()=>{
    const {Carrito,carritoQuantity} = useContext(CarritoContext)

    return(
    <div className="carrito">
        <IoCartOutline />
        {Carrito.length > 0 && <span style={{color:'white', margin: "3px", fontSize:"18px"}}>{carritoQuantity()}</span>}
    </div>
    )
}

export default CartWidget
