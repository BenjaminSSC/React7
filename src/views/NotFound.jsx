import React from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center px-4 py-4">
        <h1>Lo sentimos... La página que buscas no existe.!</h1>
        <h2> ...A cambio de eso volvamos a las 🍕</h2>
        <hr />
        <Button variant="outline-primary" className="me-2">
          <Link to='/' className="text-decoration-none">
            Haz click aquí para volver a la página principal
          </Link>   
            </Button>
    </div>
  )
}

export default NotFound