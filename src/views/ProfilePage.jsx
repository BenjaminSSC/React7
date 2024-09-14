import React, { useContext } from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();

  const user = {
    profilePicture: 'https://randomuser.me/api/portraits/men/75.jpg',
    email: 'user@example.com',
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Card style={{ width: '18rem', textAlign: 'center' }}>
        <Card.Img variant="top" src={user.profilePicture} />
        <Card.Body>
          <Card.Title>Perfil de Usuario</Card.Title>
          <Card.Text>{user.email}</Card.Text>
          <Button variant="primary" onClick={handleLogout}>Cerrar Sesión</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserProfile;
