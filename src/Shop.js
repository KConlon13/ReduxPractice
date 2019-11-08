import React, { useState, useEffect } from 'react';
import './App.css';
import Card from "./Card"

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

    const cardComponents = items.map(item => 
    <Card key={item.id} obj={item} restArray={items}/> )

    return (
        <div>
            <h1>Shop Page Here!</h1>
             { cardComponents } 
        </div>
    )
};

export default Shop;