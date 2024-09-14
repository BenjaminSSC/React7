import React, { useContext } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

const NavigationBar = () => {
  const { cart } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);

  const total = cart.reduce((acc, item) => acc + item.totalPrice, 0);

  return (
    <Navbar expand="lg" className="bg-dark text-center px-4">
      <Navbar.Brand className="text-white">Pizzería Mamma Mia!</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Button variant="outline-primary" className="me-2 text-white">
            <Link to='/' className="text-white text-decoration-none">
              Home🍕
            </Link>
          </Button>

          {token && (
            <Button variant="outline-primary" className="me-2 text-white">
              <Link to='/profile' className="text-white text-decoration-none">
                Profile🔒
              </Link> 
            </Button>
          )}
          
          {token ? (
            <Button variant="outline-danger" className="text-white" onClick={logout}>
              Logout
            </Button>
          ) : (
            <>
              <Button variant="outline-primary" className="me-2 text-white">
                <Link to='/login' className="text-white text-decoration-none"> 
                  Login🔐
                </Link>   
              </Button>
              <Button variant="outline-primary" className="me-2 text-white">
                <Link to='/register' className="text-white text-decoration-none">
                  Register🔓
                </Link> 
              </Button>
            </>
          )}

        </Nav>
        <Navbar.Text className="ms-auto text-white">
          <Button variant="outline-primary" className="me-2 text-white">
            <Link to='/cart' className="text-white text-decoration-none">
              🛒 Total: ${total.toLocaleString('es-CL')}
            </Link> 
          </Button>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;