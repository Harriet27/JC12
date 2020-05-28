import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { TopUpBalance, GetAllUsers } from '../redux/action';

const Wallet = () => {
    const dispatch = useDispatch();

    // const [formInput, setFormInput] = useState({
    //     balance: '',
    // });
    const [formInput, setFormInput] = useState({});

    useEffect(() => {
        GetAllUsers();
    });

    const handleChange= (e) => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value,
        });
        console.log(e.target.value);
    };

    const handleTopUpButton = id => {
        dispatch(TopUpBalance(id, formInput.balance));
    };

    return (
        <div style={styles.outerDiv}>
            <Form style={styles.form}>
                <FormGroup>
                    <Label for="exampleSelect">Top Up Value</Label>
                    <Input 
                      type="select" 
                      name="balance" 
                      onChange={handleChange} 
                      style={styles.select}
                    >
                        <option>Choose a value</option>
                        <option value="10000">IDR 10.000</option>
                        <option value="20000">IDR 20.000</option>
                        <option value="50000">IDR 50.000</option>
                        <option value="100000">IDR 100.000</option>
                        <option value="200000">IDR 200.000</option>
                        <option value="500000">IDR 500.000</option>
                    </Input>
                    <Button color="primary" onClick={handleTopUpButton} style={styles.button}>Confirm</Button>
                </FormGroup>
            </Form>
        </div>
    );
};

const styles = {
    outerDiv: {
        display: 'table',
        width: '100%',
    },
    form: {
        left: '70%',
        top: '70%',
        marginLeft: '-25%',
        position: 'absolute',
        marginTop: '-25%',
    },
    select: {
        width: '200px',
    },
    button: {
        width: '200px',
        marginTop: '10px',
    },
};

export default Wallet;
