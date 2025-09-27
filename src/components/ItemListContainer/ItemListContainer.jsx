import { useEffect, useState } from "react"
import "../ItemListContainer/ItemListContainer.css"
import { db } from "../../services/config.js"
import { collection,getDocs,query,where } from "firebase/firestore"
import ItemList from "../ItemList/ItemList.jsx"
import { useParams } from "react-router-dom"
import Loader from "../Loader/Loader"

const ItemListContainer = () =>{

const [productos , setProductos] = useState([])
const [loading, setLoading] = useState(false)

const {idCategoria} = useParams()


useEffect(()=>{
    
    setLoading(true)

    const misProductos = idCategoria ? query(collection(db,"productos"), where("idCat","==" , idCategoria)) : query(collection(db,"productos"))

getDocs(misProductos)
.then(res=>{
    const nuevosProductos = res.docs.map(doc=>{
        const data = doc.data()
        return{ id: doc.id , ...data}
        
    })
    setProductos(nuevosProductos)
})
    .catch(error =>console.log(error))
    .finally(()=>{
        console.log("proceso terminado")
        setLoading(false)
    })

},[idCategoria])


return(
    
    <div className="container">
    
    {loading ? <Loader/> : <ItemList productos = {productos}/>}

    </div>
)


}

export default ItemListContainer