/*
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {

    const { allContexts } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect = location?.state?.from || '/home';
    const { userInfo, setUserInfo, login, signInWithGoogle, setUser, setError } = allContexts;

    const handleInputField = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUserInfo = { ...userInfo };
        newUserInfo[field] = value;
        setUserInfo(newUserInfo);
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        login();
        e.target.reset();

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
                <Form onSubmit={() =>
                    handleFormSubmit()
                        .then((result) => {
                            const user = result.user;
                            setUser(user);
                            history.push(redirect);
                            setUserInfo({});
                        })
                        .catch((error) => {
                            setError(error.message)
                        })
                }>
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
                <Button onClick={() =>
                    signInWithGoogle()
                        .then((result) => {
                            const user = result.user;
                            setUser(user);
                            history.push(redirect);
                        })
                        .catch(err => setError(err.message))
                }
                    variant="success" className='w-100' type="submit">
                    Login with Google
                </Button>
            </div>
        </Container>
    );
};

export default Login; */


// copy

import React from "react";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
/* import facebook from "../../assets/images/facebook.png";
import google from "../../assets/images/google.png";
import github from "../../assets/images/github.png"; */
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
    const { allContexts } = useAuth();
    const {
        signInWithEmail,
        signInWithGoogle,
        getPassword,
        getEmail,
        setError,
        setUser,
        error,
    } = allContexts;
    const location = useLocation();
    const history = useHistory();
    const redirect = location.state?.from || "/home";
    return (
        <div className="text-center my-4">
            <h2>Please Login</h2>
            <p className=" mt-2">Login with Email & Password</p>
            <p className="text-danger text-center">{error}</p>
            <div className="w-25 mx-auto">
                <Form onSubmit={signInWithEmail}>
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
                                    onClick={getEmail}
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
                                    onClick={getPassword}
                                    type="password"
                                    autoComplete="current-password"
                                    id="password"
                                    placeholder="Enter your password"
                                />
                            </InputGroup>
                        </Col>
                    </Row>

                    <button type="submit" className="btn btn-primary mt-2 w-100">
                        Login
                    </button>
                </Form>
            </div>
            <p className="mt-2">
                <NavLink className="text-decoration-none" to="/register">
                    Need an Account? Please Sign up!
                </NavLink>
            </p>
            <p className="mt-3">Or</p>
            {/* <p> Login with</p> */}
            <div>
                <button
                    onClick={() => {
                        signInWithGoogle()
                            .then((result) => {
                                const user = result.user;
                                setUser(user);
                                history.push(redirect);
                            })
                            .catch((err) => {
                                const errorMessage = err.message;
                                setError(errorMessage);
                            });
                    }}
                    className="btn btn-primary"
                >
                    Login With Google
                </button>
            </div>
        </div>
    );
};

export default Login;