import React from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import propTypes from 'prop-types';

import InlineError from '../messages/InlineError';

class ResetPasswordForm extends React.Component {
    state = {
        data: { 
            new_password: '',
            password_confirmation: '' 
        },
        errors: {}
    }
        
// handles form data state change
onChange = e => 
    this.setState({ 
        data: { ...this.state.data, [e.target.name]: e.target.value}
    });

// handles form data submission
onSubmit = (event) => {
    event.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({errors});
    if (Object.keys(errors).length === 0) {
        this.props
            .submit(this.state.data)
            .catch(err => this.setState({ errors: err.response.data, loading: false }));
    }
};

// validate form data
validate = (data) => {
    const errors = {};
    if (!data.new_password) errors.new_password = 'New password can\'t be blank';
    if (!data.password_confirmation) errors.password_confirmation = 'Password confirmation can\'t be blank';
    return errors;
}

handleDismis = () => {
    this.setState({ errors: {} });
}

render() {
    const { data, errors } = this.state;
    return (
        <Form onSubmit={this.onSubmit}>
            { errors.error && (
                <Message negative onDismiss={this.handleDismis}>
                    <Message.Header>Something went wrong</Message.Header>
                    <p>{errors.error}</p>
                </Message>
            )}
            <Form.Field error={!!errors.new_password} required>
                <label htmlFor="new_password">New Password</label>
                <input 
                    type="password"
                    id="new_password" 
                    name="new_password" 
                    value={data.new_password} 
                    onChange={this.onChange}
                />
                {errors.new_password && <InlineError text={errors.new_password} />}
            </Form.Field>
            <Form.Field error={!!errors.password_confirmation} required>
                <label htmlFor="password_confirmation">Password Confirmation</label>
                <input 
                    type="password" 
                    name="password_confirmation" 
                    id="password_confirmation" 
                    value={data.password_confirmation}
                    onChange={this.onChange}
                />
                {errors.password_confirmation && <InlineError text={errors.password_confirmation} />}
            </Form.Field>
            <Button ui button positive size='large'>Submit</Button>
        </Form>
    );
}
}

// typechecking validation
ResetPasswordForm.propTypes ={
    submit: propTypes.func
};

export default ResetPasswordForm;