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

    return { addToCart, selectedItem };
};
export default useCart;