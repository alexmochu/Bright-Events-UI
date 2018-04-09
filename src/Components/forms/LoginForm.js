import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';
import propTypes from 'prop-types';

import InlineError from '../messages/InlineError';

class LoginForm extends React.Component {
    state = {
        data: {
            username: '',
            password: '' 
        },
        loading: false,
        errors: {}
    }

onChange = e => 
    this.setState({ 
        data: { ...this.state.data, [e.target.name]: [e.target.value]}
    });

onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({errors});
    if (Object.keys(errors).length === 0) {
        this.props.submit(this.state.data);
    }
};

validate = (data) => {
    const errors = {};
    if (!data.username) errors.username = 'Can\'t be blank';
    if (!data.password) errors.password = 'Can\'t be blank';
    return errors;
}

render() {
    const { data, errors } = this.state;

    return (
        <Form onSubmit={this.onSubmit} className="login-form">
            <Form.Field error={!!errors.username}>
                <label htmlFor="email">Username</label>
                <input 
                    type="text"
                    id="text" 
                    name="username" 
                    placeholder="eg Rick Sanchez" 
                    value={data.username} 
                    onChange={this.onChange}
                />
                {errors.username && <InlineError text={errors.username} />}
            </Form.Field>
            <Form.Field error={!!errors.password}>
                <label htmlFor="email">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="atleast 8 characters" 
                    value={data.password}
                    onChange={this.onChange}
                />
                {errors.password && <InlineError text={errors.password} />}
            </Form.Field>
            <Button ui button>Submit</Button>
        </Form>
    );
}
}

LoginForm.propTypes ={
    submit: propTypes.func.isRequired
};

export default LoginForm;