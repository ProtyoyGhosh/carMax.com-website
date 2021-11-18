import React, { useState } from 'react';
import MyOrders from '../Pages/MyOrders';
import PayLinks from './PayLinks';
import Profile from './Profile';
import Reviews from './Reviews';

const NormalUser = () => {
    const [current, setCurrent] = useState('Profile');
    return (
        <div>
            <div className='container-fluid'>
                <div className='row my-3'>
                    <div className='col-3'>
                        <ul className='list-unstyled'>
                            <li className='w-100 mb-2'>
                                <input
                                    onClick={() => setCurrent('Profile')}
                                    className={
                                        current === 'Profile' ? 'w-100 bg-info text-dark d-block border-0' :
                                            'w-100 bg-dark text-white d-block border-0'
                                    }
                                    type='button'
                                    value='Profile'
                                />
                            </li>
                            <li className='w-100 mb-2'>
                                <input
                                    onClick={() => setCurrent('Cart')}
                                    className={
                                        current === 'Cart' ? 'w-100 bg-info text-dark d-block border-0' :
                                            'w-100 bg-dark text-white d-block border-0'
                                    }
                                    type='button'
                                    value='Cart'
                                />
                            </li>
                            <li className='w-100 mb-2'>
                                <input
                                    onClick={() => setCurrent('Pay Links')}
                                    className={
                                        current === 'Pay Links' ? 'w-100 bg-info text-dark d-block border-0' :
                                            'w-100 bg-dark text-white d-block border-0'
                                    }
                                    type='button'
                                    value='Pay Links'
                                />
                            </li>
                            <li className='w-100 mb-2'>
                                <input
                                    onClick={() => setCurrent('Add Review')}
                                    className={
                                        current === 'Add Review' ? 'w-100 bg-info text-dark d-block border-0' :
                                            'w-100 bg-dark text-white d-block border-0'
                                    }
                                    type='button'
                                    value='Add Review'
                                />
                            </li>
                        </ul>
                    </div>

                    <div className='col-md-9'>
                        {
                            (current === 'Profile' && <Profile></Profile>) || (current === 'Cart' && <MyOrders></MyOrders>) || (current === 'Pay Links' && <PayLinks></PayLinks>) || (current === 'Add Review' && <Reviews></Reviews>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NormalUser;