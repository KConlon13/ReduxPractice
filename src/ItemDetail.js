import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function ItemDetail( match, params ) {

    useEffect(()=> {
        fetchItem();
    }, []);

    const [ item, setItem ] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://chewsy-backend-api.herokuapp.com/restaurants`)
        const item = await fetchItem.json();
        setItem(item);
        console.log(params)
    }

    return (
        <div>
            <h1>Item</h1>
        </div>
    )
};

export default ItemDetail;