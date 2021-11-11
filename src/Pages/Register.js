import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const Register = () => {
    const { allContexts } = useAuth();
    const { userInfo, setUserInfo, register } = allContexts;

    const handleInputField = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUserInfo = { ...userInfo };
        newUserInfo[field] = value;
        setUserInfo(newUserInfo);
    }

    const handleFormSubmit = e => {
        register();
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
                <h2 className='text-center'>Sign Up Now</h2>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control onBlur={handleInputField} required name="name" type="text" placeholder="Enter Your Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleInputField} required name="email" type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handleInputField} required name="password" type="password" placeholder="Enter Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPhoto">
                        <Form.Label>Photourl</Form.Label>
                        <Form.Control onBlur={handleInputField} name="photo" type="text" placeholder="Enter Photo url" />
                    </Form.Group>

                    <Button variant="primary" className='w-100' type="submit">
                        Sign Up
                    </Button>
                </Form>

                <p className='text-center mt-2'>Already Registered? <Link to='/login'>Login Now</Link></p>

            </div>
        </Container>
    );
};

export default Register;