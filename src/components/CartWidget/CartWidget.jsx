import carritoImg from '../../assets/carritoImg.png'
import '../CartWidget/CartWidget.css'
import ItemListContainer from '../ItemListContainer/ItemListContainer.jsx'

const CartWidget = () =>{


return(
<div>
        <img className="carritoImg" src= {carritoImg}  alt="carrito" />

</div>
    
)


}

export default CartWidget

    // <input type="checkbox" name="carrito" id="carritoImg" />
    // <label htmlFor="carritoImg">
    // <img className="carritoImg" src= {carritoImg}  alt="carrito" />
    // </label>