import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Header = () => {
    const { allContexts } = useAuth();
    const { user, logOut } = allContexts;

    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" className='sticky-top'>
            <Container>
                <Navbar.Brand as={Link} to="/home">CarMax.Com</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className='text-white' as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className='text-white' as={Link} to="/aboutus">About Us</Nav.Link>
                        <Nav.Link className='text-white' as={Link} to="/exploreus">Explore Us</Nav.Link>
                        {/* <Nav.Link className='text-white' as={Link} to="/dashboard">Dashboard</Nav.Link> */}
                        {
                            user?.email ? <>
                                <Nav.Link className='text-white' as={Link} to="/myorders">My Orders</Nav.Link>
                                <Nav.Link className='text-white' as={Link} to="/dashboard">Dashboard</Nav.Link>

                                <Nav.Link onClick={logOut} className='text-white' as={Link} to="/login">Logout</Nav.Link>
                                <Nav.Link className='text-dark'>Hello {user.displayName}</Nav.Link>
                            </>
                                :
                                <Nav.Link className='text-white' as={Link} to="/login">Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;