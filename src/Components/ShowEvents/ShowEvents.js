import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import EventDetail from '../EventDetail/EventDetail';
import client from '../../client';
import './ShowEvents.css';


export default class ShowEvents extends React.Component {
    state = {
        events: [],
    };
    
    componentDidMount() {
        client.get('/events').then(res => {
            this.setState({ events: res.data.events });
        });
    }
    
    render() {
        document.title = 'Bright Events | Events';
        return(
            <div>
                <header class="events-header">
                    <h1 class="center">Events</h1>
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
                                    guests={event.guests}
                                />
                            </Link>
                        )}
                    </div>
                </Container>
            </div>
        );
    }
}