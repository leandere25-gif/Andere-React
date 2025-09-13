import { Link } from "react-router-dom"
import "./Item.css"
const Item = ({id, nombre ,precio,img}) =>{

    return(
    
    <div className="cardProducto">
    <img src= {img} alt= {nombre}/>
    <h2 className="nameItem"> {nombre} </h2>
    <h3 className="precioItem"> ${precio} </h3> 
    <div className="buttonContainer">
    <Link to={`/item/${id}`}> <button className="botonDetalles"> Ver Detalles </button> </Link>
    </div>
    </div>
)

} 

export default Item