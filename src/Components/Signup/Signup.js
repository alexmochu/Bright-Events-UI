import React from 'react';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SignupForm from '../forms/SignupForm';
import { signup } from '../../actions/user';


class Signup extends React.Component {
    submit = data => this.props.signup(data).then(() => this.props.history.push('/events'));
    
    render() {
        document.title = 'Bright Events | Signup';
        return (
            <div>
                <Container>
                    <h1>Signup</h1>
                    <SignupForm submit={this.submit} />
                </Container>
            </div>
        );
    }
}

Signup.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    signup: PropTypes.func.isRequired
};

export default connect(null, { signup })(Signup);