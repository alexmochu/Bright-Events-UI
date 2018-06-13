import React from 'react';
import { Container, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import SubmitEmailForm from '../forms/SubmitEmailForm';
import { Notifications } from '../messages/Notifications';

class SubmitEmail extends React.Component {

    componentDidMount(){
        Notifications();
    }
    
    submit = data => this.props.requestLink(data);

    render() {
        document.title = 'Bright Events | Request Password Reset Email';
        const { message } = this.props;
        return (
            <div>
                <Container text style={{ marginTop: '7em' }}>
                    {message && (
                        <Message positive className='semantic-message'>
                            <p>{message}</p>
                        </Message>
                    )}
                    <h3>Enter your email address and we will send 
                        you a link to reset your password.</h3>
                    <SubmitEmailForm submit={this.submit}/>
                </Container>
            </div>
        );
    }
}

// typechecking validation
SubmitEmail.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func
    }),
    requestLink: PropTypes.func,
    message: PropTypes.string
};

export default SubmitEmail;
