import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons"
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';


const MyOrders = () => {
    const [reload, setReload] = useState(true);
    const history = useHistory()
    const { selectedItem, remove, setSelectedItem, allContexts } = useAuth();
    const { user } = allContexts;
    const { uid } = user;

    const totalPrice = selectedItem.reduce((total, item) => total + item.price, 0);

    return (
        <Container>
            <h3 className='text-center m-4'>Item Added In Your Cart: {selectedItem.length}</h3>
            <Row>
                <Col md={8}>
                    {selectedItem.map((select) => (
                        <Row className="bg-info my-3">
                            <Col
                                className="p-0 d-flex align-items-center justify-content-center"
                                md={4}
                            >
                                <img width="100%" src={select.img} alt="" />
                            </Col>
                            <Col className="py-2 ">
                                <div className="py-2 ">
                                    <h6 md={8}>{select.name}</h6>
                                    <small className="m-0">Seller: {select.seller}</small>
                                    <br />
                                    <small className="m-0">Id: {select.product_id}</small>
                                </div>
                                <Row>
                                    <Col>
                                        <Row>
                                            <h6 className="my-1">Price:${select.price}</h6>
                                        </Row>
                                        <Row>
                                            <Col sm={5}>
                                                <Rating
                                                    readonly
                                                    style={{ color: "goldenrod" }}
                                                    initialRating={select.rating}
                                                    emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                                                    fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                                                />{" "}
                                                {select.rating}
                                                <p className="m-0">
                                                    Total Review: {select.ratingCount}
                                                </p>
                                            </Col>
                                            <Col sm={7} className="d-flex align-items-center" >
                                                <Button className='w-100 me-1 p-2' variant="primary"> <NavLink style={{ textDecoration: 'none', color: "white" }} to={`/items/${select._id}`} >View Details</NavLink></Button>

                                                <Button onClick={() => remove(select._id)} className='w-100 me-1' variant="primary"><NavLink style={{ textDecoration: 'none', color: "white" }} to='/myorders' >Remove </NavLink></Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    ))}
                </Col>

                <Col className='text-center my-5' md={4}>
                    <h4>Total {selectedItem.length} item selected</h4>
                    <h6>Total Price: {totalPrice.toFixed(2)} $</h6>

                    <button className='btn btn-primary' onClick={() => {

                        fetch(`https://salty-meadow-08648.herokuapp.com/purchase/${uid}`, {
                            method: 'delete'
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.deletedCount > 0) {
                                    alert('Thank You For Purchasing');
                                    /* const matched = selectedItem.find((sItem) => sItem.uid !== uid)
                                    setSelectedItem(matched); */
                                    setReload(!reload);
                                    history.push('/home');
                                } else {
                                    window.alert('no items for purchassing')
                                }
                            });

                    }}>
                        Purchase
                    </button>
                </Col>
            </Row>
        </Container>
    );
};

export default MyOrders;