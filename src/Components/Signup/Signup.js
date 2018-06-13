import React from 'react';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import SignupForm from '../forms/SignupForm';


class Signup extends React.Component {
    submit = data => this.props.signup(data)
        .then(() => this.props.history.push('/login'));
    
    render() {
        document.title = 'Bright Events | Signup';
        const { isAuthenticated } = this.props;
        return (
            <div style={{ marginTop: '7em' }}>
                <Container text>
                    { !isAuthenticated?
                        <div>
                            <h1>Signup</h1>
                            <SignupForm submit={this.submit} />
                        </div>
                        :
                        <Redirect to='/events'/>
                    }
                </Container>
            </div>
        );
    }
}


// typechecking validation
Signup.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func
    }),
    message: PropTypes.string,
    isAuthenticated: PropTypes.bool,
    signup: PropTypes.func
};

export default Signup;
