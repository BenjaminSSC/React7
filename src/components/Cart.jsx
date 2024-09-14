import React, { useState } from 'react';
import { pizzas } from './pizzas';

const Cart = () => {
  const [cart, setCart] = useState(pizzas.map(pizza => ({ ...pizza, quantity: 0, totalPrice: 0 })));

  const handleIncrease = (id) => {
    const updatedCart = cart.map((pizza) => {
      if (pizza.id === id) {
        const newQuantity = pizza.quantity + 1;
        return { ...pizza, quantity: newQuantity, totalPrice: newQuantity * pizza.price };
      }
      return pizza;
    });
    setCart(updatedCart);
  };

  const handleDecrease = (id) => {
    const updatedCart = cart.map((pizza) => {
      if (pizza.id === id) {
        const newQuantity = Math.max(pizza.quantity - 1, 0);
        return { ...pizza, quantity: newQuantity, totalPrice: newQuantity * pizza.price };
      }
      return pizza;
    });
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((acc, pizza) => acc + pizza.totalPrice, 0).toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Carrito de Compras</h2>
      <div className="row mb-3">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <h4>Total Compra: {calculateTotal()}</h4>
          <button className="btn btn-success btn-lg">Pagar</button>
        </div>
      </div>
      <div className="row">
        {cart.map((pizza) => (
          <div key={pizza.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
              <img src={pizza.img} className="card-img-top" alt={pizza.name} />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title">{pizza.name}</h4>
                <p className="card-text">{pizza.desc}</p>
                <p className="card-text"><strong>Ingredientes:</strong></p>
                <ul>
                  {pizza.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
                <p className="card-text"><strong>Precio:</strong> ${pizza.price.toLocaleString('es-CL')}</p>
                <p className="card-text"><strong>Cantidad:</strong> {pizza.quantity || 0}</p>
                <p className="card-text"><strong>Total:</strong> ${(pizza.totalPrice || 0).toLocaleString('es-CL')}</p>
                <div className="mt-auto">
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-primary btn-sm" onClick={() => handleIncrease(pizza.id)}>+</button>
                    <button className="btn btn-secondary btn-sm" onClick={() => handleDecrease(pizza.id)}>-</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;