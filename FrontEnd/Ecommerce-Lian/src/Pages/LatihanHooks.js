import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input } from 'reactstrap';
import Axios from 'axios';
import { API_URL } from '../Support/API_URL';
import { LoginContoh } from '../Redux/Action';

const LatihanHooks = () => {

    const [store, setStore] = useState([])
    const [storeBaru, setStoreBaru] = useState('')

    useEffect(()=> {
        Axios.get(`${API_URL}/products?brand=${storeBaru}`)
        .then((res) => {
            console.log(res.data)
            setStore(res.data)
        })
    }, [storeBaru])

    // let username = useSelector((state) => state.auth.username)
    // let role = useSelector((state) => state.auth.role)
    // let global = useSelector((state) => {
    //     return {
    //         username : state.auth.username
    //     }
    // })

    // let dispatch = useDispatch()

    // const onBtnDispatch = () => {
    //     dispatch(LoginContoh())
    // }

    // console.log(storeBaru)

    return ( 
        <div>
            <Input 
            onChange={(e) => setStoreBaru(e.target.value)}
            style={{width : '200px'}}
            />
            {store.map((val) => {
                return(
                    <div>
                        {val.name}
                    </div>
                )
            })}
            
        </div>
    );
}

// Hooks penulisan baru react

export default LatihanHooks;