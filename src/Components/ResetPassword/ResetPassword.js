import React from 'react';
import { Container, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import ResetPasswordForm from '../forms/ResetPasswordForm';
import { Notifications } from '../messages/Notifications';

class ResetPassword extends React.Component {

    componentDidMount(){
        Notifications();
    }
    
    token = this.props.match.params.token;
    submit = data => this.props.resetPassword(data, this.token);
    
    render() {
        document.title = 'Bright Events | Reset Password';
        const { message } = this.props;
        return (
            <div>
                <Container text style={{ marginTop: '7em' }}>
                    {message && (
                        <Message positive className='semantic-message'>
                            <p>{message}</p>
                        </Message>
                    )}
                    <h1>Reset Password</h1>
                    <ResetPasswordForm submit={this.submit}/>
                </Container>
            </div>
        );
    }
}

// typechecking validation
ResetPassword.propTypes = {
    match: PropTypes.func,
    history: PropTypes.shape({
        push: PropTypes.func
    }),
    resetPassword: PropTypes.func,
    message: PropTypes.string
};

export default ResetPassword;
