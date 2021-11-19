import { useEffect, useState } from 'react';

const useItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://salty-meadow-08648.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    return {
        items, setItems
    }
};

export default useItems;