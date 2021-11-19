import React from 'react';
import { Container } from 'react-bootstrap';
import img1 from '../assets/images/1st.png';
import img2 from '../assets/images/2.png';
import img3 from '../assets/images/3.png';
import img4 from '../assets/images/4.png';
import img5 from '../assets/images/5.png';
import img6 from '../assets/images/6.png';
import Slide from 'react-reveal/Slide';


const Promotion = () => {
    return (
        <Slide left cascade>
            <Container className='mb-5 mt-3'>
                <div className='mb-5'>
                    <h3 className='text-center' style={{ fontWeight: 'bold', fontSize: '30px' }}>All the ways to find car chemistry</h3>
                    <p className='text-center' style={{ fontWeight: 'bold' }}>We're your one-stop shop for buying your car. Get matched to your perfect car in one swiftly.</p>
                </div>

                <div className='row p-2'>
                    <div className='col-md-6 mb-3'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <img className='img-fluid'
                                    // style={{ width: "55px", borderRadius: "50%" }}
                                    src={img1}
                                    alt="img"
                                />
                            </div>
                            <div className='col-md-9'>
                                <h3 style={{ fontWeight: 'bold' }}>Shop</h3>
                                <p>Find cars for sale, local dealers, and advice. Also, our price-badging and price-drop notifications keep you informed of potential deals.</p>
                                <small className='text-success'>Find cars for sale</small>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 mb-3'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <img className='img-fluid'
                                    // style={{ width: "55px", borderRadius: "50%" }}
                                    src={img2}
                                    alt="img"
                                />
                            </div>
                            <div className='col-md-9'>
                                <h3 style={{ fontWeight: 'bold' }}>Research</h3>
                                <p>View side-by-side comparisons, payment calculators, video reviews, and consumer reviews. These let you hear the good and the bad from current car owners.</p>
                                <small className='text-success'>Compare what's out there</small>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 mb-3'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <img className='img-fluid'
                                    // style={{ width: "55px", borderRadius: "50%" }}
                                    src={img3}
                                    alt="img"
                                />
                            </div>
                            <div className='col-md-9'>
                                <h3 style={{ fontWeight: 'bold' }}>News</h3>
                                <p>Our very own Cars.com experts offer unbiased coverage of today's automotive landscape. Yes, there will be dad jokes.</p>
                                <small className='text-success'>Learn from the best</small>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 mb-3'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <img className='img-fluid'
                                    // style={{ width: "55px", borderRadius: "50%" }}
                                    src={img4}
                                    alt="img"
                                />
                            </div>
                            <div className='col-md-9'>
                                <h3 style={{ fontWeight: 'bold' }}>Buy</h3>
                                <p>Stay up to date on the latest selling advice from our experts. Coming soon: Get your car appraised and sell to interested buyers in your area.</p>
                                <small className='text-success'>Get expert opinion</small>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 mb-3'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <img className='img-fluid'
                                    // style={{ width: "55px", borderRadius: "50%" }}
                                    src={img5}
                                    alt="img"
                                />
                            </div>
                            <div className='col-md-9'>
                                <h3 style={{ fontWeight: 'bold' }}>Service & Repair</h3>
                                <p>Watch do-it-yourself tutorials or find local repair options..</p>
                                <small className='text-success'>Do not Compair</small>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 mb-3'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <img className='img-fluid'
                                    // style={{ width: "55px", borderRadius: "50%" }}
                                    src={img6}
                                    alt="img"
                                />
                            </div>
                            <div className='col-md-9'>
                                <h3 style={{ fontWeight: 'bold' }}>Certified Owner</h3>
                                <p>Learn why you should consider a Certified Pre-Owned car, and get info on manufacturer programs.</p>
                                <small className='text-success'>Explore us</small>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Slide>
    );
};

export default Promotion;