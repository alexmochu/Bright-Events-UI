import React from 'react';
import { Container } from 'semantic-ui-react';

import LoginForm from '../forms/LoginForm';

class Login extends React.Component {
    submit = (data) => {
        console.log(data);
    };

    render() {
        return (
            <div>
                <Container>
                    <h1>Login</h1>
                    <LoginForm submit={this.submit}/>
                </Container>
            </div>
        );
    }
}

export default Login;