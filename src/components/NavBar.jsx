import { NavLink } from 'react-router-dom'
import '../css/NavBar.css'
import CartWidget from './CartWidget'



const NavBar = ()=>{
    return(
        <nav className="nav-container">
            <NavLink to="/">
                <img className='logo' src="./nike.logo.png" alt="logo" />
            </NavLink>
            <NavLink to='/category/nuevo'>Nuevo</NavLink>
            <NavLink to='/category/oferta'>Ofertas</NavLink>
            <NavLink to='/category/PreLanzamiento'>pre-Lanzamiento 2k26</NavLink>
            <NavLink to='/cart'><CartWidget/></NavLink>
        </nav>
    )
}


export default NavBar