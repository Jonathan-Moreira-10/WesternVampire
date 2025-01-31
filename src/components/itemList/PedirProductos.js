
const PedirProductos = (setProductos) => {
    
        fetch('https://fakestoreapi.com/products')
        .then(data=>data.json())
        .then(data=>setProductos(data))
}

export default PedirProductos
