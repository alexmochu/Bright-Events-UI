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
        loading: false,
        errors: {}
    }

onChange = e => 
    this.setState({ 
        data: { ...this.state.data, [e.target.name]: e.target.value}
    });

onSubmit = (event) => {
    event.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({errors});
    if (Object.keys(errors).length === 0) {
        this.setState({ loading: true });
        this.props
            .submit(this.state.data)
            .catch(err => this.setState({ errors: err.response.data, loading: false }));
    }
};

validate = (data) => {
    const errors = {};
    if (!data.new_password) errors.new_password = 'New password can\'t be blank';
    if (!data.password_confirmation) errors.password_confirmation = 'Password confirmation can\'t be blank';
    return errors;
}

render() {
    const { data, errors, loading } = this.state;
    return (
        <Form onSubmit={this.onSubmit} loading={loading}>
            { errors.error && (
                <Message negative>
                    <Message.Header>Something went wrong</Message.Header>
                    <p>{errors.error}</p>
                </Message>
            )}
            <Form.Field error={!!errors.new_password}>
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
            <Form.Field error={!!errors.password_confirmation}>
                <label htmlFor="password_confirmation">Password</label>
                <input 
                    type="password" 
                    name="password_confirmation" 
                    id="password_confirmation" 
                    value={data.password_confirmation}
                    onChange={this.onChange}
                />
                {errors.password_confirmation && <InlineError text={errors.password_confirmation} />}
            </Form.Field>
            <Button ui button positive>Submit</Button>
        </Form>
    );
}
}

ResetPasswordForm.propTypes ={
    submit: propTypes.func.isRequired
};

export default ResetPasswordForm;