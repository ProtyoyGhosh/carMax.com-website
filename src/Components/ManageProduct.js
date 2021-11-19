import React, { useEffect, useState } from 'react';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const cancel = (id) => {
        const approved = window.confirm('sure want to delete?')
        if (approved) {
            fetch(`http://localhost:5000/deleteItem/${id}`, {
                method: 'delete',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount === 1) {
                        const remainingProduct = products.filter((product) => product._id !== id);
                        setProducts(remainingProduct);
                    } else {
                        alert('something went wrong')
                    }
                })
        }
    };
    return (
        <div>
            <h3 className='text-center'>All the Items</h3>
            <h5 className='text-center'>total {products.length} Items</h5>

            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Item</th>
                        <th scope="col">Price</th>
                        <th scope="col">Seller</th>
                        <th scope="col">Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => {
                            const { img, name, _id, price, seller } = product;
                            return (
                                <tr key={_id}>
                                    <td><img width='50px' src={img} alt='car' /></td>
                                    <td>{name}</td>
                                    <td>{price} $</td>
                                    <td>{seller}</td>
                                    <td>
                                        <button onClick={() => cancel(_id)} className='btn btn-danger'>Delete</button>
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

export default ManageProduct;