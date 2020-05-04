import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart, editCart, deleteCart, checkoutAction } from '../Redux/Action';
import { Table, Button } from 'reactstrap';
import Swal from 'sweetalert2';
import { Redirect } from 'react-router-dom';

const Cart = () => {

    const [redirectHome, setRedirectHome] = useState(false)
    
    const gState = useSelector(({ auth, cart }) => {
        return{
            cart : cart.cart,
            userId : auth.id,
            loading : cart.loading
        }
    })

    const { cart, userId } = gState;

    const dispatch = useDispatch()

    
    useEffect(() => {
        dispatch(
            fetchCart(userId)
        )
    }, [dispatch, userId])

    const decreaseQty = (id) => {
        let selected = cart.find((val) => val.id === id)
        if(selected.quantity !==1){
            selected.quantity--
            dispatch(editCart(selected, id, userId))
        }
    }

    const increaseQty = (id) => {
        let selected = cart.find((val) => val.id === id)
        selected.quantity++
        dispatch(editCart(selected, id, userId))
    }

    const renderGrandTotal = () => {
        let output = 0
        cart.forEach(val => {
            output += (val.price * val.quantity)
        });
        return output
    }

    const deleteItem = (id) => {
        Swal.fire({
            title: 'Delete item from cart?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if (result.value) {
                dispatch(deleteCart(id, userId))
            }
          })
    }
    
    const renderCart = () => {
        return cart.map((val, index) => {
            return(
                <tr key={val.id}>
                    <td>{index + 1}</td>
                    <td>{val.name}</td>
                    <td><img src={val.image} alt={val.name} height='100px' width='120px'/></td>
                    <td>{val.size}</td>
                    <td>
                        <div style={{display:'flex', justifyContent:'space-around'}}>
                            <div>
                                <Button onClick={() => decreaseQty(val.id)}>
                                    -
                                </Button>
                            </div>
                            <div>
                                <p>
                                    {val.quantity}
                                </p>
                            </div>
                            <div>
                                <Button onClick={() => increaseQty(val.id)}>
                                    +
                                </Button>
                            </div>
                        </div>
                    </td>
                    <td>Rp. {(val.price * val.quantity).toLocaleString()}</td>
                    <td>
                        <Button color='danger' onClick={() => deleteItem(val.id)}>
                            Delete
                        </Button>
                    </td>
                </tr>
            )
        })
    }

    const checkOut = () => {
        let time = new Date()
        let day = time.getDay()
        let month = time.getMonth()
        let year = time.getFullYear()
        delete cart.userId
        let data = {
            date : `${day}/${month}/${year}`,
            total : renderGrandTotal(),
            items : cart,
            userId
        }
        dispatch(checkoutAction(data, userId))
        Swal.fire(
            'Thank You!',
            'We look forward to your next purchase.',
            'success'
          )
        setRedirectHome(true)
    }

    // console.log(gState)
    if(!cart.length){
        return(
            <div>
                Empty
            </div>
        )
    }
    if(redirectHome){
        return(
            <Redirect to='/'/>
        )
    }
    return ( 
        <div>
            <Table style={{textAlign :'center'}}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Size</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // loading
                        // ?
                        renderCart()
                        // :
                        // <Loader type="Circles" color="#5A6268" height={80} width={80}/>
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Grand Total</td>
                        <td>Rp. {renderGrandTotal().toLocaleString()}</td>
                        <td>
                            <Button color='success' onClick={checkOut}>
                                Checkout
                            </Button>
                        </td>
                    </tr>
                </tfoot>
            </Table>
        </div>
    );
}
 
export default Cart;