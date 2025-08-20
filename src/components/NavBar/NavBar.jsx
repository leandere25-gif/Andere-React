import CartWidget from '../CartWidget/CartWidget'
import '../NavBar/NavBar.css'
import { Link , NavLink } from 'react-router-dom'

const NavBar = () => {

    return (
        <nav className='navBar'>
            <Link to={"/"}>
            <h1>TiendaCorea</h1>
            </Link>
            
            <ul className='ulContainer'>
                <li> <NavLink to="/categoria/bebidas"> Bebidas </NavLink>  </li>
                <li> <NavLink to="/categoria/snacks"> Snacks </NavLink>  </li>
                <li> <NavLink to="/extras"> Extras </NavLink>  </li>
            </ul>

        <CartWidget/>
        </nav>
    ) 
}

export default NavBar
