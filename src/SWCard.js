import React from 'react';

class SWCard extends React.Component {

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

export default SWCard;