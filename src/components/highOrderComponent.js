import React, { Component } from 'react';

const UpdatedComponent = (OriginalComponent) => {
    class NewComponent extends Component {

        constructor(props) {
            super(props);
            this.state = {
                count: 0
             }
        }
    
        handleClick=()=> {
            this.setState(preState => {
                return {count:preState.count+1}
            })
        }

        render() { 
            return ( <OriginalComponent count={this.state.count} handleClick={this.handleClick} /> );
        }
    }
     
    return NewComponent;
}

export default UpdatedComponent