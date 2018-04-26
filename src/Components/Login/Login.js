import React from 'react';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { login } from '../../actions/auth';
import LoginForm from '../forms/LoginForm';


class Login extends React.Component {
    submit = (data) =>
        this.props.login(data).then(() => this.props.history.push('/event/new'));
    
    render() {
        document.title = 'Bright Events | Login';
        return (
            <div>
                <Container text style={{ marginTop: '7em' }}>
                    <h1>Login</h1>
                    <LoginForm submit={this.submit}/>
                </Container>
            </div>
        );
    }
}

Login.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
};

export default connect(null, { login })(Login);