import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Wallet = () => {
    return (
        <div style={styles.outerDiv}>
            <Form style={styles.form}>
                <FormGroup>
                    <Label for="exampleSelect">Top Up Value</Label>
                    <Input 
                      type="select"
                      name="select"
                      id="exampleSelect"
                      style={styles.select}
                    >
                        <option>Choose a value</option>
                        <option>10000</option>
                        <option>20000</option>
                        <option>50000</option>
                        <option>100000</option>
                    </Input>
                  <Button color="primary" style={styles.button}>Confirm</Button>
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
        // display: 'flex',
        // justifyContent: 'center',
        // margin: '50px',
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
