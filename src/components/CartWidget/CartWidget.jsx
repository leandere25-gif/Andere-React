import carritoImg from '../../assets/carritoImg.png'
import '../CartWidget/CartWidget.css'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../Context/CarritoContext'
import { useContext } from 'react'
const CartWidget = () =>{

const {cantidadTotal} = useContext(CarritoContext)


return(
<div>
        <Link to={"./Cart"}>
                <img className="carritoImg" src= {carritoImg}  alt="carrito" />
                <strong className='cantidadCartWidget'>{cantidadTotal}</strong>

        </Link>
</div>

)


}

export default CartWidget
