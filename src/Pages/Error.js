import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import imgError from '../assets/images/error.png'

const Error = () => {
    return (
        <Container className="">
            <Row>
                <Col>
                    <img className="img-fluid" src={imgError} alt="" />
                </Col>
                <Col>
                    <img className="img-fluid" src={imgError} alt="" />

                </Col>
            </Row>
        </Container>
    );
};

export default Error;