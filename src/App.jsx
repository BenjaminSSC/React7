import React from 'react';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Context
import CartProvider from "./context/CartContext";
import UserProvider from './context/UserContext';

// Views
import HomePage from './views/HomePage';
import RegisterPage from './views/RegisterPage';
import LoginPage from './views/LoginPage';
import CartPage from './views/CartPage';
import PizzaPage from './views/PizzaPage';
import ProfilePage from './views/ProfilePage';
import NotFound from './views/NotFound';

function App() {
  return (
    <UserProvider>
      <CartProvider>
          <NavigationBar /> 
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/pizza/:id' element={<PizzaPage />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
          <Footer />
      </CartProvider>
    </UserProvider>
  );
}

export default App;