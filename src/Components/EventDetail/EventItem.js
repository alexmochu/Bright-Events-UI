import React, { Component } from 'react';
import { Container, Label, Icon, Segment, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Loading from '../loading/Loading';
import client from '../../client';
import './EventItem.css';

class EventItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            eventDetails: {}
        };
    }

    componentWillMount = () => {
        this.getEvent();
    }

    getEvent(){
        let eventId = this.props.match.params.id;
        client.get(`/events/${eventId}`)
            .then(res => {
                this.setState({ eventDetails: res.data });
            });
    }

    render(){
        const  event  = this.state.eventDetails.event;
        if (!this.state.eventDetails.event){
            return <Loading/>;
        }
        return(
            <div>
                <Container>
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
                                    <Button animated positive>
                                        <Button.Content visible>RSVP</Button.Content>
                                        <Button.Content hidden>
                                            <Icon name='right arrow' />
                                        </Button.Content>
                                    </Button>
                                    <Button icon='edit' content='Edit' />
                                    <Button icon='delete' negative content='Delete' />
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
    match: PropTypes.func.isRequired
};

export default EventItem;