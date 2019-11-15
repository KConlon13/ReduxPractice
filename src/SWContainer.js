import React from 'react';
import SWCard from './SWCard'

class SWContainer extends React.Component {
    state = {
        restArray: []
    }

    // componentDidMount(){
    //     fetch('https://chewsy-backend-api.herokuapp.com/restaurants')
    //     .then(response=>response.json())
    //     .then(data => 
    //         this.setState({restArray: data})
    //     ) 
    // }
    componentDidMount(){
        fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(response=>response.json())
        .then(data => 
            this.setState({restArray: data})
        ) 
    }

    
    render(){

        if (this.state.restArray !== []){
            // let cardComponents = this.state.restArray.results.map(rest => <SWCard obj={rest} />)
            console.log(this.state.restArray.results)
        }


        return (
            <div>
                <br/>
                <h3>Game of Thrones Houses</h3>
                {/* {cardComponents} */}
            </div>
    )
    }
}


export default SWContainer;