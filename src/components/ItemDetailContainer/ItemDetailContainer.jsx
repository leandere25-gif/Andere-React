import { useEffect, useState } from "react"
// import { getUnProducto } from "../../asyncmock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { db } from "../../services/config"
import {getDoc,doc} from "firebase/firestore"


const ItemDetailContainer = () =>{

const [producto, setProducto] = useState (null)
const {idItem} = useParams()

    useEffect(()=>{
        const nuevoDoc = doc(db,"productos", idItem)
        getDoc(nuevoDoc)
        
        .then(res=> {
            const data = res.data()
            console.log(data)
            const nuevoProducto = {id: res.id , ...data}
            console.log(nuevoProducto)
            setProducto(nuevoProducto)
            // Loader()
            .catch(error => console.log("error", error))
        })
    },[idItem])



// useEffect(()=>{ 

// getUnProducto(idItem)
// .then(respuesta=>setProducto(respuesta))

// },[idItem])

    return(
        
    <div className="detailContainer">
        {producto ? (<ItemDetail {...producto} />) : (
        
        <p>Cargando producto...</p>)}
    </div>
        
    
)


}

export default ItemDetailContainer