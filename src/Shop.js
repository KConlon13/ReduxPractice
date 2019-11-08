import React, { useState, useEffect } from 'react';
import './App.css';
import Card from "./Card"
import { Link } from 'react-router-dom';

function Shop(){

    useEffect(()=> {
        fetchItems();
    }, []);

    const [ items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://chewsy-backend-api.herokuapp.com/restaurants');
        const items = await data.json()
        console.log(items)
        setItems(items)
    };

    return (
        <div>
            <h1>Shop Page</h1>

            {items.map(item => 
                <h3 key={item.restaurant_id} obj={item}>
                    <Link to={`/shop/${item.restaurant_id}`}>{item.name}</Link>
                </h3>
            )}
        </div>
    )
};

export default Shop;