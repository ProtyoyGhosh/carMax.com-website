import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons"
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';


const Details = () => {
    const history = useHistory();
    const [item, setItem] = useState({});
    const { id } = useParams();
    const { addToCart, allContexts } = useAuth();
    const { user } = allContexts;
    const { email } = user;
    // const matchedItem = items.find(item => item.key === Number(id));

    useEffect(() => {
        fetch(`http://localhost:5000/items/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, []);


    return (
        <div className="my-5">
            {
                item?.name ? (
                    <Container>
                        <Row>
                            <Col md={6}>
                                <img className="img-fluid" src={item.img} alt='cars' />
                            </Col>
                            <Col md={6}>
                                <h2>{item.name}</h2>
                                <h6>Available color: {item.color}</h6>
                                <h6>Warenty: {item.warenty} years</h6>
                                <h6>Servicing: {item.servicing} years</h6>
                                <Row className='py-3'>
                                    <Col>
                                        <h3>Price: ${item.price}usd</h3>
                                        <div>
                                            <Rating
                                                initialRating={item.rating}
                                                readonly
                                                emptySymbol={<FontAwesomeIcon className="text-warning" icon={emptyStar} />} fullSymbol={<FontAwesomeIcon className="text-warning" icon={fullStar} />}
                                            />
                                            <span>{item.rating}</span>
                                            <br />
                                            <span>Total review:{item.rating_count} </span>

                                        </div>
                                    </Col>
                                    <Col>
                                        <h6>Seller: {item.seller}</h6>
                                        <h6>Product Id: {item.product_id}</h6>
                                    </Col>
                                    <div className='text-center mt-4'>
                                        <Button onClick={() => {
                                            if (email) {
                                                addToCart(item)
                                            } else {
                                                history.push('/login')
                                            }
                                        }} className='w-75 me-1 ' variant="primary"><NavLink style={{ textDecoration: 'none', color: "white" }} to='/myorders' >Add To Cart</NavLink></Button>
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