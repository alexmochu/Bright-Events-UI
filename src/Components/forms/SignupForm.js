import React from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import propTypes from 'prop-types';
import isEmail from 'validator/lib/isEmail';
import { Link }  from 'react-router-dom';

import './Form.css';
import InlineError from '../messages/InlineError';
import { Notifications } from '../messages/Notifications';

class SignupForm extends React.Component {
    state = {
        data: {
            user_name: '',
            email: '',
            password: '',
            password_confirmation: '' 
        },
        loading: false,
        errors: {}
    }

    componentDidMount(){
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
        this.setState({ loading: true });
        this.props
            .submit(this.state.data)
            .catch(err => this.setState({ errors: err.response.data, loading: false }));
    }
};

// validate form data
validate = (data) => {
    const errors = {};
    if (!data.user_name) errors.user_name = 'Username can\'t be blank';
    if (!isEmail(data.email)) errors.email = 'Email can\'t be blank';    
    if (!data.password) errors.password = 'Password can\'t be blank';
    return errors;
}

render() {
    const { data, errors } = this.state;
    return (
        <Form onSubmit={this.onSubmit} className="signup-form">
            { errors.error && (
                <Message negative className='semantic-message'>
                    <Message.Header>Something went wrong</Message.Header>
                    <p>{errors.error}</p>
                </Message>
            )}
            <Form.Field error={!!errors.user_name} required>
                <label htmlFor="user_name">Username</label>
                <input 
                    type="text"
                    id="user_name" 
                    name="user_name" 
                    placeholder="Rick" 
                    value={data.user_name} 
                    onChange={this.onChange}
                />
                {errors.user_name && <InlineError text={errors.user_name} />}
            </Form.Field>
            <Form.Field error={!!errors.email} required>
                <label htmlFor="user_name">Email</label>
                <input 
                    type="email"
                    id="email" 
                    name="email" 
                    placeholder="rick@sanchez.com" 
                    value={data.email} 
                    onChange={this.onChange}
                />
                {errors.email && <InlineError text={errors.email} />}
            </Form.Field>
            <Form.Field error={!!errors.password} required>
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="existentialcrisis" 
                    value={data.password}
                    onChange={this.onChange}
                />
                {errors.password && <InlineError text={errors.password} />}
            </Form.Field>
            <Form.Field error={!!errors.password_confirmation} required>
                <label htmlFor="password_confirmation">Password Confirmation</label>
                <input 
                    type="password" 
                    name="password_confirmation" 
                    id="password_confirmation" 
                    placeholder="existentialcrisis" 
                    value={data.password_confirmation}
                    onChange={this.onChange}
                />
                {errors.password_confirmation && <InlineError text={errors.password_confirmation} />}
            </Form.Field>
            <Button ui button size='large'>Submit</Button>
            <p className='orange-link'>Already have an account? <Link to="/login">Login</Link></p>
        </Form>
    );
}
}

// typechecking validation
SignupForm.propTypes ={
    submit: propTypes.func
};

export default SignupForm;
