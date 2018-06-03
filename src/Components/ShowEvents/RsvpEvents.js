import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import EventDetail from '../EventDetail/EventDetail';
import client from '../../client';

document.title = 'Bright Events | Events';

class RsvpEvents extends React.Component {

    componentDidMount() {
        let userId = this.props.currentUserId;
        this.props.fetchRsvpEvents(userId);
    }

    render() {
        const { events } = this.props;
        return(
            <div>
                <header class="rsvp-events-header">
                    <h1 class="center">RSVP'd Events</h1>
                </header>
                <Container>
                    <div style={{ marginTop: '1.5em' }}>
                        {events.map(event =>
                            <Link
                                to={`events/${event.id}`}
                                key={event.id}>
                                <EventDetail
                                    title={event.title}
                                    description={event.description}
                                    date={event.date}
                                    location={event.location}
                                    category={event.category}
                                    id={event.id}
                                />
                            </Link>
                        )}
                    </div>
                    <br/>
                </Container>
            </div>
        );
    }
}

RsvpEvents.propTypes = {
    currentUserId: PropTypes.number.isRequired,
    events: PropTypes.obj,
    fetchRsvpEvents: PropTypes.func,
    match: PropTypes.object.isRequired
};

export default RsvpEvents;