import React from 'react';
import Card from './Card'
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

    render(){
        let cardComponents = this.state.restArray.map(rest => <Card key={rest.id} obj={rest} restArray={this.state.restArray} />)

        return (
            <div>
 
            <br/>
            <h3>Restaurant Names</h3>
            {cardComponents}
        </div>
    )
    }
}


export default Container;