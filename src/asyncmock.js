const productos= [
{id:1 , nombre :"galletas raras", precio : 3200 , img :"../public/img/galletasraras.png",idCat:"snacks", stock:15},
{id:2 , nombre :"Soju", precio : 1299, img :"../public/img/JINROSOJU.webp",idCat:"bebidas", stock:10},
{id:3 , nombre :"Aros de cebolla", precio : 3100, img :"../public/img/Snack-Aros-de-Cebolla.webp", idCat: "snacks", stock:13} ,
{id:4 , nombre :"PineApple", precio : 1899, img :"../public/img/soju.webp", idCat:"bebidas", stock:20}
]

export const getProductos = () =>{
    return new Promise((resolve) => {
            setTimeout(()=>{
            resolve(productos)
        }, 1000)
})

}
export const getProductoPorCategoria = (idCategoria)=>{
    return new Promise(resolve => {
        setTimeout(()=>{
        const productosCategoria = productos.filter(item => item.idCat === idCategoria )
        resolve(productosCategoria)
        },100)
    })
}
export const getUnProducto = (id) =>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            const producto = productos.find (item=> item.id === Number(id))
            resolve(producto)
        },100)

    })


}