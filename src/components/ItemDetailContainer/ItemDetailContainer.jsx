import { useEffect, useState } from "react"
import { getUnProducto } from "../../asyncmock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"



const ItemDetailContainer = () =>{

const [producto, setProducto] = useState (null)
const {idItem} = useParams()

useEffect(()=>{ 

getUnProducto(idItem)
.then(respuesta=>setProducto(respuesta))

},[idItem])

    return(
        
    <div className="detailContainer">
        {producto ? (<ItemDetail {...producto} />) : (
        
        <p>Cargando producto...</p>)}
    </div>
        
    
)


}

export default ItemDetailContainer