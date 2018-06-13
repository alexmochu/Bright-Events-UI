import React from 'react';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import EditEventForm from '../forms/EditEventForm';
import client from '../../client';


class EditEvent extends React.Component {
    
    // intitialize state & bind methods
    constructor(props) {
        super(props);
        this.state = {
            eventDetails: {},
            loading: true
        };
    }
    
    /*
    invoked just before mounting occurs. 
    It is called before render()
    */
    componentWillMount = () => {
        this.getEvent();
    }
    
    getEvent() {
        const eventId = this.props.match.params.id;
        return  client.get(`/events/${eventId}`)
            .then(res => {
                this.setState({ eventDetails: res.data.event, loading: false });
            });
    }
  
    submit = (data) =>
        this.props.editEvent(this.props.match.params.id, data)
            .then(() => this.props.history.push(`/events/${this.props.match.params.id}`))


    render() {
        document.title = 'Bright Events | Edit Event';
        return (
            <div style={{ marginTop: '7em' }}>
                <Container text>
                    <h1>Edit Event</h1>
                    {
                        this.state.loading === false &&
                        <EditEventForm submit={this.submit} event={this.state.eventDetails} />
                    }
                </Container>
            </div>
        );
    }
}

// typechecking validation
EditEvent.propTypes = {
    match: PropTypes.func,    
    history: PropTypes.shape({
        push: PropTypes.func
    }),
    editEvent: PropTypes.func
};

export default EditEvent;
