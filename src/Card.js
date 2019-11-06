import React from 'react';

class Card extends React.Component {
    // state={

    // }



    render(){
        return (
            <div>
                {this.props.obj.name}
            </div>
        )
    }
}

export default Card;