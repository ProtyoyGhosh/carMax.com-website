import React, { useState } from 'react';
import AddProduct from './AddProduct';
import AllOrders from './AllOrders';
import MakeAdmin from './MakeAdmin';
import ManageProduct from './ManageProduct';
import Profile from './Profile';

const Admin = () => {
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
                                    onClick={() => setCurrent('Manage All Orders')}
                                    className={
                                        current === 'Manage All Orders' ? 'w-100 bg-info text-dark d-block border-0' :
                                            'w-100 bg-dark text-white d-block border-0'
                                    }
                                    type='button'
                                    value='Manage All Orders'
                                />
                            </li>
                            <li className='w-100 mb-2'>
                                <input
                                    onClick={() => setCurrent('Add a Product')}
                                    className={
                                        current === 'Add a Product' ? 'w-100 bg-info text-dark d-block border-0' :
                                            'w-100 bg-dark text-white d-block border-0'
                                    }
                                    type='button'
                                    value='Add a Product'
                                />
                            </li>
                            <li className='w-100 mb-2'>
                                <input
                                    onClick={() => setCurrent('Make Admin')}
                                    className={
                                        current === 'Make Admin' ? 'w-100 bg-info text-dark d-block border-0' :
                                            'w-100 bg-dark text-white d-block border-0'
                                    }
                                    type='button'
                                    value='Make Admin'
                                />
                            </li>
                            <li className='w-100 mb-2'>
                                <input
                                    onClick={() => setCurrent('Manage Product')}
                                    className={
                                        current === 'Manage Product' ? 'w-100 bg-info text-dark d-block border-0' :
                                            'w-100 bg-dark text-white d-block border-0'
                                    }
                                    type='button'
                                    value='Manage Product'
                                />
                            </li>
                        </ul>
                    </div>

                    <div className='col-md-9'>
                        {
                            (current === 'Profile' && <Profile></Profile>) || (current === 'Manage All Orders' && <AllOrders></AllOrders>) || (current === 'Add a Product' && <AddProduct></AddProduct>) || (current === 'Make Admin' && <MakeAdmin></MakeAdmin>) || (current === 'Manage Product' && <ManageProduct></ManageProduct>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;