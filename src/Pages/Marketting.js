import React from 'react';
import { Container } from 'react-bootstrap';
import market from '../assets/images/car2.png';
import Tada from 'react-reveal/Tada';



const marketting = () => {
    return (
        <Container className='m-4'>

            <h3 style={{ fontSize: '40px', fontWeight: 'bold' }} className='text-center'>Control Your Car-Buying Experience</h3>
            <p style={{ fontSize: '15px', fontWeight: 'bold' }} className='text-center'>At carMax.com, you're in charge of the process from start to finish. Here's how.</p>


            <div className='row p-4'>

                <div className='col-md-6 text-center d-flex align-items-center justify-content-center'>
                    <Tada>
                        <div>
                            <h3 style={{ fontSize: '30px', fontWeight: 'bold' }}>Build Your Deal With Confidence</h3>
                            <p style={{ fontSize: '13px', fontWeight: 'bold' }}>Get a personalized offer from a dealer online, including manufacturer incentives and discounts. Next, build a custom deal that includes the value of your trade-in and monthly payments.</p>
                            <button className='btn btn-primary'>Get Started</button>
                        </div>
                    </Tada>
                </div>

                <div className='col-md-6'>
                    <Tada>
                        <img className='img-fluid' src={market} alt='car' />
                    </Tada>
                </div>
            </div>
        </Container>
    );
};

export default marketting;