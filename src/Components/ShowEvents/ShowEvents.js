import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Message, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './ShowEvents.css';
import EventDetail from '../EventDetail/EventDetail';
import { Notifications } from '../messages/Notifications';

class ShowEvents extends React.Component {

    /*
    invoked immediately after a component 
    is mounted. render() will be called twice 
    */
    componentDidMount() {
        this.props.fetchEvents();
        Notifications();
    }

    
    render() {
        document.title = 'Bright Events | Events';
        const { events, message } = this.props;
        return(
            <div>
                <header className="events-header">
                    <div className="center">
                        <h1>Events</h1>
                        <p>Browse events, <Link to='/event/new' className='orange-a'>create events</Link> & get involved in what you love <Icon name='heart' size='small' color='orange'></Icon>.</p>
                    </div>
                </header>
                <Container style={{ marginTop: '1.5em' }}>
                    <Container text> 
                        { message && (
                            <Message positive className='semantic-message'>
                                <p>{message}</p>
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
ShowEvents.propTypes = {
    fetchEvents: PropTypes.func,
    loading: PropTypes.bool,
    events: PropTypes.array,
    error: PropTypes.string,
    message: PropTypes.string
};

export default ShowEvents; 