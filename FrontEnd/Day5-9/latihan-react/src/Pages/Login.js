import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Login } from '../Redux/Action';

class LoginPage extends Component {
    state = {
        login: null,
        userData: [
            {username: 'lian', pass: 'lian123'},
            {username: 'admin', pass: 'admin'}
        ],
        inputLogin: {
            username: '',
            pass: ''
        }
    }

    // loginSuccess = () => {
    //     this.setState({
    //         login : true
    //     })
    // }

    // loginFailed = () => {
    //     this.setState({
    //         login : false
    //     })
    // }

    onBtnLogin = () => {
        this.props.Login(this.state.inputLogin.username)
        this.setState({
            login : true
        })
        // let username = this.refs.username.value;
        // let pass = this.refs.pass.value;
        // for (let val of this.state.userData) {
        //     if (val.username === username && val.pass === pass) {
        //         this.setState({login: true})
        //         break;
        //     } else {
        //         this.setState({login: false})
        //     }
        // }
        // let user = this.state.userData.find((val) => {
        //     return(
        //         val.username === username && val.pass === pass
        //     )
        // })
        // if (user) {
        //     this.setState({login: true})
        // } else {
        //     this.setState({login: false})
        // }
    }

    inputBaru = (e) => {
        // console.log(e.target.value)
        this.setState({
            inputLogin : {
                ...this.state.inputLogin,
                [e.target.id] : e.target.value
            }
        })
        console.log(this.state.inputLogin)
    }

    render(){
        console.log(this.props.userGlobal, 'ini dari global state')
        console.log(this.props.booleanGlobal)
        // console.log(this.state.login);
        if (this.state.login) {
            return(
                <Redirect to='/'></Redirect>
            )
        } else if (this.state.login === false) {
            return(
                <Redirect to={{
                    pathname:'/failed',
                    state:{
                        errorMessage:'Error Login', 
                        errorCode:'404'
                    }
                }}></Redirect>
            )
        }
        return(
            <div>
                <h1>Ini Halaman Login</h1>
                
                <input 
                type='text' 
                ref='username' 
                onChange={this.inputBaru} 
                value={this.state.inputLogin.username} 
                id='username' />
                
                <input 
                type='password' 
                ref='pass'
                onChange={this.inputBaru} 
                value={this.state.inputLogin.pass} 
                id='pass' />
                
                <Button onClick={this.onBtnLogin}>
                    Login
                </Button>
                
                {/* <Button color='success' onClick={this.loginSuccess}>
                    Login Success
                </Button>
                <Button color='danger' onClick={this.loginFailed}>
                    Login Failed
                </Button> */}
            </div>
        )
    }

}

const mapStateProps = (state) => {
    return{
        userGlobal : state.contoh.username,
        booleanGlobal : state.contoh.bolean
    }
}

// par 1 utk mengambil data dr global state par 2 utk mengganti data dari global state
export default connect(mapStateProps, {Login})(LoginPage);