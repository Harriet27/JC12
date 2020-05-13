import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Axios from 'axios';
import { API_URL } from '../support/API_URL';

const BiddingPage = () => {

    // const [] = useState('';);

    useEffect(() => {
        const socket = io(API_URL);
        socket.on('Connected')
    });

    return ( 
        <div>
            Bidding Page
        </div>
    );
};

export default BiddingPage;
