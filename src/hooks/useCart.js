import { useState, useEffect } from "react";
import useFirebase from "./useFirebase";


const useCart = () => {
    const { user } = useFirebase();
    const { uid, displayName, email } = user;
    const [selectedItem, setSelectedItem] = useState([]);

    useEffect(() => {
        fetch(`https://salty-meadow-08648.herokuapp.com/cart/${uid}`)
            .then(res => res.json())
            .then(data => {
                if (data.length) {
                    setSelectedItem(data)

                }
            })
    }, [uid]);


    function addToCart(item) {
        const isExisted = selectedItem.find(selected => selected.product_id === item.product_id);

        delete item._id;
        item.userName = displayName;
        item.email = email;
        item.uid = uid;
        item.status = 'pending';

        if (isExisted) {
            alert('Item Already in your cart')
        } else {

            fetch('https://salty-meadow-08648.herokuapp.com/item/add', {
                method: 'post',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(item)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        const updateSelectedItem = [...selectedItem, item];
                        setSelectedItem(updateSelectedItem);
                    }
                })

        }
    }

    function remove(id) {
        alert('sure you want to delete?')


        fetch(`https://salty-meadow-08648.herokuapp.com/delete/${id}`, {
            method: 'delete',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    const removeItem = selectedItem.filter((remove) => remove._id !== id);
                    setSelectedItem(removeItem)
                } else {
                    alert('something went wrong')
                }
            })

    }

    return { addToCart, selectedItem, setSelectedItem, remove };
};
export default useCart;