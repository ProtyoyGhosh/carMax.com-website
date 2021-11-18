import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
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
                        {
                            user?.email ? <>
                                {/* <Nav.Link className='text-white' as={Link} to="/myorders">My Orders</Nav.Link> */}
                                <Nav.Link className='text-white' as={Link} to="/dashboard">Dashboard</Nav.Link>

                                <Nav.Link onClick={logOut} className='text-white' as={Link} to="/login">Logout</Nav.Link>
                                <Nav.Link className='text-dark'>Hello {user.displayName}</Nav.Link>
                                {/*  <NavDropdown
                                    title={
                                        <>
                                            <img
                                                style={{ width: "35px", borderRadius: "50%" }}
                                                src={user.photoURL}
                                                alt="profile"
                                            />
                                        </>
                                    }
                                >
                                    <div className="text-center">
                                        <p>{user.displayName}</p>
                                        <p>{user.email}</p>
                                        <div className="text-center">
                                            <button onClick={logOut} className="btn btn-primary">
                                                Log Out
                                            </button>
                                        </div>
                                    </div>
                                </NavDropdown> */}
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