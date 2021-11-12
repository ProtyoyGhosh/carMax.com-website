import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons"
import { NavLink } from 'react-router-dom';


const Details = () => {
    const { id } = useParams();
    const { items, addToCart } = useAuth();
    const matchedItem = items.find(item => item.product_id === id);
    const { name, img, color, warenty, seller, price, rating, rating_count, servicing, product_id } = matchedItem;

    return (
        <div className="my-5">
            {
                name ? (
                    <Container>
                        <Row>
                            <Col md={6}>
                                <img className="img-fluid" src={img} alt='cars' />
                            </Col>
                            <Col md={6}>
                                <h2>{name}</h2>
                                <h6>Available color: {color}</h6>
                                <h6>Warenty: {warenty} years</h6>
                                <h6>Servicing: {servicing} years</h6>
                                <Row className='py-3'>
                                    <Col>
                                        <h3>Price: ${price}usd</h3>
                                        <div>
                                            <Rating
                                                initialRating={rating}
                                                readonly
                                                emptySymbol={<FontAwesomeIcon className="text-warning" icon={emptyStar} />} fullSymbol={<FontAwesomeIcon className="text-warning" icon={fullStar} />}
                                            />
                                            <span>{rating}</span>
                                            <br />
                                            <span>Total review:{rating_count} </span>

                                        </div>
                                    </Col>
                                    <Col>
                                        <h6>Seller: {seller}</h6>
                                        <h6>Product Id: {product_id}</h6>
                                    </Col>
                                    <div className='text-center mt-4'>
                                        <Button onClick={() => addToCart(matchedItem)} className='w-75 me-1 ' variant="primary"><NavLink style={{ textDecoration: 'none', color: "white" }} to='/myorders' >Add To Cart</NavLink></Button>
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                )
                    : <h3 className="text-center text-danger m-3">No items found</h3>
            }
        </div>
    );
};

export default Details;