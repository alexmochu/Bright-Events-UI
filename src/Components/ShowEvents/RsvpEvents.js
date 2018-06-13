import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import EventDetail from '../EventDetail/EventDetail';

document.title = 'Bright Events | Events';

class RsvpEvents extends React.Component {

    /*
    invoked immediately after a component 
    is mounted. render() will be called twice 
    */
    componentDidMount() {
        let userId = this.props.currentUserId;
        this.props.fetchRsvpEvents(userId);
    }

    render() {
        const { events } = this.props;
        return(
            <div>
                <header class="rsvp-events-header">
                    <div className="center">
                        <h1>RSVP'd Events</h1>
                        <p>Events you've RSVP'd to.</p>
                    </div>
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
                                    guests={event.guests}
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

// typechecking validation
RsvpEvents.propTypes = {
    currentUserId: PropTypes.number,
    events: PropTypes.object,
    fetchRsvpEvents: PropTypes.func,
    match: PropTypes.object
};

export default RsvpEvents;