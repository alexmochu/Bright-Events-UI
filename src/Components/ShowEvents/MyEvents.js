import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './ShowEvents.css';
import EventDetail from '../EventDetail/EventDetail';
import { Notifications } from '../messages/Notifications';

class MyEvents extends React.Component {

    /*
    invoked immediately after a component 
    is mounted. render() will be called twice 
    */
    componentDidMount() {
        let userId = this.props.match.params.id;
        this.props.fetchmyEvents(userId);
        Notifications();
    }
    
    render() {
        document.title = 'Bright Events | My Events';
        const { events, deleted } = this.props;
        return(
            <div>
                <header className="my-events-header">
                    <div className="center">
                        <h1>My Events</h1>
                        <p>Events you've created.</p>
                    </div>
                </header>
                <Container style={{ marginTop: '1.5em' }}>
                    <Container text> 
                        { deleted && (
                            <Message positive className='semantic-message'>
                                <p>Event deleted successfully.</p>
                            </Message>
                        )}
                    </Container>
                    <div>
                        {events.map(event =>
                            <Link
                                to={`/events/${event.id}`}
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
MyEvents.propTypes = {
    match: PropTypes.object,
    events: PropTypes.array,
    fetchmyEvents: PropTypes.func,
    error: PropTypes.string,
    deleted: PropTypes.bool
};

export default MyEvents; 