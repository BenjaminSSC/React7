import { useEffect, useState } from "react"
import React from 'react'

const Pizza = () => {
 const [pizza, setPizza] = useState({})

 const getPizzas = async () => {
  const res = await fetch('http://localhost:5000/api/pizzas/p001')
  const pizza = await res.json()

  setPizza(pizza)
}
 useEffect(()=>{
  getPizzas()
},[])

 return (
    <div id={pizza.id}>
      <h1>{pizza.name}</h1>
      <p>Precio: ${pizza.price}</p>
      <img src={pizza.img} alt="" />
      <h3>Ingredientes:</h3>
      <ul>
        {pizza.ingredients?.map((ingredient) => {
            return <li key={ingredient}>{ingredient}</li>
        })}
      </ul>
      <h4>Descripción:</h4>
      <p>{pizza.desc}</p>
    </div>
  )
}

export default Pizza