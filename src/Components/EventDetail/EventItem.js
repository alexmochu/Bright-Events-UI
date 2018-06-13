import React, { Component } from 'react';
import { Container, Label, Button, List, Icon, Message, Confirm } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './EventItem.css';
import client from '../../client';
import { Notifications } from '../messages/Notifications';
var hdate = require('human-date');

document.title = 'Bright Events | Event';
 
class EventItem extends Component {
    
    // intitialize state & bind methods
    constructor(props){
        super(props);
        this.state = {
            rsvpd: '',
            errors: {},
            open: false
        };
    }
    
    /*
    invoked immediately after a component 
    is mounted. render() will be called twice 
    */
    componentDidMount() {
        let eventId = this.props.match.params.id;
        this.props.fetchEvent(eventId);
        Notifications();
    }

    /*
    invoked just before mounting occurs. 
    It is called before render()
    */
    componentWillMount = () => {
        let eventId = this.props.match.params.id;
        this.props.fetchGuests(eventId);
        client.get(`/events/${eventId}/user/rsvp`)
            .then(res => {
                this.setState({ rsvpd: res.data.message });
            });
    }

    // makes call to delete event by id
    deleteEvent(eventId) {
        this.props.deleteEvent(eventId)
            .then(() => this.props.history.push(`/user/${this.props.currentUserId}/events`));
    }

    // makes call to rsvp event by id
    rsvpEvent() {
        if (this.props.isAuthenticated) {
            let eventId = this.props.match.params.id;
            this.props.rsvpEvent(eventId, this.props.userName);
        } else {
            if (window.confirm('Login required. If you click "ok" you will be redirected. Cancel to stay on this page.')) 
            {
                window.location.href='/login';
            };
        }

    }

    // makes call to remove event rsvp by id
    removeRsvp() {
        let eventId = this.props.match.params.id;
        this.props.removeRsvp(eventId);
        this.setState({ rsvpd: 'False'});
    }
    
    handleDismis = () => {
        this.setState({ errors: {} });
    }
    
    //toggles openning & closing of confirm delete modal
    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })
        
    render(){
        const { currentUserId, event, guests, rsvpd } = this.props;
        const { errors } = this.state;
        return(
            <div>
                <Container style={{ marginTop: '2em' }}>
                    { errors.error && (
                        <Message negative size='small' onDismiss={this.handleDismis}>
                            <Message.Header>Something went wrong</Message.Header>
                            <p>{errors.error}</p>
                        </Message>
                    )}
                    <Confirm 
                        open={this.state.open}
                        onCancel={this.close}
                        onConfirm={() => this.deleteEvent(event.id)}
                        cancelButton='Never mind'
                        confirmButton="Let's do it"
                    />                    
                    <div className='event-details'>
                        <br/>
                        <h3>{hdate.prettyPrint(event.date)} - ({hdate.relativeTime(event.date)})</h3>
                        <h1>{event.title}</h1>
                        <p className='event_description'><Icon name='file outline' color='grey'/> {event.description}</p>
                        <p><Icon name='location arrow'color='grey'/> {event.location}</p> 
                        <p>{event.time}</p>
                        
                        { rsvpd || this.state.rsvpd === 'True'?
                            <Button color='orange' className='rsvp-btn' content='REMOVE RSVP' onClick={() => this.removeRsvp()}/>
                            :
                            <Button positive className='rsvp-btn' size='medium' content='RSVP' onClick={() => this.rsvpEvent()}/>
                                
                        }
                        { currentUserId === event.user_id?
                            <span>
                                <Link to={'/edit/events/' + event.id}>
                                    <Button icon='edit' content='EDIT' className='rsvp-btn'/>
                                </Link>
                                <Button icon='delete' negative content='DELETE' onClick={this.open} className='rsvp-btn'/>
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

// typechecking validation
EventItem.propTypes = {
    match: PropTypes.object,
    history: PropTypes.shape({
        push: PropTypes.func
    }),
    currentUserId: PropTypes.number,
    fetchEvent: PropTypes.func,
    fetchGuests: PropTypes.func,
    event: PropTypes.object,
    guests: PropTypes.object,
    deleteEvent: PropTypes.func,
    rsvpEvent: PropTypes.func,
    removeRsvp: PropTypes.func,
    checkRsvp: PropTypes.func,
    rsvpd: PropTypes.object,
    rsvpChecked: PropTypes.func,
    userName: PropTypes.string,
    isAuthenticated: PropTypes.bool
};

export default EventItem;