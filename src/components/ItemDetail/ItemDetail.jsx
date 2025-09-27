import { useState } from "react"
import "../ItemDetail/ItemDetail.css"
import { Link } from "react-router-dom"
import Counter from "../Counter/Counter"
import { CarritoContext } from "../../Context/CarritoContext"
import { useContext } from "react"
import { toast } from "react-toastify"
    const ItemDetail = ({ id, nombre , precio , img, stock}) =>{
        
        const [AgregarCantidad, setAgregarCantidad] = useState(0)
        const {agregarAlCarrito} = useContext(CarritoContext)

        const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);



        const item = {id,nombre, precio}
        agregarAlCarrito(item, cantidad)
        toast.success("Su compra fue enviada al carrito",{autoClose: 2000, theme:"dark", position: "top-right"})
}
        
        return(



            <div className="contenedorItem">
                <h1 className="nombreDetail">{nombre}</h1>
                <img src= {img} alt= {nombre} />
                <h2 className="precioDetail"> precio: ${precio}</h2>
                <h3 className="cantidadStock">stock: {stock}</h3>
                <p className="parraItem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, placeat alias totam cumque, quaerat maiores est sunt aspernatur, doloribus delectus praesentium vitae? Laboriosam nostrum nobis possimus! Vel blanditiis voluptas optio.</p>

                {
            
                AgregarCantidad > 0 ? (<Link className="confirmar" to={"/cart"}>Confirmar compra</Link>) : (<Counter inicial = {1} stock={stock} funcionAgregar={manejadorCantidad} />)

            }
            </div>
            )

        

    }

    export default ItemDetail