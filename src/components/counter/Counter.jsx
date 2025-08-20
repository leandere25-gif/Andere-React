import { useState } from "react"
import "./Counter.css"
    
    
    
    const Counter = ({inicial, stock, funcionAgregar}) =>{
    const [contador, setContador] = useState(1)

        const incrementar = () =>{
            if(contador < stock)
                setContador(contador + 1)
            }

        const decrementar = () =>{
            if(contador > inicial)
                setContador(contador - 1)
        }


    return(

        <div className="buttonContainer">

            <button className="botonComprar" onClick={decrementar}> - </button>
            <p className="contadorProductos">{contador}</p>
            <button className="botonComprar" onClick={incrementar}> + </button>
            <button className="botonAgregar" onClick={()=>funcionAgregar(contador) } >Agregar al carro</button>

        </div>
)


    }

export default Counter