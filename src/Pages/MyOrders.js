import React from 'react';
import useAuth from '../hooks/useAuth';

const MyOrders = () => {
    const { selectedItem } = useAuth();
    return (
        <div>
            <h3>Your Orders: {selectedItem.length} </h3>
        </div>
    );
};

export default MyOrders;