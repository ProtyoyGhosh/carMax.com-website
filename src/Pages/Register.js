/* import React, { useState } from 'react';
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

export default Register; */


// copy

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
    Button,
    Col,
    Form,
    FormControl,
    InputGroup,
    Row,
} from "react-bootstrap";
import { faEnvelope, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const SignUp = () => {
    const history = useHistory();
    const { allContexts } = useAuth();
    const {
        getEmail,
        getPassword,
        signUpWithEmail,
        getName,
        getPhotoURL,
        setError,
        sendVilifiedEmail,
        setUserName,
        error,
    } = allContexts;
    return (
        <div className="text-center my-4">
            <h2>Please Sign Up</h2>
            <p className=" mt-2">Sign Up with Email & Password</p>
            <p className="text-danger text-center">{error}</p>
            <div className="w-25 mx-auto">
                <Form
                    onSubmit={(e) => {
                        e.preventDefault();
                        signUpWithEmail()
                            .then((result) => {
                                setUserName();
                                sendVilifiedEmail();
                                alert("User has been Created!");
                                history.push("/login");
                            })
                            .catch((err) => {
                                const errorMessage = err.message;
                                setError(errorMessage);
                            });
                    }}
                >
                    <Row>
                        <Col className="text-start">
                            <Form.Label htmlFor="name" visuallyHidden>
                                Your Name
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                </InputGroup.Text>
                                <FormControl
                                    onBlur={getName}
                                    type="text"
                                    autoComplete="current-text"
                                    id="name"
                                    placeholder="Enter your name"
                                />
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="text-start">
                            <Form.Label htmlFor="email" visuallyHidden>
                                Your Email Address
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                </InputGroup.Text>
                                <FormControl
                                    onBlur={getEmail}
                                    type="email"
                                    autoComplete="current-email"
                                    id="email"
                                    placeholder="Enter your email address"
                                />
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row className="mt-2">
                        <Col className="text-start">
                            <Form.Label htmlFor="password" visuallyHidden>
                                Your Password
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                                </InputGroup.Text>
                                <FormControl
                                    onBlur={getPassword}
                                    type="password"
                                    autoComplete="current-password"
                                    id="password"
                                    placeholder="Enter your password"
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-start">
                            <Form.Label htmlFor="photo" visuallyHidden>
                                Your photo URL
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                </InputGroup.Text>
                                <FormControl
                                    onBlur={getPhotoURL}
                                    type="text"
                                    autoComplete="current-text"
                                    id="photo"
                                    placeholder="Enter your photoURL"
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Button type="submit" className="w-100 mt-3">
                        Sign UP
                    </Button>
                </Form>
            </div>
            <p className="mt-2">
                <NavLink className="text-decoration-none" to="/login">
                    Already have an account? Please login!
                </NavLink>
            </p>
        </div>
    );
};

export default SignUp;