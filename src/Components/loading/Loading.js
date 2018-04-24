import React from 'react';
import { Container, Message, Icon } from 'semantic-ui-react';

export default ()=>
    <Container text style={{ marginTop: '7em' }}>
        <br/>
        <Message icon>
            <Icon name='circle notched' loading />
            <Message.Content>
                <Message.Header>Just one second</Message.Header>
                    We are fetching that content for you.
            </Message.Content>
        </Message>
    </Container>;