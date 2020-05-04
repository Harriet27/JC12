import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Modal, Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { fetchTRX } from '../Redux/Action';

class Transaction extends Component {
    state = { 
        loading : false,
        openModal : false,
        selectedId : 0
    }

    componentDidMount(){
        this.setState({
            loading : true
        })
    }

    componentDidUpdate(){
        if(this.props.userId && this.state.loading){
            this.props.fetchTRX(this.props.userId)
            this.setState({
                loading: false
            })
        }
    }

    renderTransactionTable = () => {
        return this.props.data.map((val, index) => {
            return(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{val.date}</td>
                    <td>Rp. {val.total.toLocaleString()}</td>
                    <td>
                        <Button onClick={() => this.toggle(val.id)}>
                            Details
                        </Button>
                    </td>
                </tr>
            )
        })
    }

    toggle = (id) => {
        this.setState((prevState) => ({
            openModal: !prevState.openModal,
            selectedId : id
          }));
    }

    renderModal = (id) => {
        let { data } = this.props;
        let detail = data.find((val) => val.id === this.state.selectedId)
        if(detail){
            return(
                <div>
                  <Modal isOpen={this.state.openModal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Transaction Detail</ModalHeader>
                    <ModalBody>
                      <Table>
                          <thead>
                              <tr>
                                  <th>id</th>
                                  <th>Name</th>
                                  <th>Image</th>
                                  <th>Size</th>
                                  <th>Quantity</th>
                                  <th>Price</th>
                              </tr>
                          </thead>
                          <tbody>
                              {detail.items.map((val, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{index +1}</td>
                                        <td>{val.name}</td>
                                        <td><img src={val.image} alt={val.name} width='50px'/></td>
                                        <td>{val.size}</td>
                                        <td>{val.quantity}</td>
                                        <td>Rp. {val.price.toLocaleString()}</td>
                                    </tr>
                                )
                              })}
                          </tbody>
                      </Table>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                  </Modal>
                </div>
            )
        }
    }

    render() { 
        return ( 
            <div style={{textAlign : 'center'}}>
                <Table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Date</th>
                            <th>Total</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTransactionTable()}
                    </tbody>
                </Table>
                {this.renderModal()}
            </div>
        );
    }
}

const mapStateToProps = ({auth, trx}) => {
    return{
        userId : auth.id,
        data : trx.data
    }
}
 
export default connect(mapStateToProps, { fetchTRX })(Transaction);