import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons"
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Item = ({ item }) => {
    const { name, price, desc, img, rating, rating_count, _id } = item;
    const { addToCart } = useAuth();
    const handleCart = () => {
        addToCart(item)
    }
    return (

        <Zoom>
            <Card className='m-2' style={{ width: '18rem' }}>
                <Card.Img variant="top" className='img-fluid' src={img} />
                <Card.Body className="my-1 py-1">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                </Card.Body>

                <Card.Body className="my-1 py-1">
                    <h4>Price: ${price} USD</h4>
                </Card.Body >

                <Card.Body className="my-1 py-1">
                    <Row>
                        <Col>
                            <Rating
                                initialRating={rating}
                                readonly
                                emptySymbol={<FontAwesomeIcon className="text-warning" icon={emptyStar} />} fullSymbol={<FontAwesomeIcon className="text-warning" icon={fullStar} />}
                            />
                            <span>{rating}</span>
                        </Col>
                        <Col> <small>Total review: </small>{rating_count}</Col>
                    </Row>
                </Card.Body>

                <Card.Body className='d-flex my-1 py-1'>
                    <Button className='w-75 me-1 p-2' variant="primary"> <NavLink style={{ textDecoration: 'none', color: "white" }} to={`/items/${_id}`} >View Details</NavLink></Button>

                    <Button onClick={() => handleCart(item)} className='w-75 me-1' variant="primary"><NavLink style={{ textDecoration: 'none', color: "white" }} to='/myorders' >Add To Cart</NavLink></Button>
                </Card.Body>
            </Card>
        </Zoom>

    );
};

export default Item;



