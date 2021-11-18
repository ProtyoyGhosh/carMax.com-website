import React from 'react';
import useAuth from '../hooks/useAuth';
import Admin from '../Components/Admin';
import NormalUser from './NormalUser';

const Dashboard = () => {
    const { allContexts } = useAuth();
    const { user } = allContexts;
    const { email } = user;
    const newEmail = 'admin@admin.com';
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