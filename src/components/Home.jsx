import React, { useEffect, useState } from 'react';
import Header from './Header';
import CardPizza from './CardPizza';

const Home = () => {
 const [pizzas, setPizzas] = useState([])

 const getPizzas = async () => {
  const res = await fetch('http://localhost:5000/api/pizzas')
  const pizza = await res.json()

  setPizzas(pizza)
 }
 useEffect(()=>{
  getPizzas()
 },[])

  return (
    <div className="d-flex flex-wrap justify-content-around">
      <div>
        <Header />
      </div>
      {pizzas.map((pizza, index)=> (
      <CardPizza
        key={index}
        name={pizza.name}
        price={pizza.price}
        ingredients={pizza.ingredients}
        img={pizza.img}
      />))}
      
    </div>
  );
};

export default Home;

