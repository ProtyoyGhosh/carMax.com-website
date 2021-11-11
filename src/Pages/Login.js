
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {

    const { allContexts } = useAuth();
    const { userInfo, setUserInfo, login, signInWithGoogle } = allContexts;

    const handleInputField = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUserInfo = { ...userInfo };
        newUserInfo[field] = value;
        setUserInfo(newUserInfo);
    }

    const handleFormSubmit = e => {
        login();
        e.target.reset();
        e.preventDefault();
    }

    return (
        <Container
            style={{
                height: 'calc(100vh - 56px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <div style={{ maxWidth: '500px', width: '100%' }}>
                <h2 className='text-center'>Login Now</h2>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleInputField} name="email" type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handleInputField} name="password" type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" className='w-100' type="submit">
                        Login
                    </Button>
                </Form>

                <p className='text-center mt-2'>New User? <Link to='/register'>Sign Up Now</Link></p>

                <p className='text-center mt-3'>..........................OR........................</p>
                <Button onClick={signInWithGoogle} variant="success" className='w-100' type="submit">
                    Login with Google
                </Button>
            </div>
        </Container>
    );
};

export default Login;