import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Loading from '../../Components/loading/Loading';
import Error from '../../Components/loading/Error';
import EventDetail from '../EventDetail/EventDetail';
import './ShowEvents.css';


class ShowEvents extends React.Component {
    componentDidMount() {
        this.props.fetchEvents();
    }
    
    render() {
        document.title = 'Bright Events | Events';
        const { loading, events, error } = this.props;
        if (loading) {
            return <Loading/>;
        }
        if (error) {
            return <Error/>;
        }
        return(
            <div>
                <header className="events-header">
                    <h1 className="center">Events</h1>
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

ShowEvents.propTypes = {
    fetchEvents: PropTypes.func,
    loading: PropTypes.bool,
    events: PropTypes.array,
    error: PropTypes.string
};

export default ShowEvents; 