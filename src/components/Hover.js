import React, { Component } from 'react';
import UpdatedComponent from './highOrderComponent'

class Hover extends Component {
    
    render() { 
        return (
            <div>
                <span id='bun'>🌰</span>
                <p>
                        <span class="w3-badge w3-large w3-padding w3-green">{this.props.count}</span>
                </p>
                <button onMouseOver={()=>this.props.handleClick()}>Add item</button>
            </div>
         );
    }
}
 
export default UpdatedComponent(Hover);