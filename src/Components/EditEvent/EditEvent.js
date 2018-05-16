import React from 'react';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import EditEventForm from '../forms/EditEventForm';
import client from '../../client';


class EditEvent extends React.Component {
    state = {
        eventDetails: {},
        loading: true,
        response: ''
    }
    constructor(props) {
        super(props);
        this.editEvent = this.editEvent.bind(this);
    }
    
    componentWillMount = () => {
        this.getEvent();
    }
    
    getEvent() {
        const eventId = this.props.match.params.id;
        return  client.get(`/events/${eventId}`)
            .then(res => {
                this.setState({ eventDetails: res.data.event,loading:false });
            });
    }
    
    editEvent(data) {
        const eventId = this.props.match.params.id;
        return  client.put(`/events/${eventId}`, data)
            .then(res => {
                this.setState({ response: res.message });
            });
    }
    
    submit = (data) =>
        this.editEvent(data).then(() => this.props.history.push('/events'));

    render() {
        document.title = 'Bright Events | Edit Event';
        return (
            <div style={{ marginTop: '7em' }}>
                <Container text>
                    <h1>Edit Event</h1>
                    {
                        !this.state.loading &&
                        <EditEventForm submit={this.submit} event={this.state.eventDetails} />
                    }
                </Container>
            </div>
        );
    }
}

EditEvent.propTypes = {
    match: PropTypes.func.isRequired,    
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    editEvent: PropTypes.func.isRequired
};

export default EditEvent;
