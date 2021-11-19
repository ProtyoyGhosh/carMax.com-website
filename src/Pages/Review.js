import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons"
import Bounce from 'react-reveal/Bounce';


const Review = (props) => {
    const { name, words, rate } = props.review;
    return (
        <Bounce left>
            <div className='col-md-4 p-4'>
                <Card>
                    <Card.Header className='bg-success text-white' as="h5">{name}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {words.slice(0, 85)}
                        </Card.Text>
                        <Card.Title>
                            <Rating
                                initialRating={rate}
                                readonly
                                emptySymbol={<FontAwesomeIcon className="text-warning" icon={emptyStar} />} fullSymbol={<FontAwesomeIcon className="text-warning" icon={fullStar} />}
                            />
                            <span style={{ paddingLeft: '5px' }}>{rate}</span>
                        </Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </Bounce>
    );
};

export default Review;