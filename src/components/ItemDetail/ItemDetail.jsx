import { useState } from "react"
import "../ItemDetail/ItemDetail.css"
import { Link } from "react-router-dom"
import Counter from "../counter/counter"


    const ItemDetail = ({  nombre , precio , img, stock}) =>{
        
        const [AgregarCantidad, setAgregarCantidad] = useState(0)
        
        const manejadorCantidad = (cantidad)=>{
            setAgregarCantidad(cantidad);
            console.log("productos agregados" + cantidad)

        }
        
        return(



            <div className="contenedorItem">
                <h1>{nombre}</h1>
                <img src= {img} alt= {nombre} />
                <h2> precio: ${precio}</h2>
                <p className="parraItem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, placeat alias totam cumque, quaerat maiores est sunt aspernatur, doloribus delectus praesentium vitae? Laboriosam nostrum nobis possimus! Vel blanditiis voluptas optio.</p>

                {
            
                AgregarCantidad > 0 ? (<Link className="confirmar" to={"/cart"}>Confirmar compra</Link>) : (<Counter inicial = {1} stock={stock} funcionAgregar={manejadorCantidad} />)

            }
            </div>
            )

        

    }

    export default ItemDetail