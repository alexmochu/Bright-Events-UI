import React, { Component } from 'react';
import { Container, Label, Segment, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Loading from '../loading/Loading';
import client from '../../client';
import './EventItem.css';

class EventItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            eventDetails: {},
            rsvpbtnContent: 'RSVP',
            removersvpbtnContent: 'REMOVE RSVP'
        };
    }

    componentWillMount = () => {
        this.getEvent();
    }

    getEvent() {
        let eventId = this.props.match.params.id;
        client.get(`/events/${eventId}`)
            .then(res => {
                this.setState({ eventDetails: res.data });
            });
    }

    deleteEvent() {
        let eventId = this.props.match.params.id;
        client.delete(`/events/${eventId}`)
            .then(
                () => this.props.history.push('/events')
            );
    }

    rsvpEvent() {
        let eventId = this.props.match.params.id;
        client.post(`/events/${eventId}/rsvp`)
            .then(
                () => this.props.history.push('/rsvp'),
                this.setState({ rsvpbtnContent: 'Reserved'})
            );
    }

    removeRsvp(){
        let eventId = this.props.match.params.id;
        client.delete(`/events/${eventId}/rsvp`)
            .then(
                () => this.props.history.push('/rsvp'),
                this.setState({ removersvpbtnContent: 'RSVP REMOVED'})
            );
    }

    render(){
        const  event  = this.state.eventDetails.event;
        if (!this.state.eventDetails.event){
            return <Loading/>;
        }
        return(
            <div>
                <Container style={{ marginTop: '7em' }}>
                    <div>
                        <br/>
                        <Segment.Group raised>
                            <Segment className='event-title'><h1>{event.title}</h1></Segment>
                            <Segment.Group>
                                <Segment><p className='event-description'>{event.description}</p></Segment>
                            </Segment.Group>
                            <Segment.Group horizontal>
                                <Segment>
                                    <h4 className='event-details'>When: {event.date}</h4>
                                    <h4 className='event-details'>Time: {event.time}</h4>
                                </Segment>
                                <Segment><h4 className='event-details'>Where: {event.location}</h4></Segment>
                                <Segment>
                                    <Button compact positive basic size='large' content={ this.state.rsvpbtnContent } onClick={() => this.rsvpEvent()}/>
                                    <Button icon='edit' color='black' basic content='EDIT'/>
                                    <Button icon='delete' basic negative content='DELETE' onClick={() => this.deleteEvent()}/>
                                    <Button negative basic content={ this.state.removersvpbtnContent }  onClick={() => this.removeRsvp()}/>
                                </Segment>
                            </Segment.Group>
                            <Segment><Label horizontal><span className='event-category'>#{event.category}</span></Label></Segment>
                        </Segment.Group>
                    </div>
                </Container>
            </div>
        );
    }
}

EventItem.propTypes = {
    match: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
};

export default EventItem;