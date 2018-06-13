import React from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import propTypes from 'prop-types';
import { Link }  from 'react-router-dom';

import './Form.css';
import InlineError from '../messages/InlineError';
import { Notifications } from '../messages/Notifications';

class LoginForm extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            data: {
                user_name: '',
                password: '' 
            },
            loading: false,
            errors: {}
        };
    }
    
// handles form data state change
onChange = e => 
    this.setState({ 
        data: { ...this.state.data, [e.target.name]: e.target.value}
    });

// handles form data submission.
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
    if (!data.password) errors.password = 'Password can\'t be blank';
    return errors;
}

render() {
    const { data, errors } = this.state;
    return (
        <Form onSubmit={this.onSubmit} className="login-form">
            { errors.error && (
                <Message negative onDismiss={this.handleDismis}>
                    <Message.Header>Something went wrong</Message.Header>
                    <p>{errors.error}</p>
                </Message>
            )}
            <Form.Field error={!!errors.user_name}>
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
            <Form.Field error={!!errors.password}>
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="grassisbad" 
                    value={data.password}
                    onChange={this.onChange}
                />
                {errors.password && <InlineError text={errors.password} />}
            </Form.Field>
            <Button ui button size='large'>Submit</Button>
            <div className='center reset-password'>
                <p className='orange-link'><Link to="/request-password-reset">Forgot password? Reset password</Link></p>
                <p className='orange-link'>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </div>
        </Form>
    );
}
}

// typechecking validation
LoginForm.propTypes ={
    submit: propTypes.func
};

export default LoginForm;