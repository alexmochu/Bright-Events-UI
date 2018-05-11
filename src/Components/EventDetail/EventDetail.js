import React from 'react';
import { Container, Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import client from '../../client';
import './EventDetail.css';

document.title = 'Bright Events | Event';

function EventDetail(props) {
    const id  = props;
    client.get(`/events/${id}`).then(res => {
        this.setState({ event: res.data.event });
    });
    return(
        <Container text>
            <div className='event-detail'>
                <br/>
                <Card
                    fluid
                    link
                    header={props.title}
                    meta={props.date}
                    description={props.description}
                />
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