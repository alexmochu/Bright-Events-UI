import React from 'react';
import { Container, Message, Icon } from 'semantic-ui-react';

export default ()=>
    <Container text style={{ marginTop: '7em' }}>
        <br/>
        <Message icon color='red'>
            <Icon name='circle notched' loading />
            <Message.Content>
                <Message.Header>Something went wrong.</Message.Header>
                    We'll keep trying.
            </Message.Content>
        </Message>
    </Container>;