import { useEffect, useState } from "react"
import "../ItemListContainer/ItemListContainer.css"
import { getProductos, getProductoPorCategoria } from "../../asyncmock.js"
import ItemList from "../itemList/itemList.jsx"
import { useParams } from "react-router-dom"


const ItemListContainer = () =>{

const [productos , setProductos] = useState([])
const {idCategoria} = useParams()

useEffect(()=>{
    
    const funcionProductos = idCategoria ? getProductoPorCategoria : getProductos

    funcionProductos(idCategoria)
    .then(res=>setProductos(res))
    
    
},[idCategoria])

console.log(productos)



return(
    
    <div className="container">
    
    <h2>Mis productos</h2>
    <ItemList productos = {productos}/>

    </div>
)


}

export default ItemListContainer