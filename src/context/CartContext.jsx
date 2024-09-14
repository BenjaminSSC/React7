// import React, { createContext, useState } from 'react'

// export const CartContext = createContext();

// const CartProvider = ({ children }) => {
//  const [counter, setCounter] = useState(0);
 

//  return (
//  <CartContext.Provider value={{ counter, setCounter }}>
//   {children}
//  </CartContext.Provider>
// );
// };
// export default CartProvider;

import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const catchPizza = (pizza) => {
    setCart(prevCart => {
      const pizzaExists = prevCart.find(item => item.id === pizza.id);
      if (pizzaExists) {
        return prevCart.map(item =>
          item.id === pizza.id
            ? { ...item, quantity: item.quantity + 1, totalPrice: (item.quantity + 1) * item.price }
            : item
        );
      } else {
        return [...prevCart, { ...pizza, quantity: 1, totalPrice: pizza.price }];
      }
    });
  };

  const removePizza = (id) => {
    setCart(prevCart => 
      prevCart
        .map(pizza =>
          pizza.id === id
            ? { ...pizza, quantity: pizza.quantity - 1, totalPrice: (pizza.quantity - 1) * pizza.price }
            : pizza
        )
        .filter(pizza => pizza.quantity > 0)
    );
  };

  return (
    <CartContext.Provider value={{ cart, catchPizza, removePizza }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
