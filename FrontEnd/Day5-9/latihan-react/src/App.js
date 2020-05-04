import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Failed from './Pages/Failed';
import Method from './Pages/Method';
import Register from './Pages/Register';
import NavbarCustom from './Components/NavbarCustom';

class App extends Component {
  render(){
    return(
      <div>
        <NavbarCustom/>
        <Route path='/' component={Home} exact/>
        <Route path='/login' component={Login}/>
        <Route path='/failed' component={Failed}/>
        <Route path='/method' component={Method}/>
        <Route path='/register' component={Register}/>
      </div>
    )
  }
}

export default App;