import { CarritoContext } from "../../Context/CarritoContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import "./Cart.css"

const Cart = () =>{
    const{carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext)
    if(cantidadTotal === 0){
        console.log("CARRITO CONTEXT =>", carrito, total, cantidadTotal)
        return(      
            <>
            <div className="sinProductosContainer">
                <h2 className="msjCart">No hay productos añadidos</h2>
                <Link className="linkCart" to="/"> ver todos nuestros productos :) </Link>
            </div>
            </>
        )
    }
    return(

<div>

{
    carrito.map(producto => <CartItem key={producto.item.id}{...producto}/>)
}
<div className="cartContainerItem">
    <div className="cartContainer">
            <h3 className="totalCart">Total a pagar: ${total}</h3>
            <h3 className="totalCantidad">Cantidad total: {cantidadTotal}</h3>
        <div className="buttonContainerCart">
            <button className="buttonVaciar" onClick={()=>vaciarCarrito()}>Vaciar Carrito</button>
            <Link className="linkFinalizar" to="/checkout">Finalizar compra</Link>
        </div>
    </div>
</div>
</div>

    )

}
export default Cart