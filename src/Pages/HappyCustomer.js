import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from './Review';
import Slider from 'react-reveal/Bounce';


const HappyCustomer = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <Slider top>
            <div>
                <h3 className='text-center my-2' style={{ fontSize: '40px', fontWeight: 'bold' }}>Our Happy Customer</h3>
                <h6 className='text-center my-2 text-primary' style={{ fontSize: '20px' }}>"we are here because of you"</h6>
                <Container>
                    <div className='row'>
                        {
                            reviews.map(review => (
                                <Review
                                    key={review.name}
                                    review={review}
                                ></Review>
                            ))
                        }
                    </div>
                </Container>
            </div>
        </Slider>
    );
};

export default HappyCustomer;
