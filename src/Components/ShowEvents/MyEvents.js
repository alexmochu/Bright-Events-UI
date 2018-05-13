import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import EventDetail from '../EventDetail/EventDetail';
import client from '../../client';
import './ShowEvents.css';


export default class MyEvents extends React.Component {
    state = {
        events: [],
    };
    
    componentDidMount() {
        let userId = this.props.match.params.id;
        client.get(`/${userId}/events`).then(res => {
            this.setState({ events: res.data.events });
        });
    }
    
    render() {
        document.title = 'Bright Events | My Events';
        return(
            <div>
                <header class="my-events-header">
                    <h1 class="center">My Events</h1>
                </header>
                <Container style={{ marginTop: '1.5em' }}>
                    <div>
                        {this.state.events.map(event =>
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
                </Container>
            </div>
        );
    }
}

MyEvents.propTypes = {
    match: PropTypes.object.isRequired    
};