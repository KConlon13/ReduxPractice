import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { restaurants } from './actions'

function Container () {
    const counter = useSelector(state => state.counter);
    const restaurantsArray = useSelector(state => state.restaurants)
    const restNames = []


    fetch("https://chewsy-backend-api.herokuapp.com/restaurants")
    .then(response=>response.json())
    .then(data => 
        restNames.push(data.map(rest => rest.name)),
        console.log(restaurantsArray)
    ) 

    let restys = restNames.map(rest=> <h1>{rest.name}</h1>)

    return (
        <div>
            <h1>Hello this is the Container</h1>
            <h3>And this is the Current Counter</h3>
            {counter}
            {/* {restNames === [] ? null : <div>{restNames}</div>} */}
            {restaurantsArray}
        </div>
    )
}

export default Container;