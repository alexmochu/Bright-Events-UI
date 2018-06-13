import React from 'react';
import { Container, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import LoginForm from '../forms/LoginForm';
import { Notifications } from '../messages/Notifications';

class Login extends React.Component {
    
    componentDidMount(){
        Notifications();
    }
    
    // makes call to login a user
    submit = (data) =>
        this.props.login(data)
            .then(() => this.props.history.push('/events'));
    
    render() {
        const { isAuthenticated, message } = this.props;
        document.title = 'Bright Events | Login';
        return (
            <div>
                { !isAuthenticated? 
                    <Container text style={{ marginTop: '7em' }}>
                        { message && (
                            <Message positive className='semantic-message'>
                                <p>{message}</p>
                            </Message>
                        )}
                        <h1>Login</h1>
                        <LoginForm submit={this.submit}/>
                    </Container>
                    :
                    <Redirect to='/events'/> 
                }
            </div>
        );
    }
}


// typechecking validation
Login.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func
    }),
    login: PropTypes.func,
    isAuthenticated: PropTypes.bool,
    message: PropTypes.string
};

export default Login;