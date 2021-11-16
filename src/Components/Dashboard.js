import React, { useState } from 'react';
import MyOrders from '../Pages/MyOrders';
import Profile from './Profile';

const Dashboard = () => {
    const [current, setCurrent] = useState('profile');
    const profileHandeler = e => {
        setCurrent(e.target.value);
    }
    const cartHandler = e => {
        setCurrent(e.target.value);
    }
    console.log(current);
    return (
        <div>
            <div className='d-flex my-2 justify-content-center'>
                <input onClick={profileHandeler} type='button' value='profile' profile />
                <input onClick={cartHandler} type='button' value='cart' cart />
            </div>

            {
                (current === 'profile' && <Profile></Profile>) || (current === 'cart' && <MyOrders></MyOrders>)
            }
        </div>
    );
};

export default Dashboard;