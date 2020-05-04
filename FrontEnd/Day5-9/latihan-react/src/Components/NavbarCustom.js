import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Logout } from '../Redux/Action';

class NavbarCustom extends Component {
  state = {
    headerOpen: false
  }

  toggle = () => {
    this.setState({
      headerOpen : !this.state.headerOpen
    })
  }

  render(){
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">Welcome to Toko Susilo</NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="mr-2" />
          <Collapse isOpen={this.state.headerOpen} navbar>
            {
              this.props.username
              ?
              <Nav navbar>
                <Link to='/'>
                  <NavItem onClick={this.props.Logout}>
                    <NavLink>Log Out</NavLink>
                  </NavItem>
                </Link>
                <Link to='/method'>
                <NavItem>
                    <NavLink>Method</NavLink>
                  </NavItem>
                </Link>
              </Nav>
              :
              <Nav navbar>
                <Link to='/login'>
                  <NavItem>
                    <NavLink>Login</NavLink>
                  </NavItem>
                </Link>
                <Link to='/register'>
                  <NavItem>
                    <NavLink to="/register">Register</NavLink>
                  </NavItem>
                </Link>
              </Nav>
            } 
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return{
    username : state.contoh.username
  }
}

export default connect(mapStatetoProps,{Logout})(NavbarCustom);