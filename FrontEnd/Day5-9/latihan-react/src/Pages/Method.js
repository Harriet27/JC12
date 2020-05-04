import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { Table, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { Add, Min } from '../Redux/Action';

class Method extends Component {
    state = {
        count : 0,
        data : {}
    }

    componentDidMount(){
        // console.log('ini did mount')
        Axios.get('https://reactnative.dev/movies.json')
        .then((res) => {
            console.log(res)
            this.setState({
                data : res.data
            })
            console.log(this.state.data)
        })
        .catch((err) => {

        })
    }

    componentDidUpdate(){
        console.log('ini did update')
    }
    
    componentWillUnmount(){
        console.log('ini will unmount')
    }

    tambah = () => {
        this.props.Add(this.props.count)
    }

    kurang = () => {
        this.props.Min(this.props.count)
    }

    render() {
        return (
            <div>
                <h1>{this.state.data.title}</h1>
                <h1>{this.state.data.description}</h1>
                

                <Table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Movie Name</th>
                            <th>Year Produced</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.movies
                            ?
                            this.state.data.movies.map((val) => {
                                return(
                                    <tr key={val.id}>
                                        <td>{val.id}</td>
                                        <td>{val.title}</td>
                                        <td>{val.releaseYear}</td>
                                    </tr>
                                )
                            })
                            :
                            null
                        }
                    </tbody>
                    <Link to='/'>
                        <Button>Back to Home</Button>
                    </Link>
                </Table>
                
                <input type='button' onClick={this.kurang} value='-' />
                {this.props.count}
                <input type='button' onClick={this.tambah} value='+' />
                <Link to='/'>
                    <input type='button'value='Home'/>
                </Link>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return{
        count : state.count.hitung
    }
}

export default connect(mapStatetoProps,{Add,Min})(Method);