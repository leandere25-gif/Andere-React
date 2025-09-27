import { useContext, useState } from "react"
import {db} from "../../services/config"
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore"
import { CarritoContext } from "../../Context/CarritoContext"
import "./Checkout.css"


const Checkout = () =>{

    const [nombre , setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")

    const {carrito, vaciarCarrito, total} = useContext(CarritoContext)

    const manejadorFormulario = (event) =>{
        event.preventDefault();

    if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
        setError("completa los campos capo")
        return;
}
    if(email !== emailConfirmacion){
        setError("los mail no coinciden.. media pila")
        return;
}
    if(carrito.length === 0){
    setError("No hay productos en el carrito");
    return;
    
}


    const orden = {
        item: carrito.map(producto =>({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad
})),
        total: total,
        fecha: new Date(),
        nombre,
        apellido,
        telefono,
        email
    }

Promise.all(
orden.item.map(async(productoOrden)=>{
const productoRef = doc(db,"productos",productoOrden.id)
const productoDoc = await getDoc(productoRef)
const stockActual = productoDoc.data().stock

await updateDoc (productoRef,{
    stock: stockActual - productoOrden.cantidad
})

})

)

.then(()=>{    
        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id)
                vaciarCarrito()
            })
            .catch(error => {
                console.log("Error al crear la orden", error)
                setError("Se produjo un error al crear la orden")
            })
    })
    .catch((error)=>{
        console.log("No se pudo actualizar el stock", error)
        setError("No se puede actualizar el stock")
    })
}
    
    return (
    
    <div className="checkOutContainer">
        <h2>Checkout</h2>

        <form onSubmit={manejadorFormulario}>
            {
                
                carrito.map(producto=> (
                    <div className="containerProductsC" key={producto.item.id}>
                        <p>{producto.item.nombre} x {producto.cantidad}</p>
                        <p>{producto.item.precio}</p>
                        <hr />
                    </div>
                    
                ))
            }
            <div className="inputC">
                <label htmlFor="">Nombre</label>
                <input type="text" onChange={(e) => setNombre(e.target.value)}/>
            </div>
            <div className="inputC">
                <label htmlFor="">Apellido</label>
                <input type="text" onChange={(e) => setApellido(e.target.value)} />
            </div>
            <div className="inputC">
                <label htmlFor="">Telefono</label>
                <input type="text" onChange={(e) => setTelefono(e.target.value)} />
            </div>
            <div className="inputC">
                <label htmlFor="">Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="inputC">
                <label htmlFor="">Email Confirmacion</label>
                <input type="email" onChange={(e) => setEmailConfirmacion(e.target.value)}/>
            </div>
            {
                error && <p style={{color: "red"}}>{error}</p>
            }

            <button type="submit">Confirmar Compra</button>
            {
                ordenId && (
                    <strong>Gracias por tu compra!! Tu numero de orden es: {ordenId}</strong>
                )
            }


        </form>

    </div>
  )
}

export default Checkout