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
            searchParameter: '',
            errors: {}
        }
    };

    // handles form data state change
    onChange = e => 
        this.setState({ 
            data: { ...this.state.data, [e.target.name]: e.target.value}
        });

    // handles form data submission.
    onSubmit = () => {
        let  searchParameter = this.state.data.searchParameter;
        if (searchParameter.length) {
            this.setState({ searchedEvents: [] });
            client.get(`/events?q=${searchParameter}`).then(res => {
                this.setState({ searchedEvents: res.data.events });
            });
        }
        this.setState({
            data: {
                eventName: '',
            }
        });
    }
    
    // validate form data
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
                    <div className="center">
                        <h1>Search Events</h1>
                        <p>Search for events by title, location & category</p>
                    </div>
                </header>
                <Container style={{ marginTop: '2em' }} text>
                    <div>
                        <Form size='large'>
                            <Form.Field>
                                <input 
                                    type="text"
                                    id="searchParameter" 
                                    name="searchParameter" 
                                    placeholder="Search for your thing. eg. Yoga on Dub/ Hacky neutrino bomb detonation. We don't judge." 
                                    value={data.searchParameter} 
                                    onChange={this.onChange}
                                />
                            </Form.Field>
                            <div className='center'>
                                <Button ui button onClick={this.onSubmit} color='orange' size='large'>SEARCH</Button>
                            </div>
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
                    <br/>
                </Container>
            </div>
        );
    }
}

// typechecking validation
SearchEvents.propTypes ={
    submit: propTypes.func
};


export default SearchEvents;