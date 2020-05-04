import React, { Component } from 'react';

class Failed extends Component {
    state = {  }
    render(){
        console.log(this.props.location.state)
        return(
            <div>
                <h1>Login Failed</h1>
            </div>
        )
    }
}

export default Failed;