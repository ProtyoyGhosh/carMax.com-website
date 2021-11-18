import React from 'react';
import { Container, Row, Col, Form } from "react-bootstrap";
import sectionBg from '../assets/images/sectionBg.png';
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";

const AboutUs = () => {
    return (
        <div
            style={{ background: `url(${sectionBg})`, backgroundAttachment: "fixed" }}
            className="py-5"
        >
            <Container>
                <Zoom>
                    <h2 className="text-center text-white mb-4">
                        WELCOME TO carMax.com
                    </h2>
                </Zoom>
                <Row>
                    <Col md className="pe-3">
                        <Bounce bottom>
                            <h5 className="text-white">About Us</h5>
                            <p className="text-muted">
                                There are countless online car marketplaces on the
                                internet. And there’s us. We are not the biggest. We are not the
                                cheapest. But we are the fastest growing. We have the highest
                                car selling rate in the industry.
                            </p>
                            <p className="text-muted">
                                CarMax.com is a leading digital marketplace and solutions provider for the automotive industry that connects car shoppers with sellers. Launched in 1998 and headquartered in Chicago, the Company empowers shoppers with the data, resources and digital tools needed to make informed buying decisions and seamlessly connect with automotive retailers. In a rapidly changing market, Cars.com enables dealerships and OEMs with innovative technical solutions and data-driven intelligence to better reach and influence ready-to-buy shoppers, increase inventory turn and gain market share. In 2018, Cars.com acquired Dealer Inspire®, an innovative technology company building solutions that future-proof dealerships with more efficient operations, a faster and easier car buying process, and connected digital experiences that sell and service more vehicles.

                                CarMax.com properties include DealerRater®,
                                Dealer Inspire®, Auto.com™, PickupTrucks.com® and NewCars.com®. For more information, visit www.Cars.com.
                            </p>
                        </Bounce>
                    </Col>
                    <Col md className="pe-3">
                        <Bounce bottom>
                            <h5 className="text-white">Our Vision</h5>
                            <p className="text-muted">
                                To become the largest online Car selling for continuing
                                cars, in partnership with corporates and company.
                            </p>
                            <h5 className="text-white">Our Mission</h5>
                            <p className="text-muted">
                                CarMax.com is a leading digital marketplace and solutions provider for the automotive industry that connects car shoppers with sellers. Launched in 1998 and headquartered in Chicago, the Company empowers shoppers with the data, resources and digital tools needed to make informed buying decisions and seamlessly connect with automotive retailers. In a rapidly changing market, Cars.com enables dealerships and OEMs with innovative technical solutions and data-driven intelligence to better reach and influence ready-to-buy shoppers, increase inventory turn and gain market share..
                            </p>
                        </Bounce>
                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col md>
                        <Bounce bottom>
                            <h5 className="text-white">Sign up for our monthly newsletter</h5>
                            <p className="text-muted">
                                Be the first to know about news and updates.We never share you
                                mail with others. Trust us!
                            </p>
                        </Bounce>
                    </Col>
                    <Col md className="d-flex align-items-center">
                        <Bounce bottom>
                            <Form className="w-100">
                                <Form.Label className="text-white">
                                    Leave your mail below
                                </Form.Label>
                                <Form.Group
                                    className="d-flex text-white"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Control
                                        style={{ background: "transparent", color: "white" }}
                                        className="py-2 rounded-0"
                                        type="email"
                                        placeholder="Enter email"
                                    />
                                    <button
                                        style={{ width: "120px" }}
                                        className="btn rounded-0 btn-primary"
                                    >
                                        SIGN UP
                                    </button>
                                </Form.Group>
                            </Form>
                        </Bounce>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutUs;