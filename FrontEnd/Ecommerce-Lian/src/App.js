import React, { Component } from 'react';
import './App.css';
import Home from './Pages/Home';
import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import LoginPage from './Pages/LoginPage';
// import RegisterPage from './Pages/RegisterPage';
import RegisterPage from './Pages/RegisterHooks'
import ProductsPage from './Pages/ProductsPage'
import LatihanAxios from './Pages/LatihanAxios';
import Review from './Pages/Review';
import ProductDetail from './Pages/ProductDetail';
import ManageProducts from './Pages/ManageProducts';
import Cart from './Pages/Cart';
import Transaction from './Pages/Transaction'
import { Login, keepLogin, fetchCart } from './Redux/Action';
import { connect } from 'react-redux';
import NotFound from './Pages/NotFound';
import LatihanHooks from './Pages/LatihanHooks';

class App extends Component{

  componentDidMount(){
    let token = localStorage.getItem('token')
    if(token){
      this.props.keepLogin(token)
    }
  }

  render(){
    return(
      <div>
        <Header />
        <div style={{minHeight :'75vh'}}>
          <Switch>

          <Route path='/' component={Home} exact/>
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/products' component={ProductsPage} />
          <Route path='/latihan' component={LatihanAxios} />
          <Route path='/review' component={Review} />
          <Route path='/product-detail' component={ProductDetail} />
          {
            this.props.role === 'admin'
            ?
            <Route path='/manage-product' component={ManageProducts} />
            :
            null
          }
          <Route path='/cart' component={Cart} />
          <Route path='/transaction' component={Transaction} />
          <Route path='/latihan-hooks' component={LatihanHooks}/>
          <Route path='*' component={NotFound} />
          </Switch>
        </div>
        <Footer/>
      </div>
    )
  }
}

const mapStateToProps = ({auth}) => {
  return{
    userId: auth.id,
    role : auth.role
  }
}

export default connect(mapStateToProps, { Login, keepLogin, fetchCart })(App);
