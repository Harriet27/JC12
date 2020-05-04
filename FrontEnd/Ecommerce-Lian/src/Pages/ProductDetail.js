import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import Loader from 'react-loader-spinner';
import { fetchProductById, addToCartAction, fetchCart, editCart } from '../Redux/Action';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import { Redirect } from 'react-router-dom';


class ProductDetail extends Component {
    state = { 
        data : {},
        sizes : [
            {
                value: 40,
                label: 40
            },
            {
                value: 41,
                label: 41
            },
            {
                value: 42,
                label: 42
            },
            {
                value: 43,
                label: 43
            },
            {
                value: 44,
                label: 44
            },
            {
                value: 45,
                label: 45
            },
            {
                value: 46,
                label: 47
            },
        ],
        quantity : [
            {
                value: 1,
                label: 1 
            },
            {
                value: 2,
                label: 2 
            },
            {
                value: 3,
                label: 3 
            },
            {
                value: 4,
                label: 4 
            },
            {
                value: 5,
                label: 5 
            }
        ],
        redirectCart : false,
        loading: true
    }

    componentDidMount(){
        let id = this.props.location.search.split('=')[1]
        console.log(id)
        this.props.fetchProductById(id)
        // this.props.fetchCart(this.props.userId)
    }

    componentDidUpdate(){
        if(this.props.userId && this.state.loading){
            this.props.fetchCart(this.props.userId)
            this.setState({
                loading: false
            })
        }
    }

    addToCart = () => {
        let { product, userId, cart } = this.props;
        let { name, price, image, id } = product;
        let data = {
            userId,
            name,
            image,
            price,
            productId : id,
            quantity : parseInt(this.quantity.value),
            size: parseInt(this.size.value)
        }
        this.props.fetchCart(this.props.userId)
        let duplicate = cart.find((val) => val.productId === id && data.size === val.size)
        console.log(duplicate)
        if(!duplicate){
            this.props.addToCartAction(data)
            Swal.fire({
            title: 'Add to cart successful!',
            text: 'Go to cart?',
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
            })
            .then((result) => {
                if (result.value) {
                  this.setState({
                      redirectCart : true
                  })
                }
            })
        }else{
            duplicate.quantity += data.quantity
            this.props.editCart(duplicate, duplicate.id ,userId)
            Swal.fire({
                title: 'Add to cart successful!',
                text: 'Go to cart?',
                icon: 'success',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            })
            .then((result) => {
                if (result.value) {
                  this.setState({
                      redirectCart : true
                  })
                }
            })
        }
    }

    render() { 
        let { product } = this.props;
        if(this.props.loading){
            return(
                <div className='d-flex justify-content-center' style={{height: '100vh'}}>
                    <Loader type="Circles" color="#5A6268" height={80} width={80}/>
                </div>
            )
        }
        if(this.state.redirectCart){
            return(
                <Redirect to='/cart'/>
            )
        }
        return ( 
            <div className='row' style={{marginRight: 0}}>
                <div className='col-4 d-flex justify-content-center'>
                    {
                        product.image
                        ?
                        <img src={product.image} alt='sepatu' width='300px' height='220px'/>
                        :
                        <Loader type="Circles" color="#5A6268" height={80} width={80}/>
                    }
                </div>
                <div className='col-7'>
                    <div className='py-1'>
                        <h3>
                            {product.name}
                        </h3>
                    </div>
                    <div className='py-1'>
                        <h5>
                            {product.brand}
                        </h5>
                    </div>
                    <div className='py-1'>
                        {product.category}
                    </div>
                    <div className='py-1'>
                        
                        {
                            product.price
                            ?
                            <h5>
                                Rp.{product.price.toLocaleString()}
                            </h5>
                            :
                            null
                        }
                    </div>
                    <div>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div className='py-3'>
                        Size
                        <Input type='select' innerRef={(size) => this.size = size}>
                            {
                                this.state.sizes.map((val) => {
                                    return(
                                        <option value={val.value} key={val.value}>{val.value}</option>
                                    )
                                })
                            }
                        </Input>
                    </div>
                    <div className='py-3'>
                        Quantity 
                        <Input type='select' innerRef={(quantity) => this.quantity = quantity}>
                            {
                                this.state.quantity.map((val) => {
                                    return(
                                        <option value={val.value} key={val.value}>{val.value}</option>
                                    )
                                })
                            }
                        </Input>
                    </div>
                    <div className='py-3' style={{float: 'right'}}>
                        <Button onClick={this.addToCart}>
                            Add To Cart
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStatetoProps = ({product, auth, cart}) => {
    return{
        product : product.productById,
        loading : product.loading,
        userId : auth.id,
        loadingCart : cart.loading,
        cart : cart.cart
    }
}
 
export default connect(mapStatetoProps, { 
    fetchProductById, 
    addToCartAction, 
    fetchCart,
    editCart
} )(ProductDetail);