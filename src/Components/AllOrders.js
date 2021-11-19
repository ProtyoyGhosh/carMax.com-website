import React, { useEffect, useState } from 'react';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [reload, setReload] = useState(true);
    useEffect(() => {
        fetch('https://salty-meadow-08648.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [reload]);

    const cancel = (id) => {
        const alert = window.confirm('sure want to delete?')
        if (alert) {
            fetch(`https://salty-meadow-08648.herokuapp.com/delete/${id}`, {
                method: 'delete',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount === 1) {
                        const remainingItem = orders.filter((order) => order._id !== id);
                        setOrders(remainingItem);
                    } else {
                        alert('something went wrong')
                    }
                })
        }
    };

    const confirm = (id) => {
        const alert = window.confirm('Order status Confirmed')
        if (alert) {
            fetch(`https://salty-meadow-08648.herokuapp.com/confirm/${id}`, {
                method: 'put',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount === 1) {
                        setReload(!reload)
                    }
                })
        } else {
            alert('Status already confirmed')
        }
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
                                        <button onClick={() => confirm(_id)} className='btn btn-success'>Confirm</button>
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