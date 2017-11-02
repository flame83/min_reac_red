import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {


    render() {

        if (!this.props.user) {
            return (<div>Select a user..</div>)
        }

        return(
            <div>
                <h3>Name: {this.props.user.title}</h3>
                <h4>Description: {this.props.user.description}</h4>
            </div>
        );
    }
}


function  mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);