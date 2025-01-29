import React, { useState } from 'react'

export default function Counter() {

    const [number, setNumber]=useState(1)

    const sumar=()=>{
      
       setNumber(number +1)
      
    } 
    const restar=()=>{
      if(number<=1){
         alert("No se puede restar mas producto")
      }
      else{
       setNumber(number -1)
      }
      
    } 
    
     return (
    <div>
      <h2>{number}</h2>
      <button onClick={sumar}>sumar</button>
      <button onClick={restar}>restar</button>
    </div>
  )
}
