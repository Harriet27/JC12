import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Register extends Component {

    render(){
        return(
            <div>
                <h1>Ini halaman register</h1>
                <input type='text' ref='regUsername' id='regUsername'/>
                <input type='password' ref='regPass' id='regPass'/>
                <Button onClick={this.onBtnRegister}>
                    Register
                </Button>
            </div>
        )
    }

}

export default Register;