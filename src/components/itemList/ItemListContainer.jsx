import { useState,useEffect } from 'react'
import PedirProductos from './PedirProductos'
import ItemList from './ItemList'

const ItemListContainer = () => {
const [productos,setProductos]=useState([])
   
  useEffect(()=>{
    
   PedirProductos(setProductos)
   
  },[])
    
  console.log(productos)

  return (
    <div>
      <h1>Productos</h1>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer
