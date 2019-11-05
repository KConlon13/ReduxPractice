import React from 'react';
// import { useSelector } from 'react-redux';

// const counter = useSelector(state => state.counter);
// const restaurantsArray = useSelector(state => state.restaurants)

class Container extends React.Component {
    state = {
        restArray: []
    }

    componentDidMount(){
        fetch('https://chewsy-backend-api.herokuapp.com/restaurants')
        .then(response=>response.json())
        .then(data => 
            this.setState({restArray: data})
        ) 
    }

    // restys = restNames.map(rest=> <h1>{rest.name}</h1>)
    render(){
        console.log(this.state.restArray)
        return (
            <div>
            <h1>Hello this is the Container</h1>
            <h3>And this is the Current Counter</h3>
            {/* {counter} */}
            {/* {restNames === [] ? null : <div>{restNames}</div>} */}
            {/* {restys} */}
        </div>
    )
    }
}

export default Container;