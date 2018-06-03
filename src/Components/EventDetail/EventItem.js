import React, { Component } from 'react';
import { Container, Label, Button, Image, List, Icon, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Loading from '../loading/Loading';
import client from '../../client';
import './EventItem.css';
import userImage from '../../default-user.png';
var hdate = require('human-date');
document.title = 'Bright Events | Event';
 
class EventItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            rsvpd: {},
            errors: {}
        };
    }
  
    componentDidMount() {
        let eventId = this.props.match.params.id;
        this.props.fetchEvent(eventId);
        client.get(`/events/${eventId}/user/rsvp`)
            .then(res => {
                this.setState({ rsvpd: res.data });
            });
    }

    componentWillMount = () => {
        let eventId = this.props.match.params.id;
        this.props.fetchGuests(eventId);
    }

    deleteEvent() {
        let eventId = this.props.match.params.id;
        this.props.deleteEvent(eventId);
    }

    rsvpEvent() {
        let eventId = this.props.match.params.id;
        this.props.rsvpEvent(eventId);
    }

    removeRsvp() {
        let eventId = this.props.match.params.id;
        this.props.removeRsvp(eventId);
    }

    render(){
        const { currentUserId, event, loading, guests } = this.props;
        const { errors } = this.state;
        if (loading){
            return <Loading/>;
        }
        console.log('PROPS', this.props);
        return(
            <div>
                <Container style={{ marginTop: '3em' }}>
                    { errors.error && (
                        <Message negative size='small'>
                            <Message.Header>Something went wrong</Message.Header>
                            <p>{errors.error}</p>
                        </Message>
                    )}
                    <div className='event-details'>
                        <br/>
                        <h3>{hdate.prettyPrint(event.date)} - ({hdate.relativeTime(event.date)})</h3>
                        <h1>{event.title}</h1>
                        <p className='event_description'>{event.description}</p>
                        <p>{event.location}</p> 
                        <p>{event.time}</p>
                        { this.state.rsvpd.message === 'True'?
                            <Button color='orange' className='rsvp-btn' content='REMOVE RSVP' onClick={() => this.removeRsvp()}/>
                            :
                            <Button positive className='rsvp-btn' size='medium' content='RSVP' onClick={() => this.rsvpEvent()}/>
                        }
                        { currentUserId === event.user_id?
                            <span>
                                <Link to={'/edit/events/' + event.id}>
                                    <Button icon='edit' content='EDIT'/>
                                </Link>
                                <Button icon='delete' negative content='DELETE' onClick={() => this.deleteEvent()}/>
                            </span>
                            :
                            ''
                        }
                        <div className='event-category'>
                            <Label basic color='black' size='small'><h5>#{event.category}</h5></Label>
                        </div>
                    </div>
    
                    <h3>HOST</h3>
                    <p><Icon name='user outline'/>{event.host_name}</p>
                    <p><Icon name='mail outline'/>{event.host_email}</p>
    
                    <Container className='guests-container' style={{ marginTop: '4em' }}>
                        <h3>GUESTS ({event.guests})</h3>
                        <List horizontal>
                            {guests.map(guest =>
                                <List.Item key={guest.id}> 
                                    <Image avatar src={userImage} />
                                    <List.Content>
                                        <List.Header>{guest.user_name}</List.Header>
                                    </List.Content>
                                </List.Item>
                            )}
                        </List>
                    </Container>
                </Container>
                <br/>
            </div>
        );
    }
    
}

EventItem.propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    currentUserId: PropTypes.number.isRequired,
    fetchEvent: PropTypes.func,
    fetchGuests: PropTypes.func,
    event: PropTypes.obj,
    loading: PropTypes.bool,
    guests: PropTypes.obj,
    deleteEvent: PropTypes.func,
    rsvpEvent: PropTypes.func,
    removeRsvp: PropTypes.func,
    checkRsvp: PropTypes.func,
    rsvpd: PropTypes.obj
};

export default EventItem;