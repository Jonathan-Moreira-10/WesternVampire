import React from 'react'

const Item = ({producto}) => {
  return (
    
      <div>
                <img src={producto.image}></img>
                <h3>{producto.title}</h3>
                <p>{producto.price}</p>
              </div>
    
  )
}

export default Item
