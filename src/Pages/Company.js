import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import car from '../assets/images/car1.png'
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';


const Company = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Slide left>
                        <img style={{ width: '100%' }} src={car} alt='car'></img>
                    </Slide>
                </Col>
                <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Slide top>
                        <h4 style={{ marginBottom: '25px', fontWeight: '600', fontSize: '38px' }}>Know About Our Company</h4>
                        <small style={{ marginBottom: '15px' }}>CarMax.com is a leading digital marketplace and solutions provider for the automotive industry that connects car shoppers with sellers. Launched in 1998 and headquartered in Dhaka.Read More about us Bellow......</small>
                        <Link to='aboutus' style={{ textDecoration: 'none' }}>
                            <button className='btn btn-primary mt-1'>About Us</button>
                        </Link>
                    </Slide>
                </Col>
            </Row>
        </Container>
    );
};

export default Company;