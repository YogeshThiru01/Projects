import React, { Component } from 'react';
import UpdatedComponent from './highOrderComponent'
import {UserConsumer} from './Context'

class ClassCounter extends Component {

    render() { 
        return (
            <>
                 <UserConsumer>
                    {(username) => {
                        return <h3>Welcome {username}</h3>    
                    }}
                </UserConsumer>
                <span id='hotDog'>🌭</span>
                <p>
                    <span class="w3-badge w3-large w3-padding w3-green">{this.props.count}</span>
                </p>
                <button onClick={() => this.props.handleClick()}>Add item</button>
               
            </>
         );
    }
}
 
export default UpdatedComponent(ClassCounter);