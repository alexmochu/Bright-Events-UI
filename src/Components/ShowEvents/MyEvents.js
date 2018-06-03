import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import EventDetail from '../EventDetail/EventDetail';
import './ShowEvents.css';


class MyEvents extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.id;
        this.props.fetchmyEvents(userId);
    }

    render() {
        document.title = 'Bright Events | My Events';
        const { events } = this.props;
        return(
            <div>
                <header class="my-events-header">
                    <h1 class="center">My Events</h1>
                </header>
                <Container style={{ marginTop: '1.5em' }}>
                    <div>
                        {events.map(event =>
                            <Link
                                to={'/events/' + event.id}
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

MyEvents.propTypes = {
    match: PropTypes.object.isRequired,
    events: PropTypes.array,
    fetchmyEvents: PropTypes.func
};

export default MyEvents;