import React from 'react';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { resetPassword } from '../../actions/auth';
import ResetPasswordForm from '../forms/ResetPasswordForm';


class ResetPassword extends React.Component {
    submit = data => this.props.resetPassword(data).then(() => this.props.history.push('/events'));
    
    render() {
        document.title = 'Bright Events | Reset Password';
        return (
            <div>
                <Container text style={{ marginTop: '7em' }}>
                    <h1>Reset Password</h1>
                    <ResetPasswordForm submit={this.submit}/>
                </Container>
            </div>
        );
    }
}

ResetPassword.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    resetPassword: PropTypes.func.isRequired
};

export default connect(null, { resetPassword })(ResetPassword);
