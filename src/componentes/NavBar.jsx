import '../css/NavBar.css'
import CartWidget from './CartWidget'



const NavBar = ()=>{
    return(
        <nav className="nav-container">
            <a href="">
                <img className='logo' src="./nike.logo.png" alt="logo" />
            </a>
            <a href="">Nuevo</a>
            <a href="">Ofertas</a>
            <a href="">Catalogo</a>
            <CartWidget/>
        </nav>
    )
}


export default NavBar