import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Payment from "../assets/images/payment.png";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
    faEnvelope,
    faMapMarkerAlt,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import FooterBG from "../assets/images/footer-bg.png";

library.add(
    faEnvelope,
    faMapMarkerAlt,
    faPhone
);

const Footer = () => {
    const navStyle = {
        textDecoration: "none",
        color: "white",
        borderBottom: "2px solid transparent",
        fontSize: "17px",
        fontWeight: "bold",
        marginBottom: "10px",
        display: "inline-block",
    };
    return (
        <div style={{
            background: `url(${FooterBG})`,
            backgroundRepeat: "repeat",
            padding: "40px 0 0",
        }}>
            <Container>
                <Row>
                    <Col>
                        <div className="text-center">
                            <h3 className='text-white'>carMax.com</h3>
                        </div>
                        <ul className="list-unstyled mt-3 w-100">
                            <li className="fs-6 fw-bold mb-2 text-white">
                                <FontAwesomeIcon
                                    className="me-2 social-icon"
                                    icon={faMapMarkerAlt}
                                />{" "}
                                Kushtia,Khulna,Bangladesh
                            </li>
                            <li className="fs-6 fw-bold mb-2 text-white">
                                <FontAwesomeIcon
                                    className="me-2 social-icon"
                                    icon={faEnvelope}
                                />{" "}
                                Official: carMax@gmail.com
                            </li>
                            <li className="fs-6 fw-bold mb-2 text-white">
                                <FontAwesomeIcon className="me-2 social-icon" icon={faPhone} />{" "}
                                Helpline: 017632523419(Available:10:00AM to 10.00PM)
                            </li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <ul className="list-unstyled">
                            <li>
                                <NavLink className="menuStyle" style={navStyle} to="/home">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="menuStyle" style={navStyle} to="/about">
                                    About us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="menuStyle" style={navStyle} to="/contact">
                                    Contact us
                                </NavLink>
                            </li>

                            <li>
                                <NavLink className="menuStyle" style={navStyle} to="/items">
                                    Items
                                </NavLink>
                            </li>

                            <li>
                                <NavLink className="menuStyle" style={navStyle} to="/policy">
                                    Policy
                                </NavLink>
                            </li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <img className="img-fluid" src={Payment} alt="" />
                    </Col>
                </Row>

            </Container>
            <hr className="mt-2 mb-0 bg-white" />
            <p
                style={{ background: "#000099" }}
                className="m-0 fw-bold py-3  text-white text-center"
            >
                Copyright &copy; All Reserved by{" "}
                <a
                    className="text-decoration-none"
                    style={{ color: "#ff136f" }}
                    target="_blank"
                    rel="noreFerrer"
                    href="https://www.facebook.com"
                >
                    protyoy kumar Ghosh
                </a>{" "}
                in 2021
            </p>


        </div>
    );

}
export default Footer;