import React, { Component } from 'react';
import { Container, Label, Button, Image, List  } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Loading from '../loading/Loading';
import client from '../../client';
import './EventItem.css';
import userImage from '../../default-user.png';

class EventItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            eventDetails: {},
            rsvpbtnContent: 'RSVP',
            removersvpbtnContent: 'REMOVE RSVP',
            guests: [],
            rsvpd: {}
        };
    }
  
    componentDidMount() {
        let eventId = this.props.match.params.id;
        client.get(`/events/${eventId}/user/rsvp`)
            .then(res => {
                this.setState({ rsvpd: res.data });
            });
    }

    componentWillMount = () => {
        this.getEvent();
        this.getGuests();
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
            .then(res => {
                this.setState({ 'rsvpd': res.data });
                this.setState({ rsvpbtnContent: 'Reserved' });
                console.log('STATE', this.state);
            },
            );
    }

    removeRsvp() {
        let eventId = this.props.match.params.id;
        client.delete(`/events/${eventId}/rsvp`)
            .then(
                this.setState({ removersvpbtnContent: 'RSVP REMOVED' })
            );
    }

    getGuests() {
        let eventId = this.props.match.params.id;
        client.get(`/events/${eventId}/rsvp`)
            .then(res => {
                this.setState({ guests: res.data.guests });
            });
    }

    render(){
        const event = this.state.eventDetails.event;
        const guests = this.state.guests;
        const { currentUserId } = this.props;
        if (!this.state.eventDetails.event){
            return <Loading/>;
        }
        return(
            <div>
                <Container style={{ marginTop: '4em' }}>
                    <div className='event-details'>
                        <br/>
                        <h3>{event.date}</h3>
                        <h1>{event.title}</h1>
                        <p>{event.description}</p>
                        <p>{event.location}</p> 
                        <p>{event.time}</p>
                        { this.state.rsvpd.message === 'True'?
                            <Button color='orange'  content={ this.state.removersvpbtnContent } onClick={() => this.removeRsvp()}/>
                            :
                            <Button positive size='medium' content={ this.state.rsvpbtnContent } onClick={() => this.rsvpEvent()}/>
                        }

                        { currentUserId === event.user_id?
                            <span>
                                <Button icon='edit' content='EDIT'/>
                                <Button icon='delete' negative content='DELETE' onClick={() => this.deleteEvent()}/>
                            </span>
                            :
                            ''
                        }
                        <div className='event-category'>
                            <Label basic color='black' size='small'><h5>#{event.category}</h5></Label>
                        </div>
                    </div>
                    <Container className='guests-container' style={{ marginTop: '4em' }} floated='left'>
                        <h3>GUESTS</h3>
                        <List horizontal ordered>
                            {guests.map(guest =>
                                <List.Item key={guest.id}>
                                    <Image avatar src={userImage} />
                                    <List.Content>
                                        <List.Header>{guest.user_name}</List.Header>
                                        {guest.email}
                                    </List.Content>
                                </List.Item>
                            )}
                        </List>
                    </Container>
                </Container>
            </div>
        );
    }
}

EventItem.propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    currentUserId: PropTypes.number.isRequired
};

const mapStateToProps = state =>({
    currentUserId: state.auth.user.sub
});

export default connect(mapStateToProps)(EventItem);