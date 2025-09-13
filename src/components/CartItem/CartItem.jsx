import { useContext } from "react"
import { CarritoContext } from "../../Context/CarritoContext"
import "./CartItem.css"

const CartItem  = ({item, cantidad}) =>{

const{eliminarProducto} = useContext(CarritoContext)

return(
        <div className="cartItemContainer">
            <h4 className="nameCartItem">{item.nombre}</h4>
            <p className="cantidadCartItem">Cantidad: {cantidad}</p>
            <p className="precioCartItem">Precio: ${item.precio}</p>
            <button className="eliminarItem" onClick={()=>eliminarProducto(item.id)}>Eliminar</button>
        </div>

)

}

export default CartItem