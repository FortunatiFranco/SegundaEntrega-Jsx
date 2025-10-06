import { IoCartOutline } from "react-icons/io5";
import "../css/carrito.css"


const CartWidget = ()=>{
    return(
    <div className="carrito">
        <IoCartOutline />
        <span style={{color:'white'}}>(3)</span>
    </div>
    )
}

export default CartWidget
