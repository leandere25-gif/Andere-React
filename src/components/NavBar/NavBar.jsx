import CartWidget from '../CartWidget/CartWidget'
import '../NavBar/NavBar.css'

const NavBar = () => {

    return (
        <nav className='navBar'>

            <h1>TiendaCorea</h1>
            <ul className='ulContainer'>
                <li> <a href="#">bebidas</a></li>
                <li> <a href="#">snacks</a></li>
                <li> <a href="#">golosinas</a></li>
                <li> <a href="#">conservas</a></li>
                <li> <a href="#">extras</a></li>
            </ul>

        <CartWidget/>
        </nav>
    )
}

export default NavBar
