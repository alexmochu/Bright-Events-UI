import React from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import propTypes from 'prop-types';
import isEmail from 'validator/lib/isEmail';

import InlineError from '../messages/InlineError';
import { Notifications } from '../messages/Notifications';

class SubmitEmailForm extends React.Component {
    state = {
        data: { 
            email: '',
        },
        errors: {}
    }
    
    componentDidMount() {
        Notifications();
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
            .catch(err => this.setState({ errors: err.response.data }));
    }
};

// validate form data
validate = (data) => {
    const errors = {};
    if (!isEmail(data.email)) errors.email = 'Email can\'t be blank';
    return errors;
}

render() {
    const { data, errors } = this.state;
    return (
        <Form onSubmit={this.onSubmit}>
            { errors.error && (
                <Message negative className='semantic-message'>
                    <Message.Header>Something went wrong</Message.Header>
                    <p>{errors.error}</p>
                </Message>
            )}
            <Form.Field error={!!errors.email}>
                <input 
                    type="email"
                    id="email" 
                    name="email" 
                    value={data.email} 
                    onChange={this.onChange}
                    placeholder='email@example.com'
                />
                {errors.email && <InlineError text={errors.email} />}
            </Form.Field>
            <Button ui button positive size='large'>Send Link</Button>
        </Form>
    );
}
}

// typechecking validation
SubmitEmailForm.propTypes ={
    submit: propTypes.func
};

export default SubmitEmailForm;