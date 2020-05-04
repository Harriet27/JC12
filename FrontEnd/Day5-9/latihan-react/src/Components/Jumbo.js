import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Jumbo extends Component {
    render(){
        console.log(this.props)
        return (
            <div>
            <Jumbotron>
                <h1 className="display-3">{this.props.mainHeader}</h1>
                <p className="lead">{this.props.desc}</p>
                <hr className="my-2" />
                <p>{this.props.slogan}</p>
                <p className="lead">
                    <Link to='/login'>
                        <Button color="primary">{this.props.isiButton}</Button>
                    </Link>
                </p>
                <p>
                    <Link to='/method'>
                        <Button>Movies Table</Button>
                    </Link>
                </p>
            </Jumbotron>
            </div>
        );
    }
};

export default Jumbo;