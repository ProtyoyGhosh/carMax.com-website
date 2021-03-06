import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from '../hooks/useAuth';

const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const { allContexts } = useAuth();
    const { newUser, setNewUser, login, googleSignIn } = allContexts;

    function inputChangeHandler(e) {
        const name = e.target.name;
        const value = e.target.value;
        const extractedUser = { ...newUser };
        extractedUser[name] = value;
        setNewUser(extractedUser);
    }

    function logInHandaler(e) {
        login(location, history);
        e.target.reset();
        e.preventDefault();
    }
    return (
        <>
            <Container
                style={{
                    height: "calc(100vh - 56px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div style={{ maxWidth: "500px", width: "100%" }}>
                    <h2 className="text-center">Login Now</h2>
                    <Form
                        onSubmit={logInHandaler}
                        style={{ maxWidth: "500px", width: "100%" }}
                    >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                onChange={inputChangeHandler}
                                name="email"
                                type="email"
                                placeholder="Enter email"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                onChange={inputChangeHandler}
                                name="password"
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>

                        <Button variant="primary" className="w-100" type="submit">
                            Login
                        </Button>
                    </Form>
                    <p className="text-center mt-2">
                        New user? <Link to="/register">Register now</Link>
                    </p>
                    <p className="text-center mt-3">----------------Or----------------</p>
                    <div className="text-center">
                        <button onClick={googleSignIn} className="btn btn-primary">
                            Login with Google
                        </button>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Login;