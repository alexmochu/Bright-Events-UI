import React from 'react';
import { Container, Message, Icon } from 'semantic-ui-react';
import { Link }  from 'react-router-dom';

export default ()=>
    <Container text style={{ marginTop: '7em' }}>
        <br/>
        <Message icon>
            <Icon name='battery empty' />
            <Message.Content>
                <Message.Header>No RSVP</Message.Header>
                    Get involved in stuff you love. RSVP to an <Link to="/events">event.</Link>
            </Message.Content>
        </Message>
    </Container>;