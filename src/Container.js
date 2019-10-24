import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, multiplyByTen, revertToZero, logIn } from './actions'

function Container () {
    const counter = useSelector(state => state.counter);

    return (
        <div>
            <h1>Hello this is the Container</h1>
            <h3>And this is the Current Counter</h3>
            {counter}
        </div>
    )
}

export default Container;