import { useState } from "react";

const useCart = () => {
    const [selectedItem, setSelectedItem] = useState([]);

    function addToCart(item) {
        const isExisted = selectedItem.find(selected => selected.product_id === item.product_id);

        if (isExisted) {
            alert('Item Already in your cart')
        } else {
            const updateSelectedItem = [...selectedItem, item];
            setSelectedItem(updateSelectedItem);
        }
    }

    function remove(product_id) {
        alert('sure you want to delete?')
        const removeItem = selectedItem.filter((item) => item.product_id !== product_id)
        setSelectedItem(removeItem)
    }

    return { addToCart, selectedItem, remove };
};
export default useCart;