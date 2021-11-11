import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const HeroArea = () => {
    return (
        <Container
            style={{
                height: 'calc(100vh - 56px)',
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <Row>
                <Col sm={12} md={6}>
                    <h1>Find the Car You Want, Your Way</h1>
                    <p>
                        Use our extensive database to research and compare trims, photos, and reviews for every make and model, so you can find the car that fits your life.
                    </p>
                    <button className='btn btn-primary rounded-pill'>Get Started</button>
                </Col>
                <Col sm={12} md={6}>
                    <img className='img-fluid' src='https://my-gerez.web.app/static/media/banner-img.6552e1ee.png' alt='car'></img>
                </Col>
            </Row>
        </Container>
    );
};

export default HeroArea;