import React from 'react';
import { Container, Message, Icon } from 'semantic-ui-react';
import { Link }  from 'react-router-dom';

export default ()=>
    <Container text style={{ marginTop: '7em' }}>
        <br/>
        <Message icon>
            <Icon name='battery zero' />
            <Message.Content>
                <Message.Header>Create some content</Message.Header>
                    It's lonely in here. <Link to="/event/new">Create event.</Link>
            </Message.Content>
        </Message>
    </Container>;