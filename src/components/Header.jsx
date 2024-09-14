import React from 'react';
import { Container } from 'react-bootstrap';
import backgroundImage from '../assets/Header.jpg'; 

const Header = () => {
  return (
    <div
      className="header"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '30vh',
        width: '99.1vw',
        position: 'relative',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '4rem',
        }}
      >
        <Container className="text-center">
          <h1><strong>¡Pizzería Mamma Mía!</strong></h1>
          <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
          <hr />
        </Container>
      </div>
    </div>
  );
}

export default Header;


