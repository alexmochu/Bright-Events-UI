import React from 'react';
import { Container, Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import client from '../../client';

document.title = 'Bright Events | Event';

function EventDetail(props) {
    const id  = props;
    client.get(`/events/${id}`).then(res => {
        this.setState({ event: res.data.event });
    });
    return(
        <Container>
            <div>
                <br/>
                <Card>
                    <Card.Content className='event-title' header={props.title} />
                    <Card.Content description={props.description} />
                    <Card.Content extra>
                        When: {props.date} | Where: {props.location}
                    </Card.Content>
                </Card>
            </div>
        </Container>
    );
}

EventDetail.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    location: PropTypes.string
};

export default EventDetail;