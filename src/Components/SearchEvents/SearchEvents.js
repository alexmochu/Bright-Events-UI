import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button } from 'semantic-ui-react';
import propTypes from 'prop-types';

import EventDetail from '../EventDetail/EventDetail';
import client from '../../client';
import './SearchEvents.css';


class SearchEvents extends React.Component {
    state = {
        searchedEvents: [],
        data: {
            eventName: '',
            eventLocation: '',
            eventCategory: '',
            errors: {}
        }
    };
    
    onChange = e => 
        this.setState({ 
            data: { ...this.state.data, [e.target.name]: e.target.value}
        });

    onSubmit = () => {
        let eventName = this.state.data.eventName;
        client.get(`/events?q=${eventName}`).then(res => {
            this.setState({ searchedEvents: res.data.events });
        });

        let eventLocation = this.state.data.eventLocation;
        client.get(`/events?location=${eventLocation}`).then(res => {
            this.setState({ searchedEvents: res.data.events });
        });

        let eventCategory = this.state.data.eventCategory;
        client.get(`/events?category=${eventCategory}`).then(res => {
            this.setState({ searchedEvents: res.data.events });
        });

        this.setState({
            data: {
                eventName: '',
                eventLocation: '',
                eventCategory: '',
            }
        });
    }
    
    validate = (data) => {
        const errors = {};
        if (!data.eventName) errors.eventName = 'Event Name can\'t be blank';
        return errors;
    }

    render() {
        document.title = 'Bright Events | Search Events';
        const { data } = this.state;
        return(
            <div>
                <header class="searched-events-header">
                    <h1 class="center">Search Events</h1>
                </header>
                <Container style={{ marginTop: '7em' }} text>
                    <div>
                        <Form >
                            <Form.Group inline>
                                <Form.Field>
                                    <input 
                                        type="text"
                                        id="eventName" 
                                        name="eventName" 
                                        placeholder="Event Name" 
                                        value={data.eventName} 
                                        onChange={this.onChange}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <input 
                                        type="text"
                                        id="eventLocation" 
                                        name="eventLocation" 
                                        placeholder="Event Location" 
                                        value={data.eventLocation} 
                                        onChange={this.onChange}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <input 
                                        type="text"
                                        id="eventCategory" 
                                        name="eventCategory" 
                                        placeholder="Event Category" 
                                        value={data.eventCategory} 
                                        onChange={this.onChange}
                                    />
                                </Form.Field>
                                <Button ui button onClick={this.onSubmit} color='orange'>SEARCH</Button>
                            </Form.Group>
                        </Form>
                    </div>
                    <div>
                        {this.state.searchedEvents.map(event =>
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

SearchEvents.propTypes ={
    submit: propTypes.func.isRequired
};


export default SearchEvents;