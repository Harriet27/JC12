import React, { useState } from 'react';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import { Grid, GridColumn, Segment, Form } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { editProfile } from '../redux/action';

const EditProfile = () => {

    let [formInput, setFormInput] = useState({
        phone : '',
        address : ''
    });

    const dispatch = useDispatch();

    const handleEdit = (id) => {
        let { phone, address } = formInput;
        dispatch(
            editProfile(phone, address)
        );
    }

    const handleChange = (e) => {
        let { phone, address } = formInput;
        if (phone && address) {
            setFormInput({
                ...formInput,
                [e.target.name] : e.target.value
            });
        }
    }

    return(
        <Grid textAlign='center' style={{ height: '75vh', borderRadius:'25px'}} verticalAlign='middle'>
            <GridColumn style={{ maxWidth: 550 }}>
                <Form size='large'>
                    <Segment raised>
                        <FormGroup>
                            <Label for="exampleText" style={{fontSize:'18px'}} className='d-flex justify-content-center'>Phone</Label>
                            <Input type="number" name="phone" id="exampleText" placeholder='Phone' onChange={handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText" style={{fontSize:'18px'}} className='d-flex justify-content-center'>Address</Label>
                            <Input type="text" name="address" id="exampleText" placeholder='Address' onChange={handleChange} />
                        </FormGroup>
                        <Button outline fluid size='large' style={{textAlign:'center'}} onClick={handleEdit}>
                            Edit Profile
                        </Button>
                    </Segment>
                </Form>
            </GridColumn>
        </Grid>
    )
}

export default EditProfile;