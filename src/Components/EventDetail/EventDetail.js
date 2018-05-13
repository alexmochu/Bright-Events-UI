import React from 'react';
import { Container, Card, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import TextTruncate from 'react-text-truncate';

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
                <Card fluid>
                    <Card.Content>
                        <Card.Header content={props.title} />
                        <Card.Meta content={props.date} />
                        {/* <Card.Description content={props.description} /> */}
                        <p className="event-description"><TextTruncate
                            line={2}
                            truncateText="…"
                            text={props.description}
                            textTruncateChild={<a href="#">Read on</a>}
                        />
                        </p>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name='user' />
                        {props.guests} Attending
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
    location: PropTypes.string,
    guests: PropTypes.string,
};

export default EventDetail;