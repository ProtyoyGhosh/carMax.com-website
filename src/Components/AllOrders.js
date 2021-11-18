import React, { useEffect, useState } from 'react';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    const cancel = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'delete',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    const remainingItem = orders.fillter((order) => order._id !== id);
                    setOrders(remainingItem);
                } else {
                    alert('something went wrong')
                }
            })
    }

    return (
        <div>
            <h3 className='text-center'>All the Orders</h3>
            <h5 className='text-center'>total {orders.length} orders</h5>

            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Item</th>
                        <th scope="col">Price</th>
                        <th scope="col">Buyer</th>
                        <th scope="col">Email</th>
                        <th scope="col">Status</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Confirm</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => {
                            const { img, name, _id, price, userName, email, status } = order;
                            return (
                                <tr key={_id}>
                                    <td><img width='50px' src={img} alt='car' /></td>
                                    <td>{name}</td>
                                    <td>{price}</td>
                                    <td>{userName}</td>
                                    <td>{email}</td>
                                    <td>{status}</td>
                                    <td>
                                        <button onClick={() => cancel(_id)} className='btn btn-danger'>Delete</button>
                                    </td>
                                    <td>
                                        <button className='btn btn-success'>Confirm</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllOrders;