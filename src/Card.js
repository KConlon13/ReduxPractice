import React from 'react';

class Card extends React.Component {

    render(){
        return (
        <div class="restContainer">
            <div class="ui card">
                    <div class="content">
                        <a class="header">{this.props.obj.name}</a>
                    </div>
                    <div class="description">
                        {this.props.obj.location}
                    </div>
            </div>
        </div>
    )}
}

export default Card;