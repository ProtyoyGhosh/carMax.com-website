import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';

const Profile = () => {
    const { allContexts } = useAuth();
    const { user } = allContexts;
    const { displayName, photoURL, email } = user;
    return (
        <div>
            <h3 className='text-center'>This is User Profile</h3>
            <Container className='my-5'>
                <Row>
                    <Col md={4}>
                        <div className='d-flex align-items-center flex-column'>
                            <img
                                width='220px'
                                className='rounded-circle'
                                alt='profile_photo'
                                src={photoURL} />
                            <button className='btn btn-primary mt-3'>Edit Profile</button>
                        </div>
                    </Col>
                    <Col>
                        <small>Full Name:</small>
                        <h5>{displayName}</h5>
                        <small>Email:</small>
                        <h5>{email}</h5>
                        <small>Phone No:</small>
                        <h5>+91084859485845</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Profile;