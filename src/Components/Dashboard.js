import React, { useState } from 'react';
import MyOrders from '../Pages/MyOrders';
import PayLinks from './PayLinks';
import Profile from './Profile';
import Reviews from './Reviews';
import useAuth from '../hooks/useAuth';
import Admin from '../Components/Admin';
import NormalUser from './NormalUser';

const Dashboard = () => {
    const { allContexts } = useAuth();
    const { user } = allContexts;
    const { email } = user;
    const newEmail = 'admin@admin.com';

    const [current, setCurrent] = useState('Profile');
    const profileHandeler = e => {
        setCurrent(e.target.value);
    }
    const cartHandler = e => {
        setCurrent(e.target.value);
    }
    const payHandler = e => {
        setCurrent(e.target.value);
    }
    const reviewHandler = e => {
        setCurrent(e.target.value);
    }
    console.log(current);
    return (
        <>
            {
                (email === newEmail) ? <Admin></Admin>
                    :
                    <NormalUser></NormalUser>
            }
        </>
    );
};

export default Dashboard;